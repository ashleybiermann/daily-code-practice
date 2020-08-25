'use strict';

const persistence = require('./challenge.js');

describe( "persistence Function", () => {
    
  it( 'Should return persistence is not needed for single digit numbers', () => {
    expect(persistence(4)).toBe(0);
  });

  it( 'Should return persistence for two digit number', () => {
    expect(persistence(39)).toBe(3);
  });
  
  it( 'Should return persistence for three digit number', () => {
    expect(persistence(999)).toBe(4);
  });
    
  it( 'Should return persistence for numbers containing a 0', () => {
    expect(persistence(301)).toBe(1);
  });
});
