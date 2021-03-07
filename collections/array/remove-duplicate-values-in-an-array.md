~~~ javascript
const removeDuplicate = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

// Example
removeDuplicate(['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']); //  ['h', 'e', 'w', 'r', 'd']
~~~