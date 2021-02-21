~~~ javascript
const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// Or
const capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`;

// Example
capitalize('hello world');      // 'Hello world'
~~~