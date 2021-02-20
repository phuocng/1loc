~~~ javascript
// `h` is an hour number between 0 and 24
const suffixAmPm = h => Array(25).fill(0).map((_, i) => `${i % 12 === 0 ? 12 : i % 12}${i < 12 || i === 24 ? 'am': 'pm'}`)[h];

// Example
suffixAmPm(0);      // '12am'
suffixAmPm(5);      // '5am'
suffixAmPm(12);     // '12pm'
suffixAmPm(15);     // '3pm'
suffixAmPm(23);     // '11pm'
suffixAmPm(24);     // '12am'
~~~