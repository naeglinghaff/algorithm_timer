describe('Custom Reverse', () => {

  let customReverse = require('../src/customReverse');
  let array;

  it('returns a reversed array', () => {
      array = ['elephant', 5 , 'music', 11];
      result = array.customReverse();
      expect(result).toEqual([11, 'music', 5, 'elephant']);
    })

    it('returns a reversed array for odd numbered arrays', () => {
        array = ['elephant', 5 , 'music', 11, 25];
        result = array.customReverse();
        expect(result).toEqual([25, 11, 'music', 5, 'elephant']);
      })

});
