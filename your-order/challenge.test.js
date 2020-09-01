'use strict';

const order = require('./challenge.js');

describe( "order Function", () => {
    
  it( 'Should sort the string based on the digit found in each word', () => {
    expect(order("is2 Thi1s T4est 3a")).toStrictEqual("Thi1s is2 3a T4est");
  });

  it( 'Should return an empty String when empty String is given as input', () => {
    expect(order("")).toStrictEqual("");
  });

  it( 'Should sort when numbers are found at first, last, and middle indicies', () => {
    expect(order("d4o dru7nken sh2all w5ith s8ailor wha1t 3we a6")).toStrictEqual("wha1t sh2all 3we d4o w5ith a6 dru7nken s8ailor");
  });

  it( 'Should sort numbers without additional characters present in word', () => {
    expect(order("3 6 4 2 8 7 5 1 9")).toStrictEqual("1 2 3 4 5 6 7 8 9");
  });

});