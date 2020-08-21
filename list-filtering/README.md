## Problem Domain

- Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

## Example

- INPUT: filter_list([1,2,'a','b']) OUTPUT: [1,2]
- INPUT: filter_list([1,'a','b',0,15]) OUTPUT: [1,0,15]
- INPUT: filter_list([1,2,'aasf','1','123',123]) OUTPUT: [1,2,123]

## Solution

- declare a new array to hold result
- loop through input
  - check typeof each index
    - if it's a number, push it into the result
- return the result

## Big O

- Time: O(n)
- Space: O(n)

## Test Considerations

- Inputs that have numbers as strings (inside of ' ')

### Tracking Info

- Source: Code Wars
- Date Completed: Aug 21, 2020