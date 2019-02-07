'use strict';

let myArr = []
for (let i = 1; i <= 10; i++){
  myArr.push(i*10);
}
console.log(myArr);

function forLoop(arr) {
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
// forLoop(myArr);

const whileLoop = (arr) => {
  let count = 0;
  while(count < arr.length){
    console.log(arr[count]);
    count++;
  }
}
// whileLoop(myArr);

const myMap = (arr, cb) => {
  const res = [];
  for(let i =0; i < arr.length; i++){
    res.push(cb(arr[i]));
  }
  return res;
}

// console.log(myMap(myArr, (val)=> {
//   return val/10;
// }));

const myFilter = (arr, cb) => {
  let res = [];
  for(let i= 0; i < arr.length; i++){
    if(cb(arr[i])){
      res.push(arr[i]);
    }
  }
  return res;
}

// console.log(myFilter(myArr, (val) => {
//   return val/10 %2 ===0;
// }));


function myReduce(arr, cb, initial){
  let start;
  if(!initial){
    initial = arr[0];
    start = 1;
  } else {
    start = 0;
  }

  let total = initial;
  for(let i =start; i < arr.length; i++){
    total = cb(total, arr[i]);
  }
  return total;
}

// console.log(myReduce(myArr, (tot,val)=>{
//   tot.push(val/10);
//   return tot;
// }, []));

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {stuff, people};
// console.log(state);

let newPeople = ['test', ...people, 'test'];
// console.log(newPeople);
const newStuff = {
  ...stuff,
  cars: [...stuff.cars, 'new car']
};
// console.log(newStuff);
let newState = {
  people: [...people, 'new person'],
  stuff: {
    ...stuff,
    cars: ['new car 1', ...stuff.cars]
  }
};
// console.log(newState);

console.log(state);

