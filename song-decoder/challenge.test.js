'use strict';

const songDecoder = require('./challenge.js');

describe('songDecoder Function', () => {
    
  it( 'Should return partition index where left sum of left and sum of right match', () => {
    expect(songDecoder([1,2,3,4,3,2,1])).toBe(3);
  });

});
