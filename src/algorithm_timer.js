"use strict";
const performance = require('perf_hooks').performance;
let custom = require('./customAlgorithms');

class AlgorithmTimer {

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

    // support routines to follow

    function timer(aFunction){

      if(results.length === SAMPLES - 1){
        array = [];
      }
      for(var i = 0; i < SAMPLES; i++){
        array = returnIncreasedArray(array);
        var startTime = performance.now();
        array[aFunction]();
        var endTime = performance.now();
        var item = [array.length, (endTime - startTime)]
        if(results[i] === undefined){
          results.push(item);
        } else {
        results[i][1] + item[1];
        }
      }
    }

    // increases the array size by 500
    function returnIncreasedArray(array){
      var low = array.length;
      var high = low + 500;
        for (var i = low; i < high; i++){
          var newarray = [1,2,3,4,5,6,7,8,9,10];
          var randomIndex = Math.floor(Math.random() * newarray.length);
          array.push(newarray[randomIndex]);
        }
      array = custom.customShuffleLinear(array);
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
module.exports = AlgorithmTimer
