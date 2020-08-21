'use strict';

function disemvowel(str) {
  let regex = /[AEIOU]+/gi;
  
  let disemvowel = str.replace(regex, '');
  
  return disemvowel;
}

module.exports = disemvowel;