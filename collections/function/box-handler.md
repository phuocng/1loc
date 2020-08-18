~~~ javascript
const boxHandler = x => ({ next: f => boxHandler(f(x)), done: f => f(x) });

// Example 1
const getPercentNumber = str => boxHandler(str).next(str => str.replace(/\%/, '')).next(str => parseFloat(str)).done(res => res * 0.01);

getPercentNumber('50%');    // 0.5

// Example 2
const getMoney = (price) => Number.parseFloat(price.replace(/\$/, ''));
const getPercent = (percent) => Number.parseFloat(percent.replace(/\%/)) * 0.01;

const getDiscountPrice = (price, discount) => boxHandler(getMoney(price)).done(cents => boxHandler(getPercent(discount)).next(save => cents - (cents * save))).done(res => res);

getDiscountPrice('$6.00', '20%');    // 4.8
~~~