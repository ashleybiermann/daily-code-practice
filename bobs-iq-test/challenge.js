'use strict';

function iqTest(numbers){
  let inputNums = numbers.split(' ');
  let evensArr = [];
  let oddsArr = [];
  
  for (let i = 0; i < inputNums.length; i++) {
    if (inputNums[i] % 2 === 0) {
      evensArr.push(i);
    } else {
      oddsArr.push(i);
    }
    if (oddsArr.length > 1 && evensArr.length === 1) {
      return evensArr[0] + 1;
    }
    if (evensArr.length > 1 && oddsArr.length === 1) {
      return oddsArr[0] + 1;
    }
  }
}