~~~ javascript
const yesterday = (d => new Date(d.setDate(d.getDate() - 1)))(new Date);

// Or
const yesterday = new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24);
~~~