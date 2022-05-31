// function isBalanced(string) {
//   let tally = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === '(') tally += 1;
//     if (string[i] === ')') tally -= 1;
//     if (tally < 0) return false;
//   }

//   return !tally;
// }

function isBalanced(string) {
  let tally = 0;
  let misorderedParentheses = false;
  string.split('').forEach(letter => {
    if (letter === '(') tally += 1;
    if (letter === ')') tally -= 1;
    if (tally < 0) misorderedParentheses = true;
  });

  if (misorderedParentheses) return false;
  return !tally;
}


console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
