~~~ javascript
const monthDiff = (startDate, endDate)  => {
return (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth() <= 0 ? 0 : (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth()
}

// Example
monthDiff(new Date('2020-01-01'), new Date('2021-01-01'))  // 12
~~~
