import get from 'lodash.get';
import set from 'lodash.set';
import invariant from 'invariant';

/* ========================================
 * utils
 * ======================================== */
interface Args {
  base?: number;
  unit?: string;
}

interface themedArgs {
  defaultValue?: string | number;
  transformValue?: (value: string | number) => string | number;
}

export const pxTo = (value: string | number, { base = 16, unit = 'rem' }: Args = {}): string =>
  `${parseFloat(String(value)) / base}${unit}`;

export const toPx = (value: string | number, { base = 16 }: Args = {}): string =>
  `${parseFloat(String(value)) * base}px`;

export const parseUnit = (str: string): string | null => {
  const matched: RegExpMatchArray | null = str.trim().match(/[\d.\-+]*\s*(.*)/);
  return matched && matched[1];
};

export const themed = (
  key: string,
  { defaultValue: df, transformValue: tx = v => v }: themedArgs = {},
) => ({ theme }: { theme?: DesignTokens } = {}) => {
  if (theme) {
    return tx(DesignSystem.getValueFromToken(theme, key, df));
  }
  return df;
};

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

interface MediaQuery {
  between: (first: string, last: string) => any;
  greaterThan: (breakpoint: string) => any;
  lessThan: (breakpoint: string) => any;
}

interface DesignTokens {
  breakpoints?: string[];
  colors?: Colors;
  fonts?: FontFamilies;
  fontSizes?: number[];
  fontWeights?: FontWeights;
  media?: MediaQuery;
  radii?: number[];
  space?: number[];
  variant: string;
}

export class DesignSystem<T extends DesignTokens> {
  private _ds: T;
  private _variant: string;

  public static getValueFromToken(token: DesignTokens, key: string, defaultValue?: any) {
    const value = get(token, key, defaultValue);
    invariant(value, `Key (${key}) not found in token.`);
    return value;
  }

  public static getColorFromDS(ds: DesignTokens, key: string, variant: string) {
    const pathSeparator = /[.\[\]]/;
    const hasVariant = new RegExp(variant, 'i');
    const colors = DesignSystem.getValueFromToken(ds, 'colors');

    if (pathSeparator.test(key)) {
      if (hasVariant.test(key)) {
        return get(colors, key);
      }
      const newKey: string[] = key.split(pathSeparator).filter(s => s !== '');
      newKey.splice(1, 0, variant);
      return get(colors, newKey);
    }
    return get(colors, [key, variant]);
  }

  constructor(token: T, variant = 'base') {
    invariant(token, 'A design token is needed.');
    this._ds = token;
    this._variant = variant;
  }

  public get(key: string, defaultValue?: any): any {
    return DesignSystem.getValueFromToken(this._ds, key, defaultValue);
  }

  public getColor(key: string, variant: string = this.variant): string | object | string[] {
    return DesignSystem.getColorFromDS(this._ds, key, variant);
  }

  public get breakpoints(): string[] {
    return this.get('breakpoints');
  }

  public get colors(): Colors {
    return this.get('colors');
  }

  public get fonts(): FontFamilies {
    return this.get('fonts');
  }

  public get fontSizes(): number[] {
    return this.get('fontSizes');
  }

  public get fontWeights(): FontWeights {
    return this.get('fontWeights');
  }

  public get radii(): number[] {
    return this.get('radii');
  }

  public get space(): number[] {
    return this.get('space');
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

export default DesignSystem;
