'use strict';

const arrayDiff = require('./challenge.js');

describe('arrayDiff Function', () => {
    
  it( 'Should compare two arrays and return the difference', () => {
    expect(arrayDiff([1, 2], [1])).toEqual([2]);
  });

  it( 'Should compare arrays of same length', () => {
    expect(arrayDiff([1, 2], [1, 3])).toEqual([2]);
  });

  it( 'Should return first array if second array is empty', () => {
    expect(arrayDiff([1, 2], [])).toEqual([1, 2]);
  });

  it( 'Should return first array, even if it is empty', () => {
    expect(arrayDiff([], [1, 3])).toEqual([]);
  });

  it( 'Should compare arrays of differing length', () => {
    expect(arrayDiff([1, 2, 5, 1 ,3, 5], [1, 3, 5, 6, 3, 0])).toEqual([2]);
  });

  it( 'Should remove all of an included values from first array', () => {
    expect(arrayDiff([1, 2, 2, 2, 2, 2], [2])).toEqual([1]);
  });
});