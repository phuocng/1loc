~~~ javascript
const isNumeric = str => !/[^0-9]/.test(str);

// Examples
isNumeric(2);               // true
isNumeric('23');            // true
isNumeric('00123');         // true

isNumeric('1.23');          // false
isNumeric('-Infinity');     // false
isNumeric('Infinity');      // false
isNumeric('NaN');           // false
~~~