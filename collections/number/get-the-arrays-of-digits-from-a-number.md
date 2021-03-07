~~~ javascript
const digitize = n => `${n}`.split('').map(v => parseInt(v, 10));

// Or
const digitize = n => [...`${n}`].map(v => parseInt(v, 10));

// Example
digitize(123);    // [1, 2, 3]
~~~