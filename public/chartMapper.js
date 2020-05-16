'use strict';

class ChartMapper {

  constructor() {
  }

// takes in json object, plots results to chart on base.html
  map(data){
    let res = data.timer
    const xlabels = [[0]];
    const values = [[0]];
    let ctx;
    if(data.value == "sort"){
      ctx = document.getElementById('sort').getContext('2d');
    } else {
      ctx = document.getElementById('reverse').getContext('2d');
    }
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
