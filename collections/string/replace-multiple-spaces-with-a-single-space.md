~~~ javascript
// Replace spaces, tabs and new line characters
const replaceSpaces = str => str.replace(/\s\s+/g, ' ');

// Only replace spaces
const replaceOnlySpaces = str => str.replace(/  +/g, ' ');

// Example
replaceSpaces('this\n   is     \ta    \rmessage');  // 'this is a message'
~~~