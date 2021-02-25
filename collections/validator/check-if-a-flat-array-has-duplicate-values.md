~~~ javascript
const hasDuplicateValues = arr => new Set(arr).size !== arr.length;

// Examples
hasDuplicateValues(['h', 'e', 'l', 'l', 'o']);      // true
hasDuplicateValues(['w', 'o', 'r', 'd']);           // false
~~~