'use strict';

function narcissistic(value) {
  let sum = 0;
  let stringifiedValue = value.toString();
  let power = stringifiedValue.length;
  let digits = stringifiedValue.split('');

  for (let i = 0; i < digits.length; i++) {
    let backToNum = parseInt(digits[i]);
    let product = Math.pow(backToNum, power);
    sum += product;
  }

  if (sum === value) {
    return true;
  } else {
    return false;
  }
}

module.exports = narcissistic;