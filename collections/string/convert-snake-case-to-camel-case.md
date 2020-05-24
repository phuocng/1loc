~~~ javascript
const snakeToCamel = str => str.toLowerCase().replace(/(_\w)/g, m => m.toUpperCase().substr(1));

// Example
snakeToCamel('HELLO_world');    // 'helloWorld'
~~~