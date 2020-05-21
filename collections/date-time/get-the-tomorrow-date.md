~~~ javascript
const tomorrow = (d => new Date(d.setDate(d.getDate() + 1)))(new Date);

// Or
const tomorrow = new Date((new Date()).valueOf() + 1000 * 60 * 60 * 24);
~~~