'use strict';

const listFilter = require('./challenge.js');

describe( "List filter Function", () => {
  it( 'Should remove strings from the input', () => {
    expect(listFilter([1,2,'a','b'])).toStrictEqual([1,2]);
  });
  it( 'Should allow 0 to be retained', () => {
    expect(listFilter([1,'a','b',0,15])).toStrictEqual([1,0,15]);
  });
  it( 'Should only return values with type of number', () => {
    expect(listFilter([1,2,'aasf','1','123',123])).toStrictEqual([1,2,123]);
  });
});
