~~~ javascript
const memoize = fn => ((cache = {}) => arg => cache[arg] || (cache[arg] = fn(arg)))();

// Example
// Calculate Fibonacci numbers
const fibo = memoize(n => n <= 2 ? 1 : fibo(n - 1) + fibo(n - 2));

fibo(1);    // 1
fibo(2);    // 1
fibo(3);    // 2
fibo(4);    // 3
fibo(5);    // 5
fibo(6);    // 8
~~~