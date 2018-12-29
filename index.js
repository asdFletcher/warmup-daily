'use strict';
let util = require('util');
let myArr = [];
for (let i = 1; i <= 10; i++){
  myArr.push(i);
}

console.log({myArr});


function forLoop(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
// forLoop(myArr);


function whileLoop(arr){
  let count = 0;
  while (count < arr.length){
    console.log(arr[count]);
    count++;
  }
}
// whileLoop(myArr)

function myMap(arr, callback){
  let result = [];

  for (let i = 0; i <arr.length; i++){
    
    // calculate new value
    let newValue = callback(arr[i], i);

    // push to array
    result.push(newValue);
  }

  // return the new array
  return result;
}

let mappedArr = myMap(myArr, (val, idx) => val*2);
// console.log({mappedArr});


// Desired behavior
// var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// const result = words.filter(word => word.length > 6);

function myFilter(arr, callback){
  let result = [];


  for (let i = 0; i < arr.length; i++){
    // if the callback returns true it passes the test
    if (callback(arr[i])) {
      // so we push it to the array
      result.push(arr[i]);
    };
  }
  return result;
}

let filteredArr = myFilter(myArr, (val)=> val%2 === 0 );
console.log(filteredArr);

// Desired behavior
// const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

function myReducer(arr, callback, initialValue){
  // if intitial value is provided, start at index 0
  // if intitial value is NOT provided, start at index 1, and initial value is index 0
  
  let startIndex;
  if(initialValue){
    startIndex = 0;
  } else {
    startIndex = 1;
    initialValue = arr[0];
  }
  // go thru each element
  let result = initialValue;
  for (let i = startIndex; i < arr.length; i++){
    result = callback(result, arr[i], i, arr);
  }
  return result;
}

let reducedOne = myReducer(myArr, (total, val, idx, arr) => {
  return total += val;
} ,100);

// console.log({reducedOne});


const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {people: people, stuff: stuff};


let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {
  ...stuff,
  cars: [...stuff.cars, 'Miata'],
};

// console.log({newPeople});
// console.log({newStuff});

let newState = {
  people: ['Odie', ...people, 'Garfield'], 
  stuff: {
    ...stuff,
    cars: [...stuff.cars, 'Forerunner']
  }
};

console.log('1', util.inspect(newState));
console.log('2', util.inspect(state));