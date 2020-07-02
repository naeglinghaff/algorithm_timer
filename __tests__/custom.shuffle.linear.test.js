describe('Custom Shuffle Linear', () => {

  let shuffle = require('../src/custom_algorithms');
  let array;

  it('returns a shuffled array', () => {
    spyOn(Math, 'random').and.returnValue(0.1);
    array = ['elephant', 5 , 'music', 11];
    expect(shuffle.customShuffleLinear(array)).toEqual(['elephant', 11 , 'music', 5]);
  })
});
