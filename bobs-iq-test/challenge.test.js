// Test.assertEquals(iqTest("2 4 7 8 10"),3);
// Test.assertEquals(iqTest("1 2 2"), 1);

'use strict';

const iqTest = require('./challenge.js');

'use strict';

const narcissistic = require('./challenge.js');

describe( "iqTest Function", () => {
  it( 'Should find that the third number is different in its evenness', () => {
    expect(iqTest('2 4 7 8 10')).toBe(3);
  });
  
  it( 'Shold find that the second number is different in its evenness', () => {
    expect(iqTest('1 2 1 1')).toBe(2);
  });
});
