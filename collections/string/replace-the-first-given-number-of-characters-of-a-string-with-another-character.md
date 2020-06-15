~~~ javascript
const mask = (str, num, mask) => `${str}`.slice(num).padStart(`${str}`.length, mask);

// Example
mask(1234567890, 3, '*');       // ***4567890
~~~