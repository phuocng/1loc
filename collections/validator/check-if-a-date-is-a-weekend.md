~~~ javascript
// `date` is a Date object
const isWeekend = (date = new Date()) => date.getDay() % 6 === 0;
~~~