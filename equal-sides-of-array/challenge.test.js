'use strict';

const findEvenIndex = require('./challenge.js');

describe('findEvenIndex Function', () => {
    
  it( 'Should return partition index where left sum of left and sum of right match', () => {
    expect(findEvenIndex([1,2,3,4,3,2,1])).toBe(3);
  });

  it( 'Should handle solutions that occur early in array', () => {
    expect(findEvenIndex([1,100,50,-51,1,1])).toBe(1);
  });

  it( 'Should return -1 if no possible solution', () => {
    expect(findEvenIndex([1,2,3,4,5,6])).toBe(-1);
  });

  it( 'Should return first index if multiple solutions are possible', () => {
    expect(findEvenIndex([1,0,0,0,0,0,0,0,0,0,0,1])).toBe(1);
  });

  it( 'Should condsider empty subarrays to equal 0', () => {
    expect(findEvenIndex([8])).toBe(0);
  });

  it( 'Should condsider empty subarrays to equal 0', () => {
    expect(findEvenIndex([7,3,-3])).toBe(0);
  });

  it( 'Should handle arrays of short length', () => {
    expect(findEvenIndex([8,8])).toBe(-1);
  });
});
