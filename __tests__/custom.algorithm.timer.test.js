describe('Custom Algorithm Timer', () => {

  let CustomAlgorithmTimer = require('../src/custom_algorithm_timer');
  let timer;

  beforeEach(() => {
    timer = new CustomAlgorithmTimer;
  })

  xdescribe('recordTime - customReverse', () => {
    it('returns a range of array lengths when sort is given as param', () => {
      let result = timer.recordTime('customReverse')
      expect(result[0]).toContain(500);
      expect(result[19]).toContain(10000);
    })
    it('does not exceed 100,000 as the maximum length of the array', () => {
      let result = timer.recordTime('customReverse')
      expect(result).not.toContain(10000);
    })
    it('returns an array with 20 results', () => {
        let result = timer.recordTime('customReverse')
        expect(result.length).toBe(20);
    })
  })
})
