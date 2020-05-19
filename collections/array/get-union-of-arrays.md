~~~ javascript
const union = (...arr) => [...new Set(arr.flat())];

// union([1, 2], [2, 3], [3]) returns [1, 2, 3]
~~~
