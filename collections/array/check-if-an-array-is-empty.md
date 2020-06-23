~~~ javascript
// `arr` is an array
const isEmpty = arr => !(Array.isArray(arr) && arr.length > 0 && arr.filter(el => el === undefined).length > 0)
~~~