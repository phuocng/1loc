~~~ javascript
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

// Examples
round(1.234567, 3);     // 1.235
round(1.234567, 4);     // 1.2346
~~~