~~~ javascript
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

// Or for enumerable property names only
const isEmpty = obj => JSON.stringify(obj) === '{}';
~~~