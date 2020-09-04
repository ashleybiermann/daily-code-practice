'use strict';

const maxSum = require('./challenge.js');

describe( "maxSum Function", () => {
    
  it( 'Should return 0 if given an empty array', () => {
    expect(maxSum([])).toStrictEqual(0);
  });

  it( 'Should return the max sum of a contiguous subarray', () => {
    expect(maxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toStrictEqual(6);
  });

  it( 'Should return 0 if given an empty array', () => {
    expect(maxSum([-2, -1, -3, -4, -1, -2, -1, -5, -4])).toStrictEqual(0);
  });  

  it( 'Should return the sum of the whole array if all numbers are positive', () => {
    expect(maxSum([1, 2, 3, 4, 5, 6])).toStrictEqual(21);
  });

});