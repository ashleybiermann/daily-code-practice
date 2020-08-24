function toCamelCase(str) {
  let result = '';
  let removeMe = '';

  if (!str) {
    return result;
  }

  result += str[0];

  for (let i = 1; i < str.length; i++) {
    if (str[i] === '-' || str[i] === '_') {
      let change = str[i + 1].toUpperCase();
      result += change;
      removeMe = str[i + 1];
    } else {
      let remaining = str[i];
      if (remaining !== removeMe) {
      result += remaining;
      }
    }
  }
  return result;
}

module.exports = toCamelCase;