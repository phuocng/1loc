~~~javascript
/** @returns a new version of `fn` that returns values as lazy evaluable */
const thunkfy = fn => (...args) => () => fn(...args)
~~~
