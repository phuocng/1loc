~~~ javascript
const isSubset = (a, b) => (new Set(b)).size === (new Set(b.concat(a))).size;

// Examples
isSubset([1,2], [1,2,3,4]);     // true
isSubset([1,2,5], [1,2,3,4]);   // false
isSubset([6], [1,2,3,4]);       // false
~~~