~~~ javascript
// `date` is a Date object
const isWeekday = (date = new Date()) => date.getDay() % 6 !== 0;
~~~