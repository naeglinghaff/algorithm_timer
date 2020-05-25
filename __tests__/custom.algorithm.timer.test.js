describe('Custom Algorithm Timer', () => {

  let CustomAlgorithmTimer = require('../src/custom_algorithm_timer');
  let timer;

  beforeEach(() => {
    timer = new CustomAlgorithmTimer;
  })

  describe('recordTime - customReverse', () => {
    xit('returns a range of array lengths when sort is given as param', () => {
      let result = timer.recordTime('customReverse')
      expect(result[0]).toContain(5000);
      expect(result[19]).toContain(100000);
    })
    xit('does not exceed 100,000 as the maximum length of the array', () => {
      let result = timer.recordTime('customReverse')
      expect(result).not.toContain(100000);
    })
    xit('returns an array with 20 results', () => {
        let result = timer.recordTime('customReverse')
        expect(result.length).toBe(20);
    })
  })
})
