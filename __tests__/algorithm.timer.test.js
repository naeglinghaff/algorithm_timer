describe('Algorithm Timer', () => {

  let AlgorithmTimer = require('../src/algorithm_timer');
  let timer;

  beforeEach(() => {
    timer = new AlgorithmTimer;
  })

  describe('recordTime - sort', () => {
    it('returns a range of array lengths when sort is given as param', () => {
      let result = timer.recordTime('sort')
      expect(result[0]).toContain(500);
      expect(result[19]).toContain(10000);
    })
    it('does not exceed 10,000 as the maximum length of the array', () => {
      let result = timer.recordTime('sort')
      expect(result).not.toContain(10500);
    })
    it('returns an array with 20 results', () => {
        let result = timer.recordTime('sort')
        expect(result.length).toBe(20);
    })
  })

describe('recordTime - reverse', () => {
    it('returns a range of array lengths when reverse is given as a param', () => {
      let result = timer.recordTime('reverse')
      expect(result[0]).toContain(500);
      expect(result[19]).toContain(10000);
    })
    it('does not exceed 10,000 as the maximum length of the array', () => {
      let result = timer.recordTime('reverse')
      expect(result).not.toContain(10000);
    })
    it('returns an array with 20 results', () => {
        let result = timer.recordTime('reverse')
        expect(result.length).toBe(20);
    })
  })
})
