import ms from '../modular-scale';

describe('modular-scale', () => {
  it('should exist', () => {
    expect(ms).toBeDefined();
  });

  it('should return results for the golden ratio by default', () => {
    expect(ms()).toEqual(1);
    expect(ms(1)).toEqual(1.61803398875);
    expect(ms(2)).toEqual(2.618033988750235);
  });

  it('should let you specify one of the musical ratios', () => {
    // minor second
    expect(ms(0, 'minor second')).toEqual(1);
    expect(ms(1, 'minor second')).toEqual(Math.pow(16 / 15, 1));
    expect(ms(2, 'minor second')).toEqual(Math.pow(16 / 15, 2));
    // minor seventh
    expect(ms(0, 'minor seventh')).toEqual(1);
    expect(ms(1, 'minor seventh')).toEqual(Math.pow(16 / 9, 1));
    expect(ms(2, 'minor seventh')).toEqual(Math.pow(16 / 9, 2));
  });

  it('should let you pass it arbitrary ratios', () => {
    expect(ms(1, 3.21)).toEqual(Math.pow(3.21, 1));
    expect(ms(2, 3.21)).toEqual(Math.pow(3.21, 2));
  });

  it('negative values should work', () => {
    expect(ms(-1)).toEqual(Math.pow(1.61803398875, -1));
    expect(ms(-2)).toEqual(Math.pow(1.61803398875, -2));
  });

  it('should ignore non-valid musical ratios and just use golden', () => {
    expect(ms(1, 'so wrong')).toEqual(1.61803398875);
    expect(ms(2, 'also wrong')).toEqual(2.618033988750235);
  });
});
