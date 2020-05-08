```js
// returns an array with `length = num` of the results
const generateData = (num, cb) => [...(function * () { for (let i = 0; i < num; i++) yield cb(i, () => { num = -1 }) })()]

// EX: generate a set of random numbers
// another one-liner
const random = (a, b) => Math.round(Math.random() * Math.abs(a - b) + (a - b < 0 ? a : b))

// limit to 100 elements
generateData(100, (i, halt) => {
  // get a random number between 5 and the index/cycle
  const number = Math.round(random(5, i))
  // if that number is 20 interrupt
  if (number === 20) halt()
  return number
})
```
