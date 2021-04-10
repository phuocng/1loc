~~~ javascript
const isBase32 = value => value.length % 8 === 0 && /^[A-Z2-7]+=*$/.test(value);
~~~