'use strict';

let myArr = [];
for(let i = 1; i <= 10; i++){
  myArr.push(i*10);
}

function forLoop(arr) {
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
// forLoop(myArr);

function whileLoop(arr) {
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    console.log(arr[count]);
    count++;
  }
}
// whileLoop(myArr);

function myMap(arr, cb) {
  let res = new Array(arr.length);
  for(let i = 0; i < arr.length; i++){
    res[i] = cb(arr[i]);
  }
  return res;
}
// console.log(myMap(myArr, (val) => {
//   return val/10;
// }));

const myReduce = (arr, cb, ini) => {
  let start; 
  if (!ini) {
    ini = arr[0];
    start = 1;
  } else {
    start = 0;
  }
  let tot = ini;
  for(let i = 0; i< arr.length; i++){
    tot = cb(tot, arr[i]);
  }
  return tot;
};

// console.log(myReduce(myArr, (tot, val)=>{
//   tot += val;
//   return tot;
// }, 0));

const myFilter = (arr, cb) => {
  // let res = new Array(arr.length);
  let res = [];
  for(let i = 0; i < arr.length; i++){
    if (cb(arr[i])){
      res.push(arr[i]);
    }
  }
  return res;
}

// console.log(myFilter(myArr, (val)=> {
//   return val/10 %2 === 0;
// }));

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {stuff, people};
// console.log(state);

let newPeople = ['first', ...people, 'last'];
// console.log(newPeople);

const newStuff = {
  ...stuff,
  cars: [...stuff.cars, 'new car 🚕'],
};
// console.log(newStuff);

let newState = {
  stuff: {
    ...stuff,
    cars: ['🚕', ...stuff.cars],
  },
  people: [...people, '🗿'],
};
console.log(newState);


