~~~ javascript
const shuffle = arr => arr.map(a => ({ sort: Math.random(), value: a })).sort((a, b) => a.sort - b.sort).map(a => a.value);

// Or
const shuffle = arr => arr.sort(() => .5 - Math.random());

// Example
shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);   // [9, 1, 10, 6, 8, 5, 2, 3, 7, 4]
~~~