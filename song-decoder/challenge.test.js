'use strict';

const songDecoder = require('./challenge.js');

describe('songDecoder Function', () => {
    
  it( 'Should replace WUB with one space', () => {
    expect(songDecoder('AWUBBWUBC')).toBe('A B C');
  });

  it( 'Should remove a leading space', () => {
    expect(songDecoder('WUBAWUBBWUBC')).toBe('A B C');
  });

  it( 'Multiples of WUB should be replaced with only one space', () => {
    expect(songDecoder('AWUBWUBWUBBWUBWUBWUBC')).toBe('A B C');
  });

  it( 'Should handle non-words', () => {
    expect(songDecoder('WUBJKDWUBWUBWBIRAQKFWUBWUBYEWUBWUBWUBWVWUBWUB')).toBe('JKD WBIRAQKF YE WV');
  });

  it( 'Should return a single letter', () => {
    expect(songDecoder('U')).toBe('U');
  });

  it( 'Should handle partial WUB matches', () => {
    expect(songDecoder('WUWUB')).toBe('WU');
  });

});
