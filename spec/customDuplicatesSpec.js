describe('Custom Duplicates', () => {

  let dup = require('../src/customAlgorithms');
  let array;

  it('returns duplicates in an array', () => {
      array = [10, 5, 5, 6, 1, 10];
      expect(dup.customDuplicates(array)).toEqual([10, 5]);
    })
});
