describe('Custom Reverse', () => {

  let reverse = require('../src/customAlgorithms');
  let array;

  it('returns a reversed array', () => {
      array = ['elephant', 5 , 'music', 11];
      result = reverse.customReverse(array);
      expect(result).toEqual([11, 'music', 5, 'elephant']);
    })

    it('returns a reversed array for odd numbered arrays', () => {
        array = ['elephant', 5 , 'music', 11, 25];
        result = reverse.customReverse(array);
        expect(result).toEqual([25, 11, 'music', 5, 'elephant']);
      })

});
