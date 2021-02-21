~~~ javascript
const decapitalize = str => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;

// Or
const decapitalize = ([first, ...rest]) => `${first.toLowerCase()}${rest.join('')}`;

// Example
decapitalize('Hello world');    // 'hello world'
~~~