~~~ javascript
// `date` is a `Date` object
// `locale` is a locale (en-US, pt-BR, for example)
const format = (date, locale) => new Intl.DateTimeFormat(locale).format(date);

// Example
format(new Date(), 'pt-BR');    // 06/05/2020
~~~