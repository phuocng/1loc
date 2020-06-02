~~~ javascript
const pluck = (objs, property) => objs.map(obj => obj[property]);

// Example
pluck([
    { name: 'John', age: 20 },
    { name: 'Smith', age: 25 },
    { name: 'Peter', age: 30 },
], 'name');         // ['John', 'Smith', 'Peter']
~~~