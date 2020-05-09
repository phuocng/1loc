~~~ javascript
// `a` and `b` are `Date` instances
const compare = (a, b) => a.getTime() > b.getTime();

// compare(new Date('2020-03-30'), new Date('2020-01-01')) === true
~~~