## Problem Domain
- Given an array of integers, write a function that finds the one that appears an odd number of times
  - Inputs will always have only one int that appears an odd amount of times

## Example
- Input: [1, 3, 3, 1, 1] Output: 1
- Input: [4, 4, 4, 1, 1] Output: 4

## Solution

    - create a count object
      - where keys are the array value and values are the count of that value
    - for each value in the array
      - if it's already in the array
        - add 1 to its counter (in the object)
      - if it hasn't been seen
        - create a key:value (arrayVal:count) in the counter object
        - counter starts at 1
    - look through the count object
      - if a value is odd
        - return its key

## Big O

- Time: O(n)
- Space: O(2n)

## Test Considerations

- only run with valid input
- could be adjusted to handle multiple correct outputs
- handles no valid output


### Tracking Info

- Source: Code Wars
- Date Completed: Aug 30, 2020