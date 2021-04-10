~~~ javascript
const numberOfDays = year => (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) ? 366 : 365;

// Or
const numberOfDays = year => new Date(year, 1, 29).getDate() === 29 ? 366 : 365;
~~~