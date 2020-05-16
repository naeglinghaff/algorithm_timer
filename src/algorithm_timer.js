"use strict";
const performance = require('perf_hooks').performance;

class AlgorithmTimer {

  constructor() {
  }

// returns array with time of execution for parsed function and the corresponding length of the array
  recordTime(aFunction){
    let array = [];
    let results = [];
    const SAMPLES = 20;

    for(var i = 0; i < SAMPLES; i++){
      timer(aFunction);
    }

    return calculateAverage(results);
    // support routines follow

    function timer(aFunction){

      if(results.length == SAMPLES-1){
        resetArray(array);
      }
      for(var i = 0; i < SAMPLES; i++){
        returnIncreasedArray(array);
        var startTime = performance.now();
        array[aFunction]();
        var endTime = performance.now();
        var item = [array.length, (endTime - startTime)]
        if(results[i] == undefined){
          results.push(item);
        } else {
        results[i][1] + item[1];
        }
      }
    }

    // increases the array size by 5000
    function returnIncreasedArray(array){
      var low = array.length;
      var high = low + 5000;
        for (var i = low; i < high; i++){
          array.push(i);
        }
      return array;
    }

    function resetArray(array){
      array = [];
      return array;
    }

    function calculateAverage(results){
      for(var i = 0; i < SAMPLES; i++){
        results[i][1] = results[i][1] / SAMPLES;
      }
      return results;
    }
  }
}
module.exports = AlgorithmTimer
