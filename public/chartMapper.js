'use strict';

class ChartMapper {

  constructor() {
  }

  map(data){
    const ctx = document.getElementById('chart').getContext('2d');
    const xlabels = [];
    const ylabels = [];
    const myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Time (ms)', 'Length of array'],
        datasets: [{
          label: 'Time Performance of Algorithm',
          data: [0.14150702953338623, 0.21251404285430908, 0.1848440170288086 ]
        }]
      },
    });
  }

}
