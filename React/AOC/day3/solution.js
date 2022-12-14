var fs = require("fs");

const checker = (val) => {};

try {
  let data = fs.readFileSync("input.txt").toString().trim().split("\n");
  let repeatedLetters = {};

  //extracting all repeated letters
  data.forEach((str) => {
    const string1 = str.slice(0, str.length / 2);
    const string2 = str.slice(str.length / 2);
    const track = new Set([...string1]);
    for (let i = 0; i < string2.length; i++) {
      if (track.has(string2[i])) {
        repeatedLetters[string2[i]] = repeatedLetters[string2[i]] + 1 || 1;
        return;
      }
    }
  });

  //Test if char is lower case
  function hasLowerCase(str) {
    return str.toUpperCase() != str;
  }

  let total = 0;

  for (letter in repeatedLetters) {
    if (hasLowerCase(letter)) {
      letterVal = letter.codePointAt(0) - 96;
      addingTotal = letterVal * repeatedLetters[letter];
      console.log(letter, addingTotal);
      total += addingTotal;
    } else {
      letterVal = letter.codePointAt(0) - 38;
      addingTotal = letterVal * repeatedLetters[letter];
      console.log(letter, addingTotal);
      total += addingTotal;
    }
  }
  //Solution to part 1
  console.log(total);
} catch (e) {
  console.log("Error:", e.stack);
}
