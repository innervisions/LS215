function octalToDecimal(numberString) {
  let octics = numberString.split('').map(char => Number(char));
  let decimal = 0;
  octics.reverse().forEach((octic, index) => decimal += octic * Math.pow(8, index));
  return decimal;
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
