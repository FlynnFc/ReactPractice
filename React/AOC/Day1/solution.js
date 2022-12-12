var fs = require("fs");

let current = 0;
let totals = [];

try {
  let data = fs.readFileSync("input.txt").toString();
  data
    .trim()
    .split("\n")
    .map((el) => {
      const item = parseInt(el);
      if (isNaN(item)) {
        totals.push(current);
        current = 0;
      } else current = current + item;
    });
  totals.sort((a, b) => a - b).reverse();
  //Part1
  console.log(totals[0]);
  //Part 2
  console.log(totals[0] + totals[1] + totals[2]);
} catch (e) {
  console.log("Error:", e.stack);
}
