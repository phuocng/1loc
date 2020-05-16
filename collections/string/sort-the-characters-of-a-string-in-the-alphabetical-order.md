~~~ javascript
const sort = str => str.split('').sort((a, b) => a.localeCompare(b)).join('');

// Example
sort('hello world');    // dehllloorw
~~~