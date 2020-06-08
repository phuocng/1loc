~~~ javascript
const isAlphanumeric = str => /^[0-9A-Z]+$/i.test(str);

// Examples
isAlphanumeric('helloworld');           // true
isAlphanumeric('HelloWorld');           // true
isAlphanumeric('hello world');          // false
isAlphanumeric('hello123');             // true
isAlphanumeric('hello 123');            // false
~~~