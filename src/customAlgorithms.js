"use strict";

function customReverse(array){
  const LENGTH = array.length;
  let movingItem;
  if(LENGTH % 2 == 0){
    for(var i = 0; i < LENGTH / 2; i ++){
      var value = (LENGTH - 1) - i;
      let movingItem = array[i]
      var tempVar = array[value];
      array[i] = tempVar;
      array[value] = movingItem;
    }
  } else {
      for(var i = 0; i < (LENGTH - 1) / 2; i ++){
      var value = (LENGTH - 1) - i;
      let movingItem = array[i]
      var tempVar = array[value];
      array[i] = tempVar;
      array[value] = movingItem;
    }
  }
  return array;
}

//quadratic interation
function customShuffle(array){
  for(var i = 0; i < array.length; i++){
    var newArray = [];
    var randomIndex = Math.random() * array.length;
    Math.floor(randomIndex);
    newArray << array[randomIndex];
    array.slice(randomIndex);
  }
  return newArray;
}

//linear iteration
function customShuffleLinear(array) {
  for(var i = 0; i < array.length; i++){
    var newArray = [];
    var randomIndex = Math.random() * array.length;
    Math.floor(randomIndex);
    newArray << array[randomIndex];
    array[-1] = array[randomIndex];
    delete array[-1];
  }
  return newArray;
}

module.exports.customShuffle = customShuffle;
module.exports.customShuffleLinear = customShuffleLinear;
module.exports.customReverse = customReverse;
