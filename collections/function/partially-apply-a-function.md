~~~ javascript
const partial = (fn, ...a) => (...b) => fn(...a, ...b);

// Example
const sum = (x, y) => x + y;
const inc = partial(sum, 1);
inc(9);     // 10
~~~