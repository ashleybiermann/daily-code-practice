'use strict';

function findEvenIndex(arr) {
  const n = arr.length;

  // make an array for left side, starting at index 0
  let leftSum = [];
  leftSum[0] = arr[0];
  for (let i = 1; i < n; i++) {
    leftSum[i] = leftSum[i - 1] + arr[i];
  }
  console.log('leftSum', leftSum);

  // make an array for right side, starting from end of array
  let rightSum = [];
  rightSum[n - 1] = arr[n - 1];
  for (let i = (n - 2); i >= 0; i--) {
    rightSum[i] = rightSum[i + 1] + arr[i];
  }
  console.log('rightSum', rightSum);

  // compare leftSum and rightSum arrays
  for (let i = 0; i < n; i++) {
    if (leftSum[i] === rightSum[i]) {
      return i;
    }
  }

  return -1;
}



module.exports = findEvenIndex;