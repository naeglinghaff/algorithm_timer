let ChartMapper = require('../public/chart_mapper');

describe('ChartMapper', () => {

  let mapper = new ChartMapper;
  let data = {
    timer: [
      [ 500, 0.12343],
      [1000, 0.34466]
      ]
  };

  it('should start at 0', () => {
    mapper.map(data);
    expect(mapper._graph.data.data[0]).toEqual(0);
  })
})
