'use strict';

class ChartMapper {

  constructor() {
  }

  map(data){
    let res = data.timer
    const xlabels = [];
    const values = [];
    const ctx = document.getElementById('chart').getContext('2d');
    for(var i = 0; i < res.length; i++){
      xlabels.push(res[i][0]);
      values.push(res[i][1]);
    }
    const myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: xlabels,
        datasets: [{
          label: 'Time Performance of Algorithm',
          borderColor: 'rgb(76, 166, 134)',
          data: values
        }]
      },
    });
  }

}
