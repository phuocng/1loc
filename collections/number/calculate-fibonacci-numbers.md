~~~ javascript
const fibo = (n, memo = {}) => memo[n] || (n <= 1 ? 1 : (memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo)));

// Examples
fibo(1);    // 1
fibo(2);    // 2
fibo(3);    // 3
fibo(4);    // 5
fibo(5);    // 8
~~~
