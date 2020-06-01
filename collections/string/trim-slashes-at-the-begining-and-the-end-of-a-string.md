~~~ javascript
const trimSlashes = str => str.replace(/^\/+|\/+$/g, '');

// Or
const trimSlashes = str => str.split('/').filter(Boolean).join('/');

// Example
trimSlashes('//hello/world///');    // hello/world
~~~