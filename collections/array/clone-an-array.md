~~~ javascript
// `arr` is an array
const clone = arr => arr.slice(0);

// Or
const clone = arr => [...arr];

// Or
const clone = arr => Array.from(arr);

// Or
const clone = arr => arr.map(x => x);

// Or
const clone = arr => JSON.parse(JSON.stringify(arr));

// Or
const clone = arr => arr.concat([]);
~~~