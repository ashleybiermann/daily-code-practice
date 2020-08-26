'use strict';

// FIXME: this currently adds the lefts first then the rights, and doens't yet give the expected output
function findEvenIndex(arr) {
  let leftSum = 0;
  let rightSum = 0;
  let result = -1;
  let pointer = 0;


  for(let i = 0; i < arr.length; i++) {

    // add left side
    if(pointer < arr[i]) {
      leftSum += arr[i];
      console.log('leftSum: ', leftSum);
    }

    // add right side
    if(pointer > arr[i]) {
      rightSum += arr[i];
      console.log('rightSum: ', rightSum);
    }

    // after left and right have been totaled, check for match
    if (leftSum === rightSum) {
      result = i;
      return result;
    } else {
    // move the pointer one more index forward
    pointer++;
    console.log('pointer going forward to index ', pointer);
    }
  }

  return result;
}



findEvenIndex([1,2,3,4,3,2,1]);


module.exports = findEvenIndex;