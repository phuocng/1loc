~~~ javascript
const randomIp = () => Array(4).fill(0).map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0)).join('.');

// Example
randomIp();     // 175.89.174.131
~~~