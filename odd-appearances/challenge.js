function findOdd(a) {

  let seenNums = {};

  for (let i = 0; i < a.length; i++) {
    if (a[i] in seenNums) {
      seenNums[a[i]]++;
      console.log('added one to', a[i]);
    } else {
      seenNums[a[i]] = 1;
      console.log('added a new key', a[i]);
    }
  }

  for (let number in seenNums) {
    if (seenNums[number] % 2 !== 0) {
      return parseInt(number);
    }
  }

  return 0;
}

module.exports = findOdd;