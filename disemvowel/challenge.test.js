'use strict';

const disemvowel = require('./challenge.js');
const withVowels = 'This website is for losers LOL!';
const withoutVowels = 'Ths wbst s fr lsrs LL!';

describe( "disemvowel Function", () => {
  it( 'Should remove lowercase and uppercase vowels from the string', () => {
    expect(disemvowel(withVowels)).toStrictEqual(withoutVowels);
  });
});
