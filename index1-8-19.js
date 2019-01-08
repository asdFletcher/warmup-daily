'use strict';

const theArr = [];
for (let i = 0; i < 10; i++){
  theArr.push(i*i*i);
}
// console.log(theArr);

function forLoop(arr){

  for(let i= 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
// forLoop(theArr);

function whileLoop(arr){
  let count = 0;
  while (count < arr.length){
    console.log(arr[count]);
    count++;
  }
}
// whileLoop(theArr);

function myMapper(arr, cb){
  const result = [];
  for(let i = 0; i < arr.length; i++){
    result.push(cb(arr[i]));
  }

  return result;
}

// console.log(myMapper(theArr, (value)=> {
//   return Math.floor(value / 3 / 3);
// }));

function myFilter(arr, cb){
  const result = [];
  for(let i = 0; i < arr.length; i++){
    if(cb([arr[i]])){
      result.push(arr[i]);
    }
  }
  return result;
}
// console.log(myFilter(theArr, (value)=> {
//   return (value%2===1);
// }));

function myReducer(arr, cb, initial){

  let start;
  if (initial){
    start = 1;
  } else {
    initial = arr[0];
    start = 0;
  }

  let result = initial;
  for(let i = 0; i < arr.length; i++){
    result = cb(result, arr[i], i, arr);
  }
  return result;
}

// console.log(myReducer(theArr, (total, val, idx, arr)=> {
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
  stuff: stuff,
  people: people,
};

// console.log(state);
let newPeople = ['Garfield', ...people, 'Odie'];
const newStuff = {...stuff, cars: [...stuff.cars, 'Truck']};
let newState = {
  stuff: {...stuff, cars: [...stuff.cars, 'A BIG CAR']},
  people: ['Garfield', ...people, 'Odie']
};

// console.log(newPeople);
// console.log(newStuff); 

// console.log(newState);
// console.log(stuff);
// console.log(people);
