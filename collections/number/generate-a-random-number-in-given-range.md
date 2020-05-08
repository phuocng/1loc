```js
const random = (a, b) => Math.random() * Math.abs(a - b) + (a - b < 0 ? a : b)
// and rounded
const randomRounded = (a, b) => Math.round(Math.random() * Math.abs(a - b) + (a - b < 0 ? a : b))
```
