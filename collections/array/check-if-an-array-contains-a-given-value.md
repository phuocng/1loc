~~~ javascript
const isContains = arr => arr.some(item => item === 'foo');

// isContains(['foo', 'foo']) === true
// isContains(['foo', 'bar']) === true
// isContains(['bar', 'bar']) === false
~~~