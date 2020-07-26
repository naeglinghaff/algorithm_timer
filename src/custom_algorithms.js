"use strict";

// linear reverse
function customReverse(array){
  const LENGTH = array.length;
  let movingItem;
  if(LENGTH % 2 === 0){
    for(var i = 0; i < LENGTH / 2; i++){
      var value = (LENGTH - 1) - i;
      movingItem = array[i]
      var tempVar = array[value];
      array[i] = tempVar;
      array[value] = movingItem;
    }
  } else {
      for(var e = 0; e < (LENGTH - 1) / 2; e++){
        var newValue = (LENGTH - 1) - e;
        movingItem = array[e]
        var newTempVar = array[newValue];
        array[e] = newTempVar;
        array[newValue] = movingItem;
    }
  }
  return array;
}

// quadratic shuffle
function customShuffle(array){
  const newArray = [];
  while(array.length > 0){
    var randomIndex = Math.floor(Math.random() * array.length);
    newArray.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return newArray;
}

// linear shuffle
function customShuffleLinear(array) {
  const newArray = [];
  while(array.length > 0){
    var randomIndex = Math.floor(Math.random() * array.length);
    newArray.push(array[randomIndex]);
    var value = array[randomIndex];
    var throwaway = array[array.length - 1];
    array[array.length - 1] = value;
    array[randomIndex] = throwaway;
    array.pop();
  }
  return newArray;
}

// quadratic find duplicates
function customDuplicates(array){
  const newArray = [...array];
  const results = [];
  for(var i = 0; i < array.length; i++){
    var value = array.shift();
    if(array.includes(value) === true) {
      results.push(value);
    }
  }
  return newArray;
}

// quadratic find duplicates function for testing
function customDuplicatesTest(array){
  const results = [];
  for(var i = 0; i < array.length; i++){
    var value = array.shift();
    if(array.includes(value) === true) {
      results.push(value);
    }
  }
  return results;
}

// linear find duplicates
function customDuplicatesLinear(array){
  const newArray = [...array];
  const seen = {};
  const results = [];
  for(var i = 0; i < array.length; i++){
    var value = array[i];
    if(seen[value] !== undefined && !results.includes(value)){
      results.push(value);
    } else {
      seen[value] = true;
    }
  }
  return newArray;
}

// linear find duplicates for testing
function customDuplicatesLinearTest(array){
  const seen = {};
  const results = [];
  for(var i = 0; i < array.length; i++){
    var value = array[i];
    if(seen[value] !== undefined && !results.includes(value)){
      results.push(value);
    } else {
      seen[value] = true;
    }
  }
  return results;
}

// selection sort for testing
function customSelectionSort(array){
  var length = array.length;
  const newArray = [];
  while (newArray.length !== length){
    var lowest_val = Math.min(...array);
    var position = array.indexOf(lowest_val);
    var throwaway = array[array.length - 1];
    newArray.push(lowest_val);
    array[position] = throwaway
    array[array.length - 1] = lowest_val
    array.pop();
  }
  return newArray;
}


function customQuickSort(array) {

}

module.exports.customShuffle = customShuffle;
module.exports.customShuffleLinear = customShuffleLinear;
module.exports.customReverse = customReverse;
module.exports.customDuplicates = customDuplicates;
module.exports.customDuplicatesLinear = customDuplicatesLinear;
module.exports.customDuplicatesTest = customDuplicatesTest;
module.exports.customDuplicatesLinearTest = customDuplicatesLinearTest;
module.exports.customSelectionSort = customSelectionSort;
