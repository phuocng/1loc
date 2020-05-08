~~~ javascript
const isEqual = arr => arr.every(item => item === 'foo');

// isEqual(['foo', 'foo']) === true
// isEqual(['foo', 'bar']) === false
// isEqual(['bar', 'bar']) === false
~~~