~~~ javascript
const generateString = (length, chars) => Array(length).fill('').map((v) => chars[Math.floor(Math.random() * chars.length)]).join('');

// generateString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')
~~~