describe('Custom Sort', () => {
  
  let dep = require('../src/custom_algorithms');
  let array;

  it('returns a sorted array', () => {
      array = [10, 5, 7, 4, 2];
      expect(dep.customSort(array)).toEqual([2, 4, 5, 7, 10]);
    })
})
