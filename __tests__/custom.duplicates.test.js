describe('Custom Duplicates', () => {

  let dup = require('../src/custom_algorithms');
  let array;

  describe('customDuplicatesTest', () => {
    it('returns duplicates in an array', () => {
        array = [10, 5, 5, 6, 1, 10];
        expect(dup.customDuplicatesTest(array)).toEqual([10, 5]);
    })
  })

  describe('customDuplicates', () => {
    it('returns all values in the array after finding duplicates', () => {
      array = [10, 5, 5, 6, 1, 10, 10];
      expect(dup.customDuplicates(array)).toEqual([10, 5, 5, 6, 1, 10, 10]);
      })
    })
});
