import { defaultBreakpoints, getSizeFromBreakpoint, generateMediaQuery } from '../media-query';

describe('Media Query', () => {
  describe('getSizeFromBreakpoint', () => {
    it('should throw when breakpoint value is not specified', () => {
      expect(() => {
        getSizeFromBreakpoint();
      }).toThrow();
    });

    it('should return custom breakpoint value verbatim', () => {
      const expected = '599px';
      const value = getSizeFromBreakpoint('599px');
      expect(value).toBe(expected);
    });

    it('should return breakpoint value', () => {
      const expected = '600px';
      const value = getSizeFromBreakpoint('small');
      expect(value).toBe(expected);
    });

    it('should return "0"', () => {
      const expected = '0';
      const value = getSizeFromBreakpoint('whatpx');
      expect(value).toBe(expected);
    });
  });

  it('should throw when either breakpoints or css params are missing', () => {
    expect(() => {
      generateMediaQuery();
    }).toThrow();

    expect(() => {
      generateMediaQuery(defaultBreakpoints);
    }).toThrow();
  });

  describe('generateMediaQuery', () => {
    let mq;
    let css;

    beforeAll(() => {
      css = jest.fn(v => v);
      mq = generateMediaQuery(defaultBreakpoints, css);
    });

    afterEach(() => {
      css.mockReset();
    });

    it('should generate @media styles for lessThan', () => {
      const { lessThan } = mq;
      lessThan('medium')({ color: '#fff' });
      expect(css.mock.calls.length).toBe(2);
      expect(css.mock.calls[0][0]).toEqual({ color: '#fff' });
      expect(css.mock.calls[1][0]).toEqual([
        '\n    @media (max-width: ',
        ') {\n      ',
        '\n    }\n  ',
      ]);
    });

    it('should generate @media styles for greaterThan', () => {
      const { greaterThan } = mq;
      greaterThan('medium')({ color: '#fff' });
      expect(css.mock.calls.length).toBe(2);
      expect(css.mock.calls[0][0]).toEqual({ color: '#fff' });
      expect(css.mock.calls[1][0]).toEqual([
        '\n    @media (min-width: ',
        ') {\n      ',
        '\n    }\n  ',
      ]);
    });

    it('should generate @media styles for between', () => {
      const { between } = mq;
      between('small', 'large')({ color: '#fff' });
      expect(css.mock.calls.length).toBe(2);
      expect(css.mock.calls[0][0]).toEqual({ color: '#fff' });
      expect(css.mock.calls[1][0]).toEqual([
        '\n    @media (min-width: ',
        ') and (max-width: ',
        ') {\n      ',
        '\n    }\n  ',
      ]);
    });
  });
});
