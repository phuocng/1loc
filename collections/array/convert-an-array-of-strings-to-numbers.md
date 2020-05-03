~~~ javascript
const toNumbers = arr => arr.map(Number);

// Or
const toNumbers = arr => arr.map(x => +x);

// toNumbers(['2', '3', '4']) returns [2, 3, 4]
~~~
