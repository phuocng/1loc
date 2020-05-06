~~~ javascript
// `date` is a `Date` object
const formatDate = (date) => new Intl.DateTimeFormat('pt-BR').format(date);
// console.log(formatDate(new Date())); // "06/05/2020"
~~~
