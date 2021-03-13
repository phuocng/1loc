~~~ javascript
// `i` must be less than `j`
const swapItems = (a, i, j) => a[i] && a[j] && [...a.slice(0, i), a[j], ...a.slice(i + 1, j), a[i], ...a.slice(j + 1)] || a;

// Example
swapItems([1, 2, 3, 4, 5], 1, 4);   // [1, 5, 3, 4, 2] 
~~~