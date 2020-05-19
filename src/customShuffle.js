"use strict";
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
