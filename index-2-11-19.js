'use strict';

let myArr = [];
for (let i = 1; i <= 10; i++){
  myArr.push(i);
}
console.log(myArr);

const forLoop = (arr) => {
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
// forLoop(myArr);

const whileLoop = (arr) => {
  let count = 0;
  while( count < arr.length ){
    console.log(arr[count]);
    count++;
  }
}
// whileLoop(myArr);

const myReduce = (arr, cb, initial) => {
  let start;
  if (!initial){
    initial = arr[0];
    start = 1;
  } else {
    start = 0;
  }
  let total = initial;
  for(let i = 0; i < arr.length; i++){
    total = cb(total, arr[i], i);
  }
  return total;
}
// console.log(myReduce(myArr, (tot, val, i) => {
//   tot[i] = val*2;
//   return tot;
// }, {}));

const myMap = (arr, cb) => {
  let result = [];
  for(let i = 0; i < arr.length; i++){
    result.push(cb(arr[i]));
  }
  return result;
}

// console.log(myMap(myArr, (val)=>{
//   return val*3;
// }));

const myFilter = (arr, cb) => {
  let result = [];
  for(let i = 0; i < arr.length; i++){
    if( cb(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(myFilter(myArr, (val)=>{
//   return val%2 ==1 ;
// }));


const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {people, stuff};
// console.log(state);

let newPeople = ['p1', ...people, 'p2'];
// console.log(newPeople);

const newStuff = {
  stuff: {
    ...stuff,
    cars: [...stuff.cars, 'new car'],
  }
};
// console.log(newStuff);

let newState = {
  people: ['new car 1', ...people , 'new car 2'],
  stuff: {
    ...stuff,
    cars: [...stuff.cars, 'new car here'],
  }
};
// console.log(newState);

// console.log(state)

