## Problem Domain

Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

*Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)*

## Examples

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

## Solution

- Declare inputArr as split (' ')
- Declare a holding array for evens
- Declare a holding array for odds
- Check numbers for evenness or oddness
  - Push each index into its corresponding holding array
  - If odds length > 1 and evens length === 1
    - return evens[0] + 1   *// to account for index not starting at 0 but at 1*
  - If evens length > 1 and odd length === 1
    - return odds[0] + 1   *// to account for index not starting at 0 but at 1*

          PSUEDOCODE 

          DECLARE inputArr = input.SPLIT(' ')
          DECLARE evensArr = []
          DECLARE oddsArr = []

          FOR EACH index of inputArr
            IF (i % 2 === 0)
              evensArr.PUSH(i)

              ELSE
              oddsArr.PUSH(i)
            
            IF (oddsArr.LENGTH > 1 && evensArr.LENGTH === 1)
              RETURN evensArr[0] + 1

            IF (evensArr.LENGTH > 1 && oddsArr.LENGTH === 1)
              RETURN oddsArr[0] + 1

## Big O 
- Time: O(n)
- Space O(n)
    
## Test Considerations

- Input contains characters other than numbers
- Input contains floats
- Input only has 2 numbers
- Input has less than 2 numbers
- Input has all odd or all even numbers
- Input contains negative values

### Tracking Info

- Source: Code Wars
- Date Completed: Aug, 16, 2020