describe('Custom Sort', () => {

  let dup = require('../src/custom_algorithms');
  let array;

  it('returns a sorted array', () => {
      array = [10, 5, 7, 4, 2];
      expect(dup.customSelectionSort(array)).toEqual([2, 4, 5, 7, 10]);
    })

  it('returns a sorted array when there are duplicate values', () => {
      array = [10, 5, 7, 2, 4, 2];
      expect(dup.customSelectionSort(array)).toEqual([2, 2, 4, 5, 7, 10]);
    })
})
