'use strict';
const myArr = [];
for(let i = 0; i < 10; i++){
  myArr.push(i*3);
}
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
  let result = [];
  for(let i =0 ; i < arr.length; i++){
    result.push(cb(arr[i]));
  }
  return result;
}

// console.log(myMap(myArr, (val)=> {
//   return val/3;
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
//   return val%2 === 1;
// }));

function myReduce(arr, cb, initial){
  let start;
  if(!initial){
    initial = arr[0];
    start = 1;
  } else {
    start = 0;
  }
  let result = initial;
  for(let i = 0; i < arr.length; i++){
    result = cb(result, arr[i]);
  }
  return result;
}

let result = myReduce(myArr, (tot, val)=> {
  tot.push(val);
  return tot;
}, []);
// console.log({result});


const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {people, stuff};
// console.log(state);

let newPeople = ['odie', ...people, 'garfield'];
// console.log(newPeople);
const newStuff = {...stuff, cars:[...stuff.cars, 'new car A']};
// console.log(newStuff);
let newState = {
  stuff: {...stuff, cars: [...stuff.cars, 'new car Zb']},
  people: ['odie', ...people, 'garfield'],
};
// console.log(newState);

