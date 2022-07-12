// Input: String of Digits
// Output: true or false

// Algorithm:
// 1) Remove non-digit chars from string.
// 2) Convert digit string to array of numbers.
// 3) Reverse array so that we iterate from "right to left".
// 4) Map this array to a new array with every second digit doubled. (Subtract 9 when appropriate).
// 5) Sum digit values.
// 6) Return sum % 10 === 0.

function validLuhn(digitString) {
  let cleanedDigitString = digitString.replace(/[^0-9]/g, '');
  let digitArray = cleanedDigitString.split('').reverse().map(Number);
  let doubledArray = digitArray.map((digit, idx) => {
    if (idx % 2 === 1) {
      digit *= 2;
      if (digit >= 10) digit -= 9;
    }
    return digit;
  });
  let sum = doubledArray.reduce((total, digit) => total + digit);
  return sum % 10 === 0;
}

function makeValid(digitString) {
  if (validLuhn(digitString)) return digitString;
  for (let i = 0; i < 10; i++) {
    let testString = digitString + String(i);
    if(validLuhn(testString)) return testString;
  }
}

console.log(validLuhn('1111')); // false
console.log(validLuhn('8763')); // true
console.log(makeValid('1111')); // 11114
console.log(makeValid('8763')); // 8763
console.log(validLuhn('11114')); // true
