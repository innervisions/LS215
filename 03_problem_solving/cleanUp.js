// Input: String representation of phone #. Ignore non-digit chars.
// Output: Cleaned up phone number. 0000000000 if "bad" number.

// Algorithm:
// 1) Remove non-digit chars from input.
// 2) If phone # is 10 digits, return it.
// 3) If # is 11 digits and first digit is 1, return last 10 digits.
// 4) Otherwise number is "bad". Return 0000000000.

function cleanUp(phoneNumber) {
  phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
  if (phoneNumber.length === 10) return phoneNumber;
  if(phoneNumber.length === 11 && phoneNumber[0] === '1') return phoneNumber.slice(1, phoneNumber.length);
  return '0000000000';
}

console.log(cleanUp('(727)-421-7936'));
console.log(cleanUp('1 (727)-421-7936'));
console.log(cleanUp('2(727)-421-7936'));
console.log(cleanUp('(727)-42b-7936'));
