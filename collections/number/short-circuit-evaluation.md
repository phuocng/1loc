~~~ javascript
// Ternary operator allows us to write simple conditional statements:

a > 10 ? "Above 10" : "Below 10";
// or another example
a > 10 ? (a > 20 ? "Above 20" : "Between 10-20") : "Below 10";

/*
We can use operand '&&' and '||' to evaluate conditional statement instead of complicated ternary operation
'&&' operand return the first falsy value
If every operand evaluate to true, the last evaluated will be returned.

'||' operand return the first truthy value
If every operand evaluate to false, the last evaluated will be returned.
*/

let one = 1, two = 2, three = 3;

console.log(one && two && three); // -> 3
console.log(0 && null); // -> 0 (the first falsy value)

console.log(one || two || three); // -> 1
console.log(0 || null); // -> null




~~~
