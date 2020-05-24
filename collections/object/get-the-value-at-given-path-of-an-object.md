~~~ javascript
const getValue = (path, obj) => path.split('.').reduce((acc, c) => acc && acc[c], obj);

// Example
getValue('a.b', { a: { b: 'Hello World' } });   // 'Hello World';
~~~