~~~ javascript
const monthDiff = (startDate, endDate) => Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth());

// Example
monthDiff(new Date('2020-01-01'), new Date('2021-01-01'));  // 12
~~~
