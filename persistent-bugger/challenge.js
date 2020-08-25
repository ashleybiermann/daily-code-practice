// check the number of digits in number
  // if one, return counter

// find the product of each digit multiplied together
// add one to the counter

function persistence(num) {

  let counter = 0;
  console.log('counter start at top of persistence', counter);

  // user helper function to take on the recursion, so that the counter can be persisted
  
  helper(num);

  function helper(number) {

    let numAsString = number.toString();

    if (numAsString.length === 1) {
      return counter;
    }

    let product = 1;
    for (let i = 0; i < numAsString.length; i++) {
      product = numAsString[i] * product;
    }

    counter++;

    helper(product);
  }
  return counter;
}

module.exports = persistence;