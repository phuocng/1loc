~~~ javascript
const range = (min, max) => [...Array(max - min + 1).keys()].map(i => i + min);
// range(5, 10) === [5, 6, 7, 8, 9, 10]
~~~
