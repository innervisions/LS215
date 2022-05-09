function myReduce(array, func, initial) {
  let index = 0;
  let accumulator = initial;
  if (accumulator === undefined) {
    accumulator = array[0];
    index = 1;
  }
  array.slice(index).forEach(element => accumulator = func(accumulator, element));
  return accumulator;
}

function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));      // "targets"
