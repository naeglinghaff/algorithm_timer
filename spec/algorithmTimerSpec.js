describe('Algorithm Timer', () => {

  let AlgorithmTimer = require('../src/algorithm_timer');
  let timer;

  beforeEach(() => {
    timer = new AlgorithmTimer;
  })

  describe('recordTime', () => {
    it('returns length of array', () => {
      let result = timer.recordTime('sort')
      expect(result[0]).toContain(5000);
      expect(result[19]).toContain(100000);
    })

  })
})
