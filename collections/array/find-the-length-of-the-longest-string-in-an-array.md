~~~ javascript
const findLongest = words => Math.max(...(words.map(el => el.length)));

// Example
findLongest(['always','look','on','the','bright','side','of','life']);  // 6
~~~