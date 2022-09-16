import {
  generateDeepTaxonomy, getFoaf, getTimbl, getTimblAndFoaf,
} from '../lib';

describe('generateDeepTaxonomy', () => {
  it('should generate data', () => {
    expect(generateDeepTaxonomy(1).size).toEqual(5);
    expect(generateDeepTaxonomy(1, true).size).toEqual(5);

    expect(generateDeepTaxonomy(2).size).toEqual(8);
    expect(generateDeepTaxonomy(2, true).size).toEqual(9);
  });
});

describe('getFoaf', () => {
  it('should have 631 triples', async () => {
    expect((await getFoaf()).size).toEqual(631);
  });
});

describe('getTimbl', () => {
  it('should have 330 triples', async () => {
    expect((await getTimbl()).size).toEqual(330);
  });
});

describe('getTimblAndFoaf', () => {
  it('should have 961 triples', async () => {
    expect((await getTimblAndFoaf()).size).toEqual(961);
  });
});
