~~~ javascript
const isEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;

// Examples
isEmpty({}); // true
isEmpty({ name: 'nick' }); // false
~~~