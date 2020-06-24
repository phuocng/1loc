~~~ javascript
const reverse = a => [...a].reverse();

// Or
const reverse = a => [...a].sort(() => -1)

// Examples
const array = [1, 3, 2, 1, 4];
reverse(array); // [4, 1, 2, 3, 1]
array; // [1, 3, 2, 1, 4]
~~~
