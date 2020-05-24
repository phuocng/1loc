~~~ javascript
const reverse = str => str.split('').reverse().join('');

// Or
const reverse = str => [...str].reverse().join('');

// Or
const reverse = str => str.split('').reduce((rev, char)=> `${char}${rev}`, '');

// Or
const reverse = str => (str === '') ? '' : `${reverse(str.substr(1))}${str.charAt(0)}`;

// Example
reverse('hello world');     // 'dlrow olleh'
~~~