~~~ javascript
  const boxHandler = (x) => ({ next: (f) => boxHandler(f(x)), res: (f) => f(x) });

  // Example
  const getPercent = (str) => boxHandler(str).next((str) => str.replace(/\%/, '')).next((str) => parseFloat(str)).res((res) => res * 0.01);

  console.log(getPercent('50%')); // 0.5 
~~~