~~~ javascript
const unique = arr => [...new Set(arr)];

// Or
const unique = arr => arr.filter((el, i, array) => array.indexOf(el) === i);

// Or
arr.reduce((unique, el) => unique.includes(el) ? unique : [...unique, el], []);
~~~