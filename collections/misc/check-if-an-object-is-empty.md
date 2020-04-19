~~~ javascript
const isEmpty = obj => Object.keys(obj).length === 0 && obj.constructor === Object;

// Or
const isEmpty = obj => JSON.stringify(obj) === '{}';
~~~