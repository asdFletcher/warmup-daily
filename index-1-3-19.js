'use strict';

let numArr = [];
for (let i = 0; i < 10; i++){
  let num = Math.floor(Math.random()*100);
  numArr.push(num);
}

console.log({numArr});


function forLoop(arr){
  for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  }
}
// forLoop(numArr);

function whileLoop(arr){
  let count = 0;
  while (count < arr.length){
    console.log(arr[count]);
    count++;
  }
}
// whileLoop(numArr);

function myMap(arr, cb){
  const result = [];

  for(let i = 0; i < arr.length; i++){
    result.push( cb(arr[i]));
  }
  return result;
}
// console.log(myMap(numArr, (val) => val*2));

function filter(arr, cb){
  const result = [];

  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i])){
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(filter(numArr, (val) => val%2 === 0));

function reduce(arr, cb, initial){

  let start;
  if (initial === undefined){
    start = 1;
    initial = arr[0];
  } else {
    start = 0;
  }
  let result = initial;
  for (let i = start; i < arr.length; i++){
    result = cb(result, arr[i], i, arr);
  }

  return result;
}

// console.log(reduce(numArr, (total, value, index, arr) => {
//   return total += value;
// }, 0));