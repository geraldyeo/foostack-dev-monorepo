import DesignSystem, { pxTo, toPx, parseUnit, themed } from '../design-system';

describe('DesignSystem', () => {
  let ds;

  it('constructor should throw when not given a token', () => {
    expect(() => {
      ds = new DesignSystem();
    }).toThrow();
  });

  it('should create an instance', () => {
    ds = new DesignSystem({});
    expect(ds).toBeDefined();
  });

  describe('class', () => {
    const token = {
      breakpoints: ['40rem', '60rem', '100rem', '120rem'],
      colors: {
        accents: {
          base: ['#123456'],
        },
        neutrals: {
          base: ['#333'],
        },
        black: {
          base: '#101010',
        },
      },
      fonts: {
        system: 'systemui',
      },
      fontSizes: ['12px', '14px', '16px'],
      fontWeights: {
        light: 300,
        regular: 400,
      },
      radii: [0, 2, 4],
      space: [0, 4, 8, 16, 32],
    };

    beforeAll(() => {
      ds = new DesignSystem(token, 'base');
    });

    it('should return the design system token', () => {
      expect(ds.toJSON()).toEqual({ ...token, variant: 'base' });
    });

    it('should get breakpoints property', () => {
      expect(ds.breakpoints).toEqual(token.breakpoints);
    });

    it('should get colors property', () => {
      expect(ds.colors).toEqual(token.colors);
    });

    it('should get the color "black"', () => {
      expect(ds.getColor('black')).toBe(token.colors.black.base);
      expect(ds.getColor('black.base')).toBe(token.colors.black.base);
    });

    it('should get the first color in "accents"', () => {
      expect(ds.getColor('accents.base.0', 'base')).toBe(token.colors.accents.base[0]);
      expect(ds.getColor('accents.base.0')).toBe(token.colors.accents.base[0]);
      expect(ds.getColor('accents.0')).toBe(token.colors.accents.base[0]);
    });

    it('should get fonts property', () => {
      expect(ds.fonts).toEqual(token.fonts);
    });

    it('should get fontSizes property', () => {
      expect(ds.fontSizes).toEqual(token.fontSizes);
    });

    it('should get fontWeights property', () => {
      expect(ds.fontWeights).toEqual(token.fontWeights);
    });

    it('should get variant property', () => {
      expect(ds.variant).toEqual('base');
    });

    it('should set variant property', () => {
      expect(() => {
        ds.variant = undefined;
      }).toThrow();
      ds.variant = 'dark';
      expect(ds.variant).toEqual('dark');
    });

    it('should get radii property', () => {
      expect(ds.radii).toEqual(token.radii);
    });

    it('should get space property', () => {
      expect(ds.space).toEqual(token.space);
    });

    describe('helpers', () => {
      it('should convert px to rem unit', () => {
        const expected = '2rem';
        const value = pxTo('32px');
        expect(value).toBe(expected);
      });

      it('should convert px to em unit', () => {
        const expected = '2em';
        const value = pxTo('32px', { unit: 'em' });
        expect(value).toBe(expected);
      });

      it('should convert to px unit', () => {
        const expected = '32px';
        let value = toPx(32);
        expect(value).toBe(expected);

        value = toPx('2rem', { base: 16 });
        expect(value).toBe(expected);
      });

      it('should parse unit', () => {
        expect(parseUnit('2em')).toBe('em');
        expect(parseUnit('2rem')).toBe('rem');
      });

      it('should get value from theme', () => {
        let value = themed('colors.black.base')({ theme: ds });
        expect(value).toBe(token.colors.black.base);

        value = themed('colors.missing.size', {
          defaultValue: 16,
          transformValue: v => toPx(v, { base: 1 }),
        })({
          theme: ds,
        });
        expect(value).toBe('16px');

        value = themed('colors.missing.pink', { defaultValue: 'red' })({ theme: ds });
        expect(value).toBe('red');

        value = themed('colors.missing.pink', { defaultValue: 'red' })();
        expect(value).toBe('red');
      });
    });
  });
});
