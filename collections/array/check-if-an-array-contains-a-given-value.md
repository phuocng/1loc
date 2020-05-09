~~~ javascript
const contains = (arr, value) => arr.some(item => item === value);

// contains(['foo', 'foo'], 'foo') === true
// contains(['foo', 'bar'], 'foo') === true
// contains(['bar', 'bar'], 'foo') === false
~~~
