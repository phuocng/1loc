~~~ javascript
const clamp = (val, min = 0, max = 1) => Math.max(min, Math.min(max, val));

// Example
clamp(199, 10, 25);     // 25
~~~