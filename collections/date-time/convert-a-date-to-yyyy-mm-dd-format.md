~~~ javascript
// `date` is a `Date` object
const formatYmd = date => date.toISOString().slice(0, 10);

// formatYmd(new Date());
~~~