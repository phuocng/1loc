~~~ javascript
const truncate = (str, max, suffix) => str.length < max ? str : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(' '))}${suffix}`;

// Example
truncate('This is a long message', 20, '...');  // 'This is a long...'
~~~