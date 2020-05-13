"use strict";

class AlgorithmTimer {
  constructor() {
  }

  recordTime(array, aFunction){
    let label = aFunction.to_s;
    console.time(label);
    array[aFunction]();
    console.timeEnd(label);
  }
}
