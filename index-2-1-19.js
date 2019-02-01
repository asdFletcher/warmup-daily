'use strict';

const myArr = [];
for(let i = 1; i <= 10; i++){
  myArr.push(i);
}

function forLoop(arr){
  for(let i = 0 ; i < 10; i++){
    console.log(arr[i]);
  }
}
// forLoop(myArr);

function whileLoop(arr){
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    console.log(arr[count]);
    count++;
  }
}
// whileLoop(myArr);

function myMap(arr,cb){
  let result = [];
  for(let i = 0; i < arr.length; i++){
    result.push(cb(arr[i]));
  }
  return result;
}
// console.log(myMap(myArr,(val)=>{
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

// console.log(myFilter(myArr, (val)=>{
//   return (val%2===0);
// }));

function myReduce(arr, cb, initial){
  for(let i = 0; i < arr.length; i++){
    initial = cb(initial,arr[i]);
  }
  return initial;
}

let res = myReduce(myArr, (tot, val)=> {
  tot.push(val*2);
  return tot;
}, [])
// console.log(res);

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {};

// console.log(state);
let newPeople = ['new person a', ...people, 'new pesrons b'];
// console.log(newPeople);
const newStuff = {...stuff, cars: [...stuff.cars, 'new car']};
// console.log(newStuff);
let newState = {
  stuff: {...stuff, cars:[...stuff.cars, 'new car 222']},
  people: ['person 1', ...people, 'person 2']};
// console.log(newState);

