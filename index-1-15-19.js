'use strict';

let myArr = [];
for (let i = 0; i < 10; i++){
  myArr.push(i*i*i*i);
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
  while (count < arr.length){
    console.log(arr[count]);
    count++;
  }
}
// whileLoop(myArr);

function myMap(arr, cb){
  let results = [];
  for(let i = 0; i < arr.length; i++){
    results.push(cb(arr[i]));
  }
  return results;
}
let result = myMap(myArr, (val)=>{
  return Math.floor(val/1000);
})
// console.log(result);

function myFilter(arr,cb){
  let result = [];
  for(let i = 0; i < arr.length; i++){
    if( cb(arr[i])){
      result.push(arr[i]);
    }
  }
  return result;
}
let filterResult = myFilter(myArr, (val)=>{
  return (val %2 === 0);
});
// console.log(filterResult);

function myReduce(arr, cb, initial){
  let start;
  if(!initial){
    initial = arr[0];
    start = 1;
  } else {
    start = 0;
  }
  let result = initial;
  for(let i = start; i < arr.length; i++){
    result = cb(result, arr[i], i, arr);
  }
  return result;
}
let reduceResult = myReduce(myArr, (tot, val)=> tot+=val, 0);
// console.log(reduceResult);

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {people, stuff};
// console.log(state);
let newPeople = ['Odie', ...people, 'Garfield'];
// console.log(newPeople);
const newStuff = {...stuff, cars: [...stuff.cars, 'The new car!']};
// console.log(newStuff);
let newState = {
  people: ['Odie', ...people, 'Garfield'],
  stuff: {...stuff, cars: [...stuff.cars, 'new car 1', 'new car 2']},
};

// console.log(newState);

console.log(people)
console.log(stuff)