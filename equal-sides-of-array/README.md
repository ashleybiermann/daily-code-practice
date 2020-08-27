## Problem Domain

- You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

## Example

- Input: [1,2,3,4,3,2,1] Output: 3 (index)
- Input: [1,2,3,4,5,6] Output: -1 (no such index exists)

## Solution

- define an array starting from arr[0]
- define an array started from arr[arr.length - 1]
- for both arrays
  - sum up the total of the indices 
- compare both arrays 
  - return index if match
    - else return -1

## Big O

- Time: O(2) ... must make 2 new arrays of equal length, then pass through their resulting arrays
- Space: O(2) ... must make 2 new arrays of equal length

## Test Considerations

- only run if array is given as arg
- return error if ever a non-int element is found
- arrays of varied lengths, 1 to many
- arrays containing negative numbers
- arrays containing more than one possible answer
- arrays with both even and odd number of indices

### Tracking Info

- Source: Code Wars
- Date Completed: Aug 26, 2020

### Resources

- [Geeks For Geeks - Java Example](https://www.geeksforgeeks.org/find-element-array-sum-left-array-equal-sum-right-array/)
  - Where I was stuck: I had tried to use a pointer (partition) to track the divider of the array. I wanted to add up the numbers on either side of it, but got stuck in that it would only add one side then the other. As a result, I could not get an accurate timing to check left against right, as by time one matched the other, the pointed had moved on, thusly changing the sum total of one side or the other. I knew I wanted to then create an array from each side, so I looked to outside sources
  - What I gained from this example: Rather than making the sub arrays both have starting points that went from 'left to right', I can make one start from index 0 and the other from array.length and each index holds the sum up until that point. Rather than stopping at a 'midpoint', this method makes two entirely new arrays with the sum totals front to back and back to front. Rather than only holding the sum in a single variable that changes, they are held in an array. 
  - A-ha moment: Now, I can compare the two arrays (which are front to back and back to front) to find if they have a point where their indices match values. If yes, this is the array index that can be returned as the result. Where I was struggling to pinpoint the exact moment where they matched, I can now take the arrays 'at leisure' and compare for matching index. 