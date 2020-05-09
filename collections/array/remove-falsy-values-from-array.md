~~~ javascript
const mixedArray = [0, "a string", "", NaN, true, 5, undefined, "another string", false];

const trueValues = mixedArray.filter(Boolean);
// console.log(trueValue) -> [ 'a string', true, 5, 'another string' ]
~~~