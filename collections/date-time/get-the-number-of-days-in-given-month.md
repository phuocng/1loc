~~~ javascript
// `month` is zero-based index
const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
~~~