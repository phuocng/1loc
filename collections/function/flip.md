~~~ javascript
const flip = fn => (...args) => fn(...args.reverse())
// for binary functions
const flip = fn => (b, a) => fn(a, b)
// or for curried functions
const flip = fn => b => a => fn(a)(b)
~~~
