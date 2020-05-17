describe('Custom Reverse', () => {

  let customReverse = require('../src/customReverse');
  let array;

  it('returns a reversed array', () => {
      array = ['elephant', 5 , 'music', 11];
      result = customReverse(array);
      expect(result).toEqual([11, 'music', 5, 'elephant']);
    })

});
