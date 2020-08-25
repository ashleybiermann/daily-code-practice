## Problem Domain
- Define a function that takes an integer argument and returns logical value true or false depending on if the integer is a prime.

## Example
- Input: 1, Output: false
- Input: 0, Output: false
- Input: -1, Output: false
- Input: 73, Output: true
- Input: 2, Output: true

## Solution
- Check if negative
  - return false
- Check if length of input is 1 
  - If it matches a single digit prime number
    - return true
- Check if divisible by 2, 5, 3
  - if yes, return false
- Else, return true

## Big O

- Time: O(n)
- Space: O(n) 

## Test Considerations
- single digit numbers
- negative numbers
- numbers of varied lengths
- test 0

### Tracking Info

- Source: Code Wars
- Date Completed: Aug 24, 2020