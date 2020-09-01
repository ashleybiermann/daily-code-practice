function findOdd(a) {

  let seenNums = {
    1:1,
  };

  for (let i = 0; i < a.length; i++) {
    if (a[i] in seenNums) {
      seenNums[i] = seenNums[i] + 1;
      console.log('seenNums', seenNums[i])
    }
  }

  return 0;
}

findOdd([1, 3, 3, 1, 1]);