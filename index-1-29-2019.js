
const myArr = [];
for(let i = 0; i < 10; i++){
  myArr.push(i*i);
}

function forLoop(arr){
  for(let i =0; i < arr.length; i++){
    console.log(arr[i]);
  }
}

// forLoop(myArr);

function whileLoop(arr){
  let count = 0;
  while (count < arr.length) {
    console.log(arr[count]);
    count++;
  }
}

// whileLoop(myArr);


function myMap(arr,cb) {
  const result = [];
  for(let i = 0; i < arr.length; i++){
    result.push(cb(arr[i]));
  }
  return result;
}

// console.log(myMap(myArr, (val)=> {
//   return val * 2;
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
// console.log(myFilter(myArr, (val)=>{
//   return val%2 ===0;
// }));

function myReduce(arr, cb, initial){
  let start;
  if(!initial){
    start = 1;
    initial = arr[0];
  } else {
    start = 0;
  }
  result = initial;
  for(let i = 0; i < arr.length; i++){
    result = cb(result, arr[i], i, arr);
  }
  return result;
}

let res = myReduce(myArr, (total, val, i)=>{
  total = total - val;
  return total;
}, 100);
// console.log(res);



const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {people, stuff};
// console.log(state);

let newPeople = ['garfield', ...people, 'odie'];
// console.log(newPeople);

const newStuff = { ...stuff, cars:[...stuff.cars, 'new car']};
// console.log(newStuff);

let newState = {
  people: ['odie', ...people, 'garfield'],
  stuff: { 
    ...stuff,
    cars: [...stuff.cars, 'a new car here'],
  }
};
// console.log(newState);

// console.log(state);