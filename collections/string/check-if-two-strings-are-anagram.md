~~~ javascript
const areAnagram = (str1, str2) => str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');

// Examples
areAnagram('listen', 'silent');         // true
areAnagram('they see', 'the eyes');     // true
areAnagram('node', 'deno');             // true
~~~