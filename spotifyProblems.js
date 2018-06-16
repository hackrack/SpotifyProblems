// Question 1 -- sortByStrings(s,t):
// Sort the letters in the string s by the order they occur in the string t.
// You can assume t will not have repetitive characters.
// For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw".
// For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".

const sortByStrings = (s,t) => {
  let sorted = '';
  for (let i = 0; i < t.length; i++) {
    for (let j = 0; j < s.length; j++) {
      let t_char = t[i];
      let s_char = s[j];
      if (t_char === s_char) {
        sorted += s_char;
      }
    }
  }
  return sorted;
}
// console.log(sortByStrings('weather', 'therapyw')); // 'theeraw'
// console.log(sortByStrings('good', 'odg')); // 'oodg'
/*******************************************************************************/

// Question 2 -- decodeString(s): Given an encoded string,
// return its corresponding decoded string.
// The encoding rule is: k[encoded_string],
// where the encoded_string inside the square brackets is repeated exactly k times.
// Note: k is guaranteed to be a positive integer.
// For s = "4[ab]", the output should be decodeString(s) = "abababab"
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

const decodeString = (s) => {
  let regex = /(\d+)\[([a-z]*)\]/g;
  for (;s.includes("[");) {
    s = s.replace(regex, (match, amount, part) => part.repeat(amount));
  }
  return s;
}
// console.log(decodeString("4[ab]"));
// console.log(decodeString("2[b3[a]]"));
/*******************************************************************************/


// Question 3 -- changePossibilities(amount,denominations):
// Your quirky boss collects rare, old coins.
// They found out you're a programmer and asked you to solve something they've been wondering for a long time.
// Write a function that, given an amount of money and an array of coin denominations,
// computes the number of ways to make the amount of money with coins of the available denominations.
// Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:
// 1¢, 1¢, 1¢, 1¢
// 1¢, 1¢, 2¢
// 1¢, 3¢
// 2¢, 2¢

const changePossibilities = (amount, denominations) => {
  let allWays = [];
  for (let i = 0; i <= amount; i++) {
    allWays[i] = 0;
  }
  allWays[0] = 1;
  for(let j = 0; j < denominations.length; j++) {
    for (let k = 1; k < allWays.length; k++) {
      if (k >= denominations[j]) {
        allWays[k] += allWays[k - denominations[j]];
      }
    }
  }
  return allWays[amount];
}
// console.log(changePossibilities(4, [1,2,3])); // 4
/*******************************************************************************/
