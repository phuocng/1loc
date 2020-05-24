~~~ javascript
const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));

// Example
diffDays(new Date('2014-12-19'), new Date('2020-01-01'));   // 1839
~~~