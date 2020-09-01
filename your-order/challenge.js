function order(words){

  let result = [];
  const splitWords = words.split(' ');
  const regex = /\d/g;

  for (let i = 0; i < splitWords.length; i++) {
    let number = parseInt(splitWords[i].match(regex));
    result[number - 1] = splitWords[i];
  }
  return result.join(' ');
}

module.exports = order;