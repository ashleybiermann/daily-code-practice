'use strict';

const narcissistic = require('./challenge.js');

describe( "Narcissistic Function", () => {
  it( "should find small numbers are all narcissistic", () => {
    expect(narcissistic(7)).toBe(true);
    expect(narcissistic(1)).toBe(true);
    expect(narcissistic(5)).toBe(true);
  });
  
  it( "should find these numbers are narcissistic", () => {
    expect(narcissistic(371)).toBe(true);
    expect(narcissistic(370)).toBe(true);
    expect(narcissistic(1634)).toBe(true);
  });
    
  it( "should find these numbers are not narcissistic", () => {
    expect(narcissistic(42)).toBe(false);
    expect(narcissistic(375)).toBe(false);
    expect(narcissistic(54883)).toBe(false);
  });
});
