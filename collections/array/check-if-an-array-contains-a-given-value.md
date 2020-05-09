~~~ javascript
const contains = (arr, value) => arr.some(item => item === value);

// isContains(['foo', 'foo'], 'foo') === true
// isContains(['foo', 'bar'], 'foo') === true
// isContains(['bar', 'bar'], 'foo') === false
~~~
