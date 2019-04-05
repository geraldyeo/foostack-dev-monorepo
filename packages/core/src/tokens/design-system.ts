import get from 'lodash.get';
import invariant from 'invariant';

/* ========================================
 * utils
 * ======================================== */
interface Args {
  base?: number;
  unit?: string;
}

interface themedArgs {
  defaultValue?: any;
  transformValue?: (value: any) => any;
}

export const pxTo = (value: any, { base = 16, unit = 'rem' }: Args = {}): string =>
  `${parseFloat(value) / base}${unit}`;

export const toPx = (value: any, { base = 16 }: Args = {}): string =>
  `${parseFloat(value) * base}px`;

export const parseUnit = (str: string): string => {
  const matched: any = str.trim().match(/[\d.\-+]*\s*(.*)/);
  return matched && matched[1];
};

export const themed = (
  key: string,
  { defaultValue: df, transformValue: tx = v => v }: themedArgs = {},
) => ({ theme }: { theme?: DesignSystem<{}> } = {}) => {
  if (theme && theme.get) {
    return tx(theme.get(key, df));
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
}

class DesignSystem<T extends DesignTokens> {
  private _ds: T;

  constructor(token: T) {
    invariant(token, 'A design token is needed.');
    this._ds = token;
  }

  public get(key: string, defaultValue?: any): any {
    const value = get(this._ds, key, defaultValue);
    invariant(value, `Parent key (${key}) not found in token.`);
    return value;
  }

  public getColor(key: string, variant: string = 'base'): any {
    const pathSeparator = /[.\[\]]/;
    const hasVariant = new RegExp(variant, 'i');
    if (pathSeparator.test(key)) {
      if (hasVariant.test(key)) {
        return get(this.colors, key);
      }
      let newKey: any = key.split(pathSeparator).filter(s => s !== '');
      newKey.splice(1, 0, variant);
      return get(this.colors, newKey);
    }
    return get(this.colors, [key, variant]);
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

  public toJSON(): T {
    return this._ds;
  }
}

export default DesignSystem;
