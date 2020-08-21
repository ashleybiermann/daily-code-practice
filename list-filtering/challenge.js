'use strict';

function filter_list(list) {
  let result = [];
  
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === 'number') {
      result.push(list[i]);
    }
  }
  return result;
}

module.exports = filter_list;