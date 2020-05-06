~~~ javascript
// `date` is a `Date` object

const formatYmd = date => date.toISOString().slice(0, 10);
// formatYmd(new Date()); // "2020-05-06"

const formatDate = (date) => new Intl.DateTimeFormat('pt-BR').format(date);
// console.log(formatDate(new Date())); // "06/05/2020"
~~~
