~~~ javascript
const flat = arr => arr.reduce((a, b) => Array.isArray(b) ? [...a, ...flat(b)] : [...a, b], []);

// Or
// See the browser compatibility at https://caniuse.com/#feat=array-flat
const flat = arr => arr.flat();

// flat(['cat', ['lion', 'tiger']]) returns ['cat', 'lion', 'tiger']
~~~
