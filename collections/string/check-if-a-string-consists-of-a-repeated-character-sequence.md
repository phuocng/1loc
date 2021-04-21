~~~ javascript
const consistsRepeatedSubstring = str => `${str}${str}`.indexOf(str, 1) !== str.length;

// Example
consistsRepeatedSubstring('aa');            // true
consistsRepeatedSubstring('aaa');           // true
consistsRepeatedSubstring('ababab');        // true
consistsRepeatedSubstring('abc');           // false
~~~