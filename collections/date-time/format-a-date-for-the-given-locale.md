~~~ javascript
// `date` is a `Date` object
// `locale` is a locale (en-US, pt-BR, for example)
const format = (date, locale) => new Intl.DateTimeFormat(locale).format(date);

// format(new Date(), 'pt-BR') returns `06/05/2020`
~~~
