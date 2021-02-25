~~~ javascript
const getSubsets = arr => arr.reduce((prev, curr) => prev.concat(prev.map(k => k.concat(curr))), [[]]);

// Examples
getSubsets([1, 2]);     // [[], [1], [2], [1, 2]]
getSubsets([1, 2, 3]);  // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
~~~