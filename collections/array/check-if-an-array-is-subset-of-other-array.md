~~~ javascript
const isSubset = (array1, array2) => (new Set(array2)).size === (new Set(array2.concat(array1))).size;

// isSubset([1,2], [1,2,3,4]) === true
// isSubset([1,2,5], [1,2,3,4]) === false
// isSubset([6], [1,2,3,4]) === false
~~~
