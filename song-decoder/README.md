## Problem Domain

- Write a function to remove all 'WUB' from a string, and return the remaining words with a single space in between
- remove all heading and trailing spaces
- input will be limited to uppercase letters only, no empty strings, and a limit of 200 chars 

## Example

-Input: "WUBAWUBWUBWUBBWUBWUBWUBCWUBWUB" Output: "A B C"

## Solution

- declare a new string to hold decode string
- replace all 'WUB' with ' ' 
- replace all multiple ' ' with a single ' '
- check for and remove heading space
- check for and remove trailing space
- return decoded string

## Big O

- Time: 
- Space: 

## Test Considerations

- only run if arg is not empty
- handle lowercase letters
- handle strings of longer length

### Tracking Info

- Source: Code Wars
- Date Completed: Aug 27, 2020