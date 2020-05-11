~~~javascript
/** @returns a new version of `fn` that returns values as lazy evaluable */
const thunkfy = fn => (...args) => () => fn(...args)

function heavyComputation (x) {
  return doStuff(x)
}

const unnecessarySlow = manyThings.map(heavyComputation).find(result => result.criteria)
const probablyFaster = manyThings.map(thunkfy(heavyComputation))
  .find(thunk => thunk().criteria)
~~~
