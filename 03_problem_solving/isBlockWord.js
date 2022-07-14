// Input: String
// Output: boolean

// Data structure:
// Iterate over input string.
// Use javascript object to associate letters with their corresponding "blockmate".

// ALGORITM
// 1) Convert input string to upper case.
// 2) Iterate over word.
// 3) For each char, if the remaining "slice" of the string contains that char or its
//  associate, return false.
// 4) Otherwise return true.

const BLOCKS = {
  'B': 'O', 'O': 'B', 'X': 'K', 'K': 'X', 'D': 'Q', 'Q': 'D', 'C': 'P', 'P': 'C',
  'N': 'A', 'A': 'N', 'G': 'T', 'T': 'G', 'R': 'E', 'E': 'R', 'F': 'S', 'S': 'F',
  'J': 'W', 'W': 'J', 'H': 'U', 'U': 'H', 'V': 'I', 'I': 'V', 'L': 'Y', 'Y': 'L',
  'Z': 'M', 'M': 'Z',
}

function isBlockWord(word) {
  word = word.toUpperCase();
  for (let i = 0; i < word.length; i++) {
    if (word.includes(word[i], i + 1) || word.includes(BLOCKS[word[i]], i + 1)) {
      return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('bLuE'));       // true
console.log(isBlockWord('BaBe'));       // false
