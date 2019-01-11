'use strict';

const myArr = [];
for (let i = 0; i < 10; i++){
  myArr.push(i + 10);
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
  while(count < arr.length){
    console.log(arr[count]);
    count++;
  }
  console.log(arr[count]);

}
// whileLoop(myArr);

function myMap(arr, cb){
  let result = [];
  for(let i = 0; i <arr.length; i++){
    result.push(cb(arr[i]));
  }
  return result;
}

// console.log(myMap(myArr, (val)=>{
//   return val - 10;
// }));

function myFilter(arr, cb){
  const result = [];
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i])){
      result.push(arr[i]);
    }
  }
  return result;
}

// console.log(myFilter(myArr, (val) => {
//   return val%2===1; 
// }));

function myReducer(arr, cb, initial){
  let start;

  if(initial){
    start = 0;
  } else {
    start = 1;
    initial = arr[0];
  }

  let result = initial;
  for(let i = start; i < arr.length; i++){
    result = cb(result, arr[i], i, arr);
  }
  return result;
}

let res = myReducer(myArr, (tot, val, idx, arr) => {
  tot.push(val+1);
  return tot;
}, []); 
// console.log(res);

