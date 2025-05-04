// Step #1

function calculateAbsoluteVal(num) {
  return `\nAbsolute Value: ${Math.abs(num)}`;
}

function calculateNumPower(x, y) {
  return `\nPower Value: ${Math.pow(x, y)}`;
}

function calculateSquareRoot(x) {
  return `\nSquare Root: ${Math.sqrt(x)}`;
}

function calculateMinAndMax(...numbers) {
  let min = numbers[0];
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min || numbers[i] > max) {
      return `\nMin: ${Math.min(...numbers)}, Max: ${Math.max(...numbers)}`;
    }
  }
}

function generateRandomNum(x) {
  return `\nRandom Number: ${Math.ceil(Math.random(x) * x)}`;
}

function roundNumber(number, decimalPlaces) {
  const factor = Math.pow(10, decimalPlaces);
  return `\nRounded Value: ${Math.round(number * factor) / factor}`;
}

// Step 2:

console.log(
  calculateAbsoluteVal(-14.67),
  calculateNumPower(5, 3),
  calculateSquareRoot(144),
  calculateMinAndMax(3, 78, -12, 0.5, 27),
  generateRandomNum(50),
  roundNumber(23.67891, 2)
);
