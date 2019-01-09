'use strict';

const myArr = [];
for(let i = 1; i <= 10; i++){
  myArr.push(i * i);
}
console.log(myArr);

function forLoop(arr){
  for(let i = 0; i<arr.length; i++){
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
  let result = [];
  for(let i = 0; i < arr.length; i++){
    result.push(cb(arr[i]));
  }
  return result;
}

// console.log(myMap(myArr, (val)=> {
//   return Math.pow(val, 0.5);
// }));

function myFilter(arr, cb){
  let result = [];

  for (let i = 0; i < arr.length; i++){
    if(cb(arr[i])){
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(myFilter(myArr, (val)=>{
//   return (val%2 ===0)
// }));

function myReduce(arr, cb, initial){
  let start;
  if (initial){
    start = 1;
  } else {
    start = 0;
    initial = arr[0];
  }
  let result = initial;
  for(let i = start; i < arr.length; i++){
    result = cb(result, arr[i], i, arr);
  }
  return result;
}

let res = myReduce(myArr, (total, val, idx, arr) => {
  return (total = total - val);
}, 0);
// console.log(res);


const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {
  stuff: stuff,
  people: people,
};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {...stuff, cars: ['small car', ...stuff.cars, 'TRUCK IS BIGG']};
let newState = {
  people: ['Odie', ...people, 'Garfield'],
  stuff: {...stuff, cars: [...stuff.cars, 'truck 1', 'small car']}
};

// console.log(newPeople);
// console.log(newStuff);
// console.log(state);
console.log(newState);
console.log(stuff);
console.log(people);


