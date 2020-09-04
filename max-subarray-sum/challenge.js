function maxSequence (arr) {
  let maxSumSeen = 0;
  let maxIfEndHere = 0;

  for (let i = 0; i < arr.length; i++) {
    maxIfEndHere = maxIfEndHere + arr[i];

    if (maxSumSeen < maxIfEndHere) {
      maxSumSeen = maxIfEndHere;
    }

    if (maxIfEndHere < 0) {
      maxIfEndHere = 0;
    }
  }
  return maxSumSeen;
}

module.exports = maxSequence;