'use strict';

const myArr = [];
for(let i = 0; i < 10; i++){
  myArr.push(i*3);
}

console.log(myArr);

function forLoop(arr){
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

// forLoop(myArr);

function whileLoop(arr){
  let count = 0;

  while(count < arr.length){
    console.log(arr[count]);
    count++;
  }
}

// whileLoop(myArr);

function myMap(arr, cb){
  const result = [];

  for(let i = 0; i < arr.length; i++){
    result.push(cb(arr[i]));
  }
  return result;
}

// console.log(myMap(myArr, (val)=>{
//   return val*2;
// }));

function myFilter(arr,cb){
  let result = [];

  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i])){
      result.push(arr[i]);
    }
  }

  return result;
}

// console.log(myFilter(myArr, (val) => {
//   return val%2 === 1;
// }));

function myReduce(arr, cb, initial){
  let start;

  if (!initial){
    iniital = arr[0];
    start = 1;
  } else {
    start = 1;
  }

  let result = initial;
  for(let i = start; i < arr.length; i++){
    result = cb(result, arr[i])
  }
  return result;
}

let result = myReduce(myArr, (tot, val)=>{
  tot = tot + val;
  return tot;
}, 100);
// console.log(result);

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {people, stuff};
// console.log({state});

let newPeople = ['odie', ...people, 'garfield'];
// console.log(newPeople);
const newStuff = {stuff, cars: [...stuff.cars, 'new car 1', 'new car 2']};
// console.log(newStuff);
let newState = {
  people: ['odie 2', ...people, 'garfield'],
  stuff: {
    stuff,
    cars: ['small red one', ...stuff.cars, 'big red one'],
  }
};
console.log(newState);
console.log(stuff);
