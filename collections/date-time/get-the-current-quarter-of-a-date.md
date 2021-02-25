~~~ javascript
const getQuarter = (d = new Date()) => Math.ceil((d.getMonth() + 1) / 3);
~~~