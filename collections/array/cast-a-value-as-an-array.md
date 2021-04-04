~~~ javascript
const castArray = value => Array.isArray(value) ? value : [value];

// Examples
castArray(1);               // [1]
castArray([1, 2, 3]);       // [1, 2, 3]
~~~