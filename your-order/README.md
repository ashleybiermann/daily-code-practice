## Problem Domain
- Write a function to sort a string, where each word in the string will contain a single number. This number is the position the word should have in the result.

## Example
- Input: "is2 Thi1s T4est 3a" Output: "Thi1s is2 3a T4est"

## Solution
Declare an array to hold the result RESULT
Declare an array to hold the individual words of the input String SPLITWORDS
Declare REGEX to filter for a digit
Check each word FOR
  Find the number in each word
  Assign the number to a variable NUMBER
  Add the word to the RESULT at the index of NUMBER
JOIN the words of the RESULT with a space
Return RESULT

## Big O

- Time: 
- Space: 

## Test Considerations
- only run if input is valid
- can handle empty String
- maintains upper and lower caseing
- finds numbers at first, last, and middle indices of the word

### Tracking Info

- Source: Code Wars
- Date Completed: Sept 1, 2020