~~~ javascript
const invert = obj => Object.keys(obj).reduce((res, k) => Object.assign(res, {[obj[k]]: k}), {});

// Example
invert({ a: '1', b: '2', c: '3' });     // { 1: 'a', 2: 'b', 3: 'c' }
~~~