## Problem Domain

- Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result. 
- It should remove all values from list a, which are present in list b.

## Example

- Input: [1,2,3][2]  Output: [1,3]
- Input: [1,2,2,2,2,3][2]  Output [1,3]

## Solution

Option 1

    - compare listA to listB
      - if value in listA occurs in listB
        - remove value from listA
    - return listA

Option 2

    - create a new array result
      - compare listA to listB
        - if value in listA does not appear listB
          - add value to result array
    - return result

## Big O

- Time: 
- Space: 

## Test Considerations


### Tracking Info

- Source: Code Wars
- Date Completed: Aug 30, 2020