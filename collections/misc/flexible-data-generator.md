```js
// returns an array with `length = num` of the callback results
const generateData = (num, cb) => [...(function * (i) { while (i < num) yield cb(i++, () => { num = -1 }) })(0)]

// with shortened variable names
const gen = (n, c) => [...(function * (i) { while (i < n) yield c(i++, () => { n = -1 }) })(0)]

/* EX: generate a weird set of random numbers */
// limit to 1000 elements
const data = generateData(1000, (i, halt) => {
  // get a random number
  const number = Math.round(Math.random() * -i) + i
  // if true, break
  if (number === i && i > 100) halt()
  return number
})
console.log(data)
```
