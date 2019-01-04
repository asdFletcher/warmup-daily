'use strict';

let myArr = [];
for (let i = 0 ; i < 10; i++){
  myArr.push(i**2 * -1);
}
console.log({myArr});

function forLoop(arr){
  for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
// console.log(forLoop(myArr));

function whileLoop(arr){
  let count = 0;
  while(count < arr.length){
    console.log(arr[count]);
    count++;
  }
}
// console.log(whileLoop(myArr));

function myMap(arr, cb){
  const result = [];

  for(let i = 0; i < arr.length; i++){
    result.push(cb(arr[i]));
  }

  return result;
}
// console.log(myMap(myArr, (val)=>{
// return val * -1;
// }));

function myFilter(arr, cb){
  const result = [];

  for(let i = 0; i < arr.length; i++){
    if( cb(arr[i]) ){
      result.push(arr[i]);
    }
  }
  return result;
}
// console.log(myFilter(myArr, (val)=>{
//   return (Math.abs(val%2) === 1);
// }));

function myReduce(arr, cb, initial){
  let start;
  if(initial){
    start = 0;
  } else {
    initial = arr[0];
    start = 1;
  }
  let total = initial;
  for (let i = 0; i < arr.length; i++){
    total = cb(total, arr[i], i, arr);
  }
  return total;
}
// console.log(myReduce(myArr, (total, val, idx, arr)=>{
//   return total += val;
// }, 0));


const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {
   people: people,
   stuff: stuff,
};


const newPeople = ['Odie', ... people, 'Garfield'];
const newStuff = {...stuff, cars: [...stuff.cars, 'mazda']};
let newState = {
  people: ['Odie', ... people, 'Garfield'],
  stuff: {...stuff, cars:[...stuff.cars, 'range rover']},
};

// console.log(newPeople);
// console.log(newStuff);
console.log(newState);
// console.log({state});