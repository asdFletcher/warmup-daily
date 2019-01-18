'use strict';

const myArr = [];
for (let i = 1; i <= 10; i++){
  myArr.push(i*2);
}
// console.log(myArr);

function forLoop(arr){
  for(let i = 0; i < arr.length; i++){
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
// whileLoop(myArrs);

function myMap(arr, cb){
  let result = [];
  for (let i = 0; i < arr.length; i++){
    result.push(cb(arr[i]));
  }
  return result;
}

// console.log(myMap(myArr, (val)=>{
//   return val/2;
// }));

function myFilter(arr, cb){
  let result = [];
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i])) {
      result.push(arr[i])
    }
  }
  return result;
}

// console.log(myFilter(myArr, (val) => {
//   return val*3%2===0;
// }));


function myReduce(arr, cb, initial) {
  let start;
  if (!initial){
    initial = arr[0];
    start = 1;
  } else {
    start = 0;
  }
  let result = initial;
  for(let i = start; i < arr.length; i++){
    result = cb(result, arr[i]);
  }

  return result;
}

let result = myReduce(myArr, (tot,val)=>{
  tot.push(val*3);
  return tot;
}, []);
// console.log(result);


const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {stuff, people};
// console.log(state);

let newPeople = ['Odie', ...people, 'Garfield'];
// console.log(newPeople);
const newStuff = {...stuff, cars: [...stuff.cars, 'new car']};
// console.log(newStuff);
let newState = {
  people: ['Odie', ...people, 'Garfield 2'],
  stuff: {...stuff, cars: [...stuff.cars, 'new car 1', 'new car 2']},
};
console.log(newState);



