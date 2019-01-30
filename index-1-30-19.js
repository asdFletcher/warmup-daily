'use strict';

const myArr = [];
for(let i =1 ; i <= 10; i++){
  myArr.push(i);
}
console.log(myArr);

function forLoop(arr){
  for(let i =0 ; i < arr.length; i++){
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
//   return val*2;
// }));

function myFilter(arr, cb){
  let result = [];
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i])){
      result.push(arr[i]);
    }
  }
  return result;
}
// console.log(myFilter(myArr, (val)=> {
//   return val%2 ===0;
// }));

function myReduce(arr, cb, initial){
  let start;
  if (!initial){
    start = 1;
    initial = arr[0];
  }else {
    start = 0;
  }
  let result = initial;
  for (let i = 0; i < arr.length; i++){
    result = cb(result, arr[i]);
  }
  return result;
}
let res = myReduce(myArr, (tot, val)=> {
  tot += val;
  return tot;
},-100);
// console.log(res);

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {people, stuff};
// console.log(state);
let newPeople = ['person 1', ...people, 'person 2'];
// console.log(newPeople);
const newStuff = {
  ...stuff,
  cars: [...stuff.cars, 'new car'],
};
// console.log(newStuff);
let newState = {
  people: ['person a', ...people, 'person b'],
  stuff: {
    ...stuff,
    cars: ['car 1', ...stuff.cars, 'car2'],
  }
};
console.log(newState);
console.log(state)

