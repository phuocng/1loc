~~~ javascript
const addCommas = (num) => (`${num}`).split('.').map((n,i) => (i === 0) ? n.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : n).join('.');

// addCommas(9999999.9999) === "9,999,999.9999"
~~~
