## Problem Domain
- Write a function to find the maximum sum of a contiguous subsequence in an array
  - empty list should return 0
  - list of all negative numbers should return 0

## Example
- Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]  Output = 6

## Solution

    DECLARE maxSumSeen so far
    DECLARE maxIfEndHere, subarray ends at a point in the array

    LOOP through the InputARRAY
      SET maxIfEndHere to itself + InputARRAY at current index value

      IF maxSumSeen is LESS THAN maxIfEndHere
        SET maxSumSeen to maxIfEndHere

      IF maxIfEndHere is LESS THAN 0
        SET maxIfEndHere back to 0

    RETURN maxSumSeen

## Big O

- Time: O(n) 
- Space: O(n)

## Test Considerations

- empty list returns 0
- all negative numbers will return 0
- handles combinations of positive and negative numbers
- handles very long arrays

### Tracking Info

- Source: Code Wars
- Date Completed: Sept 2, 2020