~~~ javascript
const coalesce = (...args) => args.find(item => item !== undefined && item !== null);

// Or
const coalesce = (...args) => args.find(item => ![undefined, null].includes(item));

// Examples
coalesce(undefined, null, 'helloworld', NaN);     // 'helloworld'
~~~