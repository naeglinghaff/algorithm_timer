"use strict";

class AlgorithmTimer {
  constructor() {
  }

  recordTime(array){
    let aFunction = Array.prototype.sort;
    let label = aFunction.to_s;
    console.time(label);
    aFunction.apply(array);
    console.timeEnd(label);
  }
}
