"use strict";

class AlgorithmTimer {
  constructor(array) {
    this._timeTaken = 0;
    this._array = array;
  }

  recordTime(){
    let aFunction = Array.prototype.sort;
    let label = aFunction.to_s;
    console.time(label);
    aFunction.apply(this._array);
    console.timeEnd(label);
  }
}
