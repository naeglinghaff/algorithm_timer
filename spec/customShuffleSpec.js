describe('Custom Shuffle', () => {

  let shuffle = require('../src/customAlgorithms');
  let array;

  it('returns a shuffled array', () => {
      spyOn(Math, 'random').and.returnValue(0.1);
      array = ['elephant', 5 , 'music', 11];
      expect(shuffle.customShuffle(array)).toEqual(['elephant', 5 , 'music', 11]);
    })

});
