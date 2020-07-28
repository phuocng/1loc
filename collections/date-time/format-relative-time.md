```javascript
const rtf = (value, unit) => new Intl.RelativeTimeFormat('en').format(value, unit);

/*
  value - Numeric value to use in the internationalized relative time message.
  unit - Unit to use in the relative time internationalized message. 
    Possible values are: "year", "quarter", "month", "week", "day", "hour", "minute", "second".
    Plural forms are also permitted.
*/

// Example
rtf(5, 'day'); // in 5 days
rtf(-3, 'day'); // 3 days ago
rtf(2, 'minutes'); // in 2 min
```
