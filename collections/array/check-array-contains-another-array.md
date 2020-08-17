~~~ javascript
// check if container contains subset
const isContaining = (container, subset) => container.join("|").includes(subset.join("|"));

// Examples
isContaining([1, 2, 3], [1, 2, 3]); // true
isContaining([1, 2, 3], [1, 2]); // true
isContaining([1, 2, 3], [2, 1]);  // false
~~~
