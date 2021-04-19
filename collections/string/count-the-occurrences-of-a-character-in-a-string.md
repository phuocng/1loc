~~~ javascript
const countOccurrences = (str, char) => [...str].reduce((a, v) => (v === char ? a + 1 : a), 0);

// Or
const countOccurrences = (str, char) => str.split('').reduce((a, v) => (v === char ? a + 1 : a), 0);

// Or
const countOccurrences = (str, char) => [...str].filter(item => item === char).length;

// Or
const countOccurrences = (str, char) => str.split('').filter(item => item === char).length;

// Examples
countOccurrences('a.b.c.d.e', '.');     // 4
~~~