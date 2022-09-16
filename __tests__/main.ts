import { generateDeepTaxonomy } from '../lib';

describe('generateDeepTaxonomy', () => {
  it('should generate data', () => {
    expect(generateDeepTaxonomy(1).size).toEqual(5);
    expect(generateDeepTaxonomy(1, true).size).toEqual(5);

    expect(generateDeepTaxonomy(2).size).toEqual(8);
    expect(generateDeepTaxonomy(2, true).size).toEqual(9);
  });
});
