~~~ javascript
const isHexadecimal = str => /^[A-F0-9]+$/i.test(str);

// Or
const isHexadecimal = str => str.split('').every(c => '0123456789ABCDEFabcdef'.indexOf(c) !== -1);

// Examples
isHexadecimal('123');       // true
isHexadecimal('A1B2C3');    // true
isHexadecimal('#123');      // false
~~~