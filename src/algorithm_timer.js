"use strict";
const performance = require('perf_hooks').performance;

class AlgorithmTimer {

  constructor() {
  }

  recordTime(aFunction){
    let array = [];
    let results = [];
    for(var i = 0; i < 20; i++){
      returnIncreasedArray(array);
      var startTime = performance.now();
      array[aFunction]();
      var endTime = performance.now();
      var item = [array.length, (endTime - startTime)]
      results.push(item);
    }
    return results;

    function returnIncreasedArray(array){
      var low = 0;
      var high = 5000;
        for (var i = low; i < high; i++){
          array.push(i);
        }
      return array;
    }
  }
}
module.exports = AlgorithmTimer
