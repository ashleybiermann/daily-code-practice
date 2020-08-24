## Problem Domain
- Convert a string to camel case
- Write a method that converts dash/underscore - _ delimited words into camel case
- First word should be capitalized only if original word was capitalized

## Example
- the-stealth-warrior => theStealthWarrior
- The_Stealth_Warrior => TheStealthWarrior

## Solution
- return the first letter as is
- for the length of the string:
  - return the rest of the letters before a dash - or underscore _ 
    - make them to lower case
  - remove the dash - or underscore _
  - make the letter after the dash - or underscore _ to upper case
- return the result

## Big O

- Time: O(n)
- Space: O(n)

## Test Considerations
- empty string is given as arg
- how will numbers be handled?
- account for a - or _ as as the first character
- varied lengths of strings

### Tracking Info

- Source: Code Wars
- Date Completed: Aug 23, 2020