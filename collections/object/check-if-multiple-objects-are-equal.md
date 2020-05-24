~~~ javascript
const isEqual = (...objects) => objects.every(obj => JSON.stringify(obj) === JSON.stringify(objects[0]));

// Examples
isEqual({ foo: 'bar' }, { foo: 'bar' });    // true
isEqual({ foo: 'bar' }, { bar: 'foo' });    // false
~~~