/* Step 1:

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
*/

/* Step 2:

console.log(
  calculateAbsoluteVal(-14.5),
  calculateNumPower(5, 4),
  calculateSquareRoot(144),
  calculateMinAndMax(5, 6, 7, 8, 9, 10),
  generateRandomNum(20),
  roundNumber(4.45569, 3)
);
*/

//Step 3
let operations = {
  absoluteVal: function calculateAbsoluteVal(num) {
    return `---------> Absolute Value: ${Math.abs(num)}`;
  },
  numPower: function calculateNumPower(x, y) {
    return `---------> Power Value: ${Math.pow(x, y)}`;
  },
  squareRoot: function calculateSquareRoot(x) {
    return `---------> Square Root: ${Math.sqrt(x)}`;
  },
  minAndMax: function calculateMinAndMax(numbers) {
    const min = Math.min();
    const max = Math.max();
    return `\nMin: ${min}, Max: ${max}`;
  },
  randomNum: function generateRandomNum(x) {
    return `---------> Random Number: ${Math.ceil(Math.random(x) * x)}`;
  },

  roundNumber: function roundNumber(number, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return `---------> Rounded Value: ${Math.round(number * factor) / factor}`;
  },
};

function calculator(operations) {
  const readline = require("readline-sync");

  let selectOperation = readline.questionInt(
    "\nPlease select and number to complete the associated operation: \n\n(1) - Calculate the absolute value, \n(2) - Calculate the power of a number,\n(3) - Calculate the square root of a number, \n(4) - Calculate the maximum and minimum of a series of numbers, \n(5) - Generate a random number, or \n(6) - Round a number to a specific decimal place.\n \nUser Operation Selection: "
  );

  if (selectOperation <= 0 || selectOperation > 7) {
    console.log(
      "\nError! Sorry, you have not entered a valid operation selection, please a number between 1 - 6 to complete the calculation.\n"
    );
  } else if (selectOperation == 1) {
    let numSelect = parseFloat(
      readline.question(
        "\nPlease select a decimal number to calculate the absolute value: "
      )
    );

    const absoluteValResult = operations["absoluteVal"](numSelect);

    return `You selected the value ${numSelect}. ${absoluteValResult}`;
  } else if (selectOperation == 2) {
    let baseNum = readline.question("\nPlease select a base number: ");
    let powerNum = readline.question(
      "Great, now select a number for us to use to raise the base number to: "
    );

    const numPowerResult = operations["numPower"](baseNum, powerNum);

    return `You selected the value ${baseNum} as the base number and ${powerNum} for the number to raise the base to. ${numPowerResult}`;
  } else if (selectOperation == 3) {
    let rootNum = readline.question(
      "\nPlease select a number for us to calculate the square root: "
    );

    const squareRootResult = operations["squareRoot"](rootNum);

    return `You selected the number ${rootNum} for us to calculate the square root. ${squareRootResult}`;
  } else if (selectOperation == 4) {
    let numSelections = readline.question(
      "\nPlease enter a series of numbers for us to calculate the min and max values (e.g., 1 2 3 4 5): "
    );

    const splitNumSelection = numSelections.split(",");
    const numSelectionArray = [];
    for (let i = 0; i < splitNumSelection.length; i++) {
      const trimNumSelection = splitNumSelection[i].trim();
      const convertNumSelectionToNum = parseFloat(trimNumSelection);
      numSelectionArray.push(convertNumSelectionToNum);
    }
    if (numSelectionArray === null || numSelectionArray.length < 2) {
      readline.question(
        `\nError! Invalid number series. Please enter a valid series of numbers (e.g., 1,2,3,4,5): `
      );
    } else {
      const minAndMaxResult = operations.minAndMax(numSelectionArray);
      return `You selected the number series ${numSelectionArray}. ${minAndMaxResult}`;
    }
  } else if (selectOperation == 5) {
    let randomNum = readline.question(
      "\nPlease select an integer for us to calculate a random number: "
    );

    while (randomNum != parseInt(randomNum)) {
      randomNum = readline.question(
        "\nError! Sorry, that is not a valid integer, please select an integer for us to calculate a random number: "
      );
    }

    const randomNumResult = operations["randomNum"](parseInt(randomNum));

    return `You selected the integer ${randomNum} for us to calculate a random number. ${randomNumResult}`;
  } else if (selectOperation == 6) {
    let roundNum = readline.question(
      "\nPlease select a decimal number for us to use to calculate to a specified decimal place: "
    );

    while (
      isNaN(parseFloat(roundNum)) ||
      Number.isInteger(parseFloat(roundNum))
    ) {
      roundNum = readline.question(
        "\nError! Sorry, that is not a valid decimal number. Please select a valid number: "
      );
    }

    let decimalPlaceVal = readline.question(
      "\nGreat, now select an integer you would like us to round the decimal number to: "
    );

    while (decimalPlaceVal != parseInt(decimalPlaceVal)) {
      decimalPlaceVal = readline.question(
        "\nError! Sorry, that is not a valid integer, please select a valid rounding integer: "
      );
    }

    const roundedNumResult = operations["roundNumber"](
      parseFloat(roundNum),
      decimalPlaceVal
    );

    return `\nYou selected the decimal number ${roundNum} to calculate the ${decimalPlaceVal} decimal place. ${roundedNumResult}\n`;
  }
}

console.log(calculator(operations));
