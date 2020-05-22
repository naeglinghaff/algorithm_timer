"use strict";
const performance = require('perf_hooks').performance;
let custom = require('./customAlgorithms');

class CustomAlgorithmTimer {

  constructor() {
  }

// returns array with time of execution for parsed function and the corresponding length of the array
  recordTime(aFunction){

    // array to apply our function under test
    let array = [];
    // array of the results of the test
    let results = [];
    // number of times the tests will be performed
    const SAMPLES = 20;
    // repeated call of the timer function
    for(var i = 0; i < SAMPLES; i++){
      timer(aFunction);
    }

    return calculateAverage(results);

    // edited support routines to follow

    function timer(aFunction){
      if(results.length === SAMPLES - 1){
        resetArray(array);
      }
      for(var i = 0; i < SAMPLES; i++){
        returnIncreasedArray(array);
        var length = array.length;
        var startTime = performance.now();
        array = custom[aFunction](array);
        var endTime = performance.now();
        var item = [length, (endTime - startTime)]
        if(results[i] === undefined){
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
        for(var i = low; i < high; i++){
          array.push(i);
        }
      return array;
    }

    // resets to original assignment of empty array
    function resetArray(array){
      array = [];
      return array;
    }

    // returns the avaerage result across the samples runtime
    function calculateAverage(results){
      for(var i = 0; i < SAMPLES; i++){
        results[i][1] = results[i][1] / SAMPLES;
      }
      return results;
    }
  }
}
module.exports = CustomAlgorithmTimer
