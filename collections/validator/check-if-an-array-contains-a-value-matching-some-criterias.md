~~~ javascript
const contains = (arr, criteria) => arr.some(v => criteria(v));

// Or
const contains = (arr, criteria) => arr.some(criteria);

// Or
const contains = (arr,criteria) => arr.filter(criteria).length > 0;

// Examples
contains([10, 20, 30], v => v > 25 );               // true
contains([10, 20, 30], v => v > 100 || v < 15 );    // true
contains([10, 20, 30], v => v > 100 );              // false
~~~
