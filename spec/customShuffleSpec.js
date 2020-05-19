describe('Custom Shuffle', () => {

  let shuffle = require('../src/customShuffle');
  let array;

  it('returns a shuffled array', () => {
      spyOn(Math, 'random').and.returnValue(0.1);
      array = ['elephant', 5 , 'music', 11];
      result = shuffle.customShuffle(array);
      expect(result).toEqual([11, 'music', 5, 'elephant']);
    })

});
