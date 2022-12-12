var fs = require("fs");

try {
  let myScore = 0;
  let part2Score = 0;

  let data = fs.readFileSync("input.txt").toString().split("\n");
  const possibleGames = {
    "A X": 4,
    "A Y": 8,
    "A Z": 3,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 7,
    "C Y": 2,
    "C Z": 6,
  };
  data.forEach((el) => (myScore = myScore + possibleGames[el.trim()]));

  //Part 1 Solution
  console.log(myScore);

  //Part 2
  const part2Moves = {
    A: { X: 3, Y: 4, Z: 8 },
    B: { X: 1, Y: 5, Z: 9 },
    C: { X: 2, Y: 6, Z: 7 },
  };

  data.forEach((el) => {
    const [theirMove, outcome] = el.trim().split(" ");
    const score = part2Moves[theirMove][outcome];
    part2Score += score;
  });

  //Part 2 Solution
  console.log(part2Score);
} catch (e) {
  console.log("Error:", e.stack);
}
