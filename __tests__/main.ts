import {
  generateDeepTaxonomy, getFoaf, getOwl, getRdfs, getTimbl, getTimblAndFoaf,
} from '../lib';

describe('generateDeepTaxonomy', () => {
  it('should generate data', () => {
    expect(generateDeepTaxonomy(1).size).toEqual(5);
    expect(generateDeepTaxonomy(1, true).size).toEqual(5);

    expect(generateDeepTaxonomy(2).size).toEqual(8);
    expect(generateDeepTaxonomy(2, true).size).toEqual(9);
  });
});

it.each([
  ['getFoaf', 631, getFoaf],
  ['getTimbl', 330, getTimbl],
  ['getTimblAndFoaf', 961, getTimblAndFoaf],
  ['getOwl', 257, getOwl],
  ['getRdfs', 48, getRdfs],
])('%s should have %s triples', async (_, size, fn) => {
  expect((await fn()).size).toEqual(size);
});
