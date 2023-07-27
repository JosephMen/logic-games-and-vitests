# Logic Games
Este proyecto desarrolla algunos juegos logicos y muestra una posible solucion, esta comprobado su funcionamiento por la cantidad de test que se desarrollaron y aprobaron.
## Libraries
    - Vitest for testing
    - Standard lintern for vscode 

## FizzBuzz
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.


answer[i] == "Fizz" if i is divisible by 3.


answer[i] == "Buzz" if i is divisible by 5.


answer[i] == i (as a string) if none of the above conditions are true.

## Roman -> Decimal and Decimal -> Roman

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

- I can be placed before V (5) and X (10) to make 4 and 9. 
- X can be placed before L (50) and C (100) to make 40 and 90. 
- C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

### Observations
Most of the solutions found on the internet do not take into consideration that you should not be able to convert invalid Roman numerals, e.g. "IIII", "VX", "DMMVC" etc, the tests check a variety of scenarios and the functions should not return numbers if the syntax of the number is invalid.
