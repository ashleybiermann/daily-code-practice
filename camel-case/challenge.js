function toCamelCase(str){
  let result = '';
  
  if (!str) {
    return result;
  }
  
  result += str[0];
  
  for (let i = 1; i < str.length; i++) {
    
    if (str[i] === '-' || str[i] === '_') {
      str.replace(i,'');
      let change = str[i + 1].toUpperCase();
      result += change;
    } 
    //FIXME: need to account for remaining letters
  }
  
  return result;
}

module.exports = toCamelCase;