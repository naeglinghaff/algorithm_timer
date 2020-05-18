"use strict";

module.exports = function(array){
  const LENGTH = array.length;
  let movingItem;
  for(var i = 0; i < LENGTH / 2; i ++){
    var value = (LENGTH - 1) - i;
    let movingItem = array[i]
    var tempVar = array[value];
    array[i] = tempVar;
    array[value] = movingItem;
  }
  return array;
}
