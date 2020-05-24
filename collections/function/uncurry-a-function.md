~~~ javascript
// `fn` is a curried function
// `n` is the depth of parameters
const uncurry = (fn, n = 1) => (...args) => (acc => args => args.reduce((x, y) => x(y), acc))(fn)(args.slice(0, n));

// Example
const sum = a => b => c => a + b + c;
uncurry(sum, 1)(1)(2)(3);       // 6
uncurry(sum, 2)(1, 2)(3);       // 6
uncurry(sum, 3)(1, 2, 3);       // 6
~~~