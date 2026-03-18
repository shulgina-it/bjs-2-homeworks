"use strict"
function solveEquation(a, b, c) {
  let arr = [];

  let d = b ** 2 - 4 * a * c; // дискриминант

  if (d < 0) {
    return arr;
  }

  if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
    return arr;
  }

  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
    return arr;
  }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let percentRate = percent / 100 / 12;
  let creditBody = amount - contribution;

  if (creditBody  <= 0) {
    return 0;
  }

  let payment = creditBody * (percentRate + (percentRate / ((1 + percentRate) ** countMonths - 1)));

  let total = payment * countMonths;

  return Number(total.toFixed(2));
}
