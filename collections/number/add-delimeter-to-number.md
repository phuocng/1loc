~~~ javascript
const addDelimeter = (num, del=",", dec=".") => (!num) ? null : num.toString().split(dec).map((n,i) => (i === 0) ? n.replace(/\B(?=(\d{3})+(?!\d))/g, del) : n).join(dec);

// addDelimeter(9999999.9999) === "9,999,999.9999"
~~~
