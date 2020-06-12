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
      for(var i = 0; i < (LENGTH - 1) / 2; i++){
        var value = (LENGTH - 1) - i;
        movingItem = array[i]
        var tempVar = array[value];
        array[i] = tempVar;
        array[value] = movingItem;
    }
  }
  return array;
}

// quadratic shuffle
function customShuffle(array){
  var newArray = [];
  while(array.length > 0){
    var randomIndex = Math.floor(Math.random() * array.length);
    newArray.push(array[randomIndex]);
    var throwaway = array.splice(randomIndex, 1);
  }
  return newArray;
}

// linear shuffle
function customShuffleLinear(array) {
  let newArray = [];
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
  let results = [];
  for(var i = 0; i < array.length; i++){
    var value = array.shift();
    if(array.includes(value) === true) {
      results.push(value);
    }
  }
  return newArray;
}

// quadratic find duplicates for testing
function customDuplicatesTest(array){
  let results = [];
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
  let seen = {};
  let results = [];
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

// linear find duplicates for tests
function customDuplicatesLinearTest(array){
  const newArray = [...array];
  let seen = {};
  let results = [];
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

module.exports.customShuffle = customShuffle;
module.exports.customShuffleLinear = customShuffleLinear;
module.exports.customReverse = customReverse;
module.exports.customDuplicates = customDuplicates;
module.exports.customDuplicatesLinear = customDuplicatesLinear;
module.exports.customDuplicatesTest = customDuplicatesTest;
module.exports.customDuplicatesLinearTest = customDuplicatesLinearTest;
