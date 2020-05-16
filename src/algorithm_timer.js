"use strict";
const performance = require('perf_hooks').performance;

class AlgorithmTimer {

  constructor() {
  }

// returns array with time of execution for parsed function and the corresponding length of the array
  recordTime(aFunction){
    let array = [];
    let results = [];

    for(var i = 0; i < 10; i++){
      timer(aFunction);
    }

    function timer(aFunction){
      if(results.length == 19){
        resetArray(array);
      }
      for(var i = 0; i < 20; i++){
        returnIncreasedArray(array);
        var startTime = performance.now();
        array[aFunction]();
        var endTime = performance.now();
        var item = [array.length, (endTime - startTime)]
        if(results[i] == undefined){
          results.push(item);
        } else {
        results[i][1] + item;
        }
      }
      return results;
    }

    // increases the array size by 5000
    function returnIncreasedArray(array){
      var low = 0;
      var high = 5000;
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
      for(var i = 0; i < 20; i++){
        results[i][1] = results[i][1] / 10;
      }
      return results;
    }

    return calculateAverage(results);
  }
}
module.exports = AlgorithmTimer
