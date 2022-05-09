function anagram(word, list) {
  return list.filter(candidate => areAnograms(word, candidate));
}

function areAnograms(word1, word2) {
  let sortedLetters1 = word1.split('').sort();
  let sortedLetters2 = word2.split('').sort();
  return compareArrays(sortedLetters1, sortedLetters2);
}

function compareArrays(arr1, arr2) {
  if(arr1.length !== arr2.length) return false;
  return arr1.every((letter, index) => letter === arr2[index]);
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
