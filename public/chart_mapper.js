"use strict";

class ChartMapper {

  constructor() {
    this._graph = undefined;
  }

// takes in json object, plots results to chart on base.html
  map(data){
    let result = data.timer
    const xlabels = [0];
    const ylabels = [0];
    const ctx = document.getElementById('chart').getContext('2d')

      // plots the data points to temporary arrays, chart will use for axis
      for(var i = 0; i < result.length; i++){
        xlabels.push(result[i][0]);
        ylabels.push(result[i][1]);
      }

      // draws new chart
      this._graph = new Chart(ctx, {
        type: 'line',
        data: {
          labels: xlabels,
          datasets: [{
            label: 'Time Performance of Algorithm',
            borderColor: 'rgb(76, 166, 134)',
            data: ylabels
          }]
        },
      });
  }
  // removes the current graph instance
  clearMap(){
    this._graph.destroy();
  }
}
