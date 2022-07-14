// Input: Comma separated string of numbers with only "significant" digits. Ranges are represented by (-, :, ..)
// Output: Array of numbers, with all ranges expanded and abbreviated values completed.

// Data structure: Array
// Numbers will be represented in string form, and converted to Number values for mathematical operations. Output array of numbers.

// Main Algorithm
// 1) Split input list into array of ranges.
// 2) For each range, "complete" the upper bounds (see completion algorithm).
// 3) Expand ranges into individual values using iteration.
// 4) Flatten the resulting array of arrays.

// Completion algorithm
// 1) Input the value to be completed and the previous value.
// 2) Iterate through the intehgers beginning at the previous value, until arriving at a value that "ends with" the value to be completed.


function completeNumbers(list) {
  let ranges = list.split(', ').map(range => {
    rangeArr = range.split(/-|:|\.{2}/);
    rangeArr[1] = rangeArr[1] || rangeArr[0];
    return rangeArr;
  });
  
  let previousValue = ranges[0][0];
  let completedRanges = ranges.map(range => {
    let completedRange = [];
    for (let i = 0; i < range.length; i++) {
      completedRange[i] = completeValue(previousValue, range[i]);
      previousValue = completedRange[i];
    }
    return completedRange;
  });

  return completedRanges.flatMap(range => expandRange(range));
}

function completeValue(previousValue, value) {
  let index = Number(previousValue)
  while (!(String(index).endsWith(value))) index += 1;
  return String(index);
}

function expandRange(range) {
  let expandedRange = [];
  for (let i = Number(range[0]); i <= Number(range[range.length - 1]); i++) {
    expandedRange.push(i);
  }

  return expandedRange;
}

const p = text => console.log(text);

p(completeNumbers("1, 3, 7, 2, 4, 1")); // 1, 3, 7, 12, 14, 21
p(completeNumbers("1-3, 1-2"));         // 1, 2, 3, 11, 12
p(completeNumbers("1:5:2"));            // 1, 2, 3, 4, 5, 6, ... 12
p(completeNumbers("104-2"));            // 104, 105, ... 112
p(completeNumbers("104-02"));           // 104, 105, ... 202
p(completeNumbers("545, 64:11"));       // 545, 564, 565, .. 611

