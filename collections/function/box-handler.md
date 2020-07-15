~~~ javascript
  const boxHandler = (x) => ({ next: (f) => boxHandler(f(x)), res: (f) => f(x) });

  // Example
  const getPercentNumber = (str) => boxHandler(str).next((str) => str.replace(/\%/, '')).next((str) => parseFloat(str)).res((res) => res * 0.01);

  console.log(getPercentNumber('50%')); // 0.5 
~~~