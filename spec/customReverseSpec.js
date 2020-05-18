describe('Custom Reverse', () => {

  let customReverse = require('../src/customReverse');
  let array;

  it('returns a reversed array', () => {
      array = ['elephant', 5 , 'music', 11];
      result = customReverse(array);
      expect(result).toEqual([11, 'music', 5, 'elephant']);
    })

    xit('returns a reversed array for odd numbered arrays', () => {
        array = ['elephant', 5 , 'music', 11, 25];
        result = customReverse(array);
        expect(result).toEqual([25, 11, 'music', 5, 'elephant']);
      })

});
