var fs = require("fs");

const checker = (val) => {};

try {
  let data = fs.readFileSync("input.txt").toString().trim().split("\n");
  let repeatedLetters = {};

  //extracting all repeated letters
  data.forEach((str) => {
    let string1 = str.slice(0, str.length / 2);
    let string2 = str.slice(str.length / 2);
    let track = new Set([...string1]);
    for (let i = 0; i < string2.length; i++) {
      if (track.has(string2[i])) {
        repeatedLetters[string2[i]] = repeatedLetters[string2[i]] + 1 || 1;
        return;
      }
    }
  });

  console.log(repeatedLetters);

  function hasLowerCase(str) {
    return str.toUpperCase() != str;
  }

  total = 0;

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
  console.log(total);
  //Solution to part 1
} catch (e) {
  console.log("Error:", e.stack);
}
