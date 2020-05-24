~~~ javascript
const average = (...args) => args.reduce((a, b) => a + b) / args.length;

// Example
average(1, 2, 3, 4);    // 2.5
~~~