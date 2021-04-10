~~~ javascript
// It doesn't accept the I, O, l characters 
const isBase58 = value => /^[A-HJ-NP-Za-km-z1-9]*$/.test(value);
~~~