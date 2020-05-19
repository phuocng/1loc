~~~ javascript
const isEqual = (arr, value) => arr.every(item => item === value);

// isEqual(['foo', 'foo'], 'foo') === true
// isEqual(['foo', 'bar'], 'foo') === false
// isEqual(['bar', 'bar'], 'foo') === false
~~~