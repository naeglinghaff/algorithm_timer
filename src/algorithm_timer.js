"use strict";

class AlgorithmTimer {
  constructor() {
  }

  recordTime(aFunction){
    let array = [];
    let label = aFunction.to_s;
    for(var i = 0; i < 20; i++){
      returnIncreasedArray(array);
      console.time(label);
      array[aFunction]();
      console.timeEnd(label);
      console.log(array.length);
    }

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
