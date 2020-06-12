describe('Custom Duplicates Linear', () => {

  let dup = require('../src/custom_algorithms');
  let array;

  it('returns duplicates in an array', () => {
      array = [10, 5, 5, 6, 1, 10, 10];
      expect(dup.customDuplicatesLinearTest(array)).toEqual([5, 10]);
    })

    it('returns all values in the array after finding duplicates', () => {
        array = [10, 5, 5, 6, 1, 10, 10];
        expect(dup.customDuplicatesLinear(array)).toEqual([10, 5, 5, 6, 1, 10, 10]);
      })
});
