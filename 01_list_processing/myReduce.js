function myReduce(array, func, initial) {
  let index = 0;
  let accumulator = initial;
  if(accumulator === undefined) {
    accumulator = array[0];
    index = 1;
  }
  array.slice(index).forEach(element => accumulator = func(accumulator, element));
  return accumulator;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49
