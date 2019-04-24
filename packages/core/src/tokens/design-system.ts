import get from 'lodash.get';
import identity from 'lodash.identity';
import invariant from 'invariant';

interface Args {
  base?: number;
  unit?: string;
}

interface ThemedArgs {
  defaultValue?: string | number;
  transformValue?: (value: string | number) => string | number;
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
  between: (first: string, last: string) => Function;
  greaterThan: (breakpoint: string) => Function;
  lessThan: (breakpoint: string) => Function;
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

  public static getValueFromToken(
    token: DesignTokens,
    key: string,
    defaultValue?: string | number,
  ): string | number | object | string[] | number[] {
    const value = get(token, key, defaultValue);
    if (/styledvariants/i.test(key)) {
      // variants might not exist, this is fine, just return.
      return value;
    }
    invariant(value, `Key (${key}) not found in token.`);
    return value;
  }

  public static getColorFromDS(ds: DesignTokens, key: string, variant: string): string {
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

  public get(
    key: string,
    defaultValue?: string | number,
  ): string | number | object | string[] | number[] {
    return DesignSystem.getValueFromToken(this._ds, key, defaultValue);
  }

  public getColor(key: string, variant: string = this.variant): string | object | string[] {
    return DesignSystem.getColorFromDS(this._ds, key, variant);
  }

  public get breakpoints(): string[] {
    return this.get('breakpoints') as string[];
  }

  public get colors(): Colors {
    return this.get('colors') as Colors;
  }

  public get fonts(): FontFamilies {
    return this.get('fonts') as FontFamilies;
  }

  public get fontSizes(): number[] {
    return this.get('fontSizes') as number[];
  }

  public get fontWeights(): FontWeights {
    return this.get('fontWeights') as FontWeights;
  }

  public get lineHeights(): number[] {
    return this.get('lineHeights') as number[];
  }

  public get radii(): number[] {
    return this.get('radii') as number[];
  }

  public get space(): number[] {
    return this.get('space') as number[];
  }

  public get variant(): string {
    return this._variant;
  }

  public set variant(v: string) {
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

export const themed = (
  key: string,
  { defaultValue: df, transformValue: tx = identity }: ThemedArgs = {},
): Function => ({ theme }: { theme?: DesignTokens } = {}): string | number | undefined => {
  if (theme) {
    return tx(DesignSystem.getValueFromToken(theme, key, df) as string);
  }
  return df;
};

export default DesignSystem;
