'use strict';

const findOdd = require('./challenge.js');

describe('findOdd Function', () => {
    
  it( 'Should find the number that occurs an odd amount of times when the output value is odd', () => {
    expect(findOdd([1, 3, 3, 1, 1])).toStrictEqual(1);
  });

  it( 'Should find the number that occurs an odd amount of times when the output value is even', () => {
    expect(findOdd([4, 4, 4, 1, 1])).toStrictEqual(4);
  });

  it( 'Should handle array length of 1', () => {
    expect(findOdd([10])).toStrictEqual(10);
  });

  it( 'Should handle positive numbers', () => {
    expect(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5])).toStrictEqual(5);
  });

  it( 'Should handle negative numbers', () => {
    expect(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])).toStrictEqual(5);
  });
});