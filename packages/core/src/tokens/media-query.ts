import invariant from 'invariant';

interface Breakpoints {
  [name: string]: string;
}

export const defaultBreakpoints: Breakpoints = {
  small: '600px',
  medium: '900px',
  large: '1200px',
  huge: '1800px',
};

export function getSizeFromBreakpoint(
  breakpointValue: string,
  breakpoints: Breakpoints = defaultBreakpoints,
): string {
  invariant(breakpointValue, 'Breakpoint value not specified.');
  let returnValue = '0';
  if (breakpoints[breakpointValue]) {
    returnValue = breakpoints[breakpointValue];
  } else if (parseInt(breakpointValue, 10)) {
    returnValue = breakpointValue;
  }
  return returnValue;
}

export function generateMediaQuery(breakpoints: Breakpoints, css: Function) {
  invariant(breakpoints, '`breakpoints` object is needed to generate media queries.');
  invariant(css, '`css` function is needed to generate styles.');

  const lessThan = (breakpoint: string) => <U extends any[]>(...args: U) => css`
    @media (max-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
      ${css(...args)}
    }
  `;

  const greaterThan = (breakpoint: string) => <U extends any[]>(...args: U) => css`
    @media (min-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
      ${css(...args)}
    }
  `;

  const between = (firstBreakpoint: string, secondBreakpoint: string) => <U extends any[]>(
    ...args: U
  ) => css`
    @media (min-width: ${getSizeFromBreakpoint(
        firstBreakpoint,
        breakpoints,
      )}) and (max-width: ${getSizeFromBreakpoint(secondBreakpoint, breakpoints)}) {
      ${css(...args)}
    }
  `;

  return {
    lessThan,
    greaterThan,
    between,
  };
}
