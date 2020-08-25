'use strict';

const isPrime = require('./challenge.js');

describe( "isPrime Function", () => {
  it( 'Should find that 1 is not prime', () => {
    expect(isPrime(1)).toBe(false);
  });

  it( 'Should find that 2 is prime', () => {
    expect(isPrime(2)).toBe(true);
  });

  it( 'Should find that 4 is not prime', () => {
    expect(isPrime(4)).toBe(false);
  });
  
  it( 'Should find that negative numbers are not prime', () => {
    expect(isPrime(-16)).toBe(false);
  });

  it( 'Should find that 73 is prime', () => {
    expect(isPrime(73)).toBe(true);
  });
});
