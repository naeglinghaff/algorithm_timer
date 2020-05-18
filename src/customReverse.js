"use strict";

Array.prototype.customReverse = function(){
  const LENGTH = this.length;
  let movingItem;
  if(LENGTH % 2 == 0){
    for(var i = 0; i < LENGTH / 2; i ++){
      var value = (LENGTH - 1) - i;
      let movingItem = this[i]
      var tempVar = this[value];
      this[i] = tempVar;
      this[value] = movingItem;
    }
  } else {
      for(var i = 0; i < (LENGTH - 1) / 2; i ++){
      var value = (LENGTH - 1) - i;
      let movingItem = this[i]
      var tempVar = this[value];
      this[i] = tempVar;
      this[value] = movingItem;
    }
  }
  return this;
}
