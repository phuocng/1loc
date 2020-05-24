~~~ javascript
// `n` is a position number
const addOrdinal = n => `${n}${['st', 'nd', 'rd'][((n + 90) % 100 - 10) % 10 - 1] || 'th'}`;

// Or
const addOrdinal = n => `${n}${[, 'st', 'nd', 'rd'][/1?.$/.exec(n)] || 'th'}`;

// Or
const addOrdinal = n => `${n}${[, 'st', 'nd', 'rd'][n % 100 >> 3^1 && n % 10] || 'th'}`;

// Or
const addOrdinal = n => `${n}${{one: 'st', two: 'nd', few: 'rd', other: 'th'}[new Intl.PluralRules('en', { type: 'ordinal' }).select(n)]}`;

// Examples
addOrdinal(1);      // '1st'
addOrdinal(2);      // '2nd'
addOrdinal(3);      // '3rd'
addOrdinal(11);     // '11th'
addOrdinal(12);     // '13th'
addOrdinal(13);     // '13th'
~~~