import get from 'lodash.get';
import identity from 'lodash.identity';
import invariant from 'invariant';

interface Args {
  base?: number;
  unit?: string;
}

interface ThemedArgs {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValue: any;
  transformValue?<T>(value: T): T;
}

/* ========================================
 * Design System
 * ======================================== */

interface Colors {
  [name: string]: {
    [variant: string]: string | object | string[];
  };
}

interface FontFamilies {
  [name: string]: string;
}

interface FontWeights {
  [name: string]: number;
}

export interface MediaQuery {
  between(first: string, last: string): Function;
  greaterThan(breakpoint: string): Function;
  lessThan(breakpoint: string): Function;
}

interface DesignTokens {
  breakpoints?: string[];
  colors?: Colors;
  fonts?: FontFamilies;
  fontSizes?: number[];
  fontWeights?: FontWeights;
  lineHeights?: number[];
  media?: MediaQuery;
  radii?: number[];
  space?: number[];
  variant: string;
}

export class DesignSystem<T extends DesignTokens> {
  private _ds: T;
  private _variant: string;

  public static getValueFromToken<T, K extends keyof T>(
    token: DesignTokens,
    key: string,
    defaultValue?: T[K],
  ): T[K] | undefined {
    const value: T[K] | undefined = get(token, key, defaultValue);
    if (/styledvariants/i.test(key)) {
      // variants might not exist, this is fine, just return.
      return value;
    }
    invariant(value, `Key (${key}) not found in token.`);
    return value;
  }

  public static getColorFromDS<T, K extends keyof T>(
    ds: DesignTokens,
    key: string,
    variant: string,
  ): T[K] | undefined {
    const pathSeparator = /[.\[\]]/;
    const hasVariant = new RegExp(variant, 'i');
    const colors = DesignSystem.getValueFromToken(ds, 'colors');

    if (pathSeparator.test(key)) {
      if (hasVariant.test(key)) {
        return get(colors, key);
      }
      const newKey: string[] = key.split(pathSeparator).filter((s: string): boolean => s !== '');
      newKey.splice(1, 0, variant);
      return get(colors, newKey);
    }
    return get(colors, [key, variant]);
  }

  public constructor(token: T, variant = 'base') {
    invariant(token, 'A design token is needed.');
    this._ds = token;
    this._variant = variant;
  }

  public get<K extends keyof T>(key: string, defaultValue?: T[K]): T[K] | undefined {
    return DesignSystem.getValueFromToken(this._ds, key, defaultValue);
  }

  public getColor(
    key: string,
    variant: string = this.variant,
  ): string | object | string[] | undefined {
    return DesignSystem.getColorFromDS(this._ds, key, variant);
  }

  public get breakpoints(): T['breakpoints'] {
    return this.get('breakpoints');
  }

  public get colors(): T['colors'] {
    return this.get('colors');
  }

  public get fonts(): T['fonts'] {
    return this.get('fonts');
  }

  public get fontSizes(): T['fontSizes'] {
    return this.get('fontSizes');
  }

  public get fontWeights(): T['fontWeights'] {
    return this.get('fontWeights');
  }

  public get lineHeights(): T['lineHeights'] {
    return this.get('lineHeights');
  }

  public get radii(): T['radii'] {
    return this.get('radii');
  }

  public get space(): T['space'] {
    return this.get('space');
  }

  public get variant(): T['variant'] {
    return this._variant;
  }

  public set variant(v: T['variant']) {
    invariant(v, `'variant' value cannot be falsey.`);
    this._variant = v;
  }

  public toJSON(): T {
    return {
      ...this._ds,
      variant: this._variant,
    };
  }
}

/* ========================================
 * utils
 * ======================================== */
export const pxTo = (value: string | number, { base = 16, unit = 'rem' }: Args = {}): string =>
  `${parseFloat(String(value)) / base}${unit}`;

export const toPx = (value: string | number, { base = 16 }: Args = {}): string =>
  `${parseFloat(String(value)) * base}px`;

export const txPx = (value: string | number): string => toPx(value, { base: 1 });

export const parseUnit = (str: string): [number, string] => {
  const num: number = parseFloat(str);
  const matched: RegExpMatchArray | null = str.trim().match(/[\d.\-+]*\s*(.*)/);
  return [num, (matched && matched[1]) || ''];
};

export const themed = (key: string, opts: ThemedArgs): Function => <
  T extends DesignTokens,
  K extends keyof T
>({ theme }: { theme?: T } = {}): T[K] | undefined => {
  const { defaultValue = undefined, transformValue = identity } = opts || {};
  if (theme && transformValue) {
    return transformValue(DesignSystem.getValueFromToken(theme, key, defaultValue));
  }
  return defaultValue;
};

export default DesignSystem;
