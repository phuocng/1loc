~~~ javascript
const swapCase = str => str.split('').map(c => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase())).join('');

// Example
swapCase('Hello World');      // 'hELLO wORLD'
~~~