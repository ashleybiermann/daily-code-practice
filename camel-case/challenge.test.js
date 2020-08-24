'use strict';

const toCamelCase = require('./challenge.js');

describe( "toCamelCase Function", () => {
  it( 'Should return an empty string when given an empty string', () => {
    expect(toCamelCase('')).toBe('');
  });
  
  it( 'Should return camel case when given underscores', () => {
    expect(toCamelCase('the_stealth_warrior')).toBe('theStealthWarrior');
  });

  it( 'Should return the first letter as uppercase when given as uppercase', () => {
    expect(toCamelCase('The-Stealth-Warrior')).toBe('TheStealthWarrior');
  });

  it( 'Should return all uppercase when single letters are given', () => {
    expect(toCamelCase('A-B-C')).toBe('ABC');
  });
});
