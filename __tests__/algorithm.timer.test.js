describe('Algorithm Timer', () => {

  let AlgorithmTimer = require('../src/algorithm_timer');
  let timer;

  beforeEach(() => {
    timer = new AlgorithmTimer;
  })

  describe('recordTime - sort', () => {
    it('returns a range of array lengths when sort is given as param', () => {
      let result = timer.recordTime('sort')
      expect(result[0]).toContain(5000);
      expect(result[19]).toContain(100000);
    })
    it('does not exceed 100,000 as the maximum length of the array', () => {
      let result = timer.recordTime('sort')
      expect(result).not.toContain(100000);
    })
  })

describe('recordTime - reverse', () => {
    it('returns a range of array lengths when reverse is given as a param', () => {
      let result = timer.recordTime('reverse')
      expect(result[0]).toContain(5000);
      expect(result[19]).toContain(100000);
    })
    it('does not exceed 100,000 as the maximum length of the array', () => {
      let result = timer.recordTime('reverse')
      expect(result).not.toContain(100000);
    })
  })
})
