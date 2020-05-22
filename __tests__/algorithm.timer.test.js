describe('Algorithm Timer', () => {

  let AlgorithmTimer = require('../src/algorithm_timer');
  let timer;

  beforeEach(() => {
    timer = new AlgorithmTimer;
  })

  describe('record time of sort function', () => {
    it('returns a range of values, containing the sizes of the arrays', () => {
      let result = timer.recordTime('sort')
      expect(result[0]).toContain(5000);
      expect(result[19]).toContain(100000);
    })
  })
})
