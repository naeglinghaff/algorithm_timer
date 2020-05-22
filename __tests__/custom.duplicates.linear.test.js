describe('Custom Duplicates Linear', () => {

  let dup = require('../src/customAlgorithms');
  let array;

  it('returns duplicates in an array', () => {
      array = [10, 5, 5, 6, 1, 10, 10];
      expect(dup.customDuplicatesLinear(array)).toEqual([5, 10]);
    })
});
