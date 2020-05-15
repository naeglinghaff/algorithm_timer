'use strict';

class ChartMapper {

  constructor() {
  }

  map(data){
    const xlabels = [];
    const values = [];
    const ctx = document.getElementById('chart').getContext('2d');
    for(var i = 0; i < data.length; i++){
      xlabels.push = data[i][0];
      values.push = data[i][1];
    }
    const myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [ xlabels ],
        datasets: [{
          label: 'Time Performance of Algorithm',
          data: values
        }]
      },
    });
  }

}
