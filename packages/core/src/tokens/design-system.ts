import get from 'lodash.get';
import set from 'lodash.set';

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
  const matched: string[] | null = str.trim().match(/[\d.\-+]*\s*(.*)/);
  return matched ? matched[1] : '';
};

export const themed = (
  key: string,
  { defaultValue: df, transformValue: tx = v => v }: themedArgs = {},
) => ({ theme }: { theme: object }) => tx(get(theme, key, df));

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
  private ds: T;

  constructor(token: T) {
    this.ds = token;
  }

  public get(key: string): any {
    return get(this.ds, key);
  }

  public getColor(key: string): any {
    const hasPath = /[.\[\]]/;
    if (hasPath.test(key)) {
      return get(this.colors, key);
    }
    return get(this.colors, `${key}.base`);
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
}

export default DesignSystem;
