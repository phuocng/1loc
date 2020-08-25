~~~ javascript
const repeat = (str, numberOfTimes) => str.repeat(numberOfTimes);

// Or
const repeat = (str, numberOfTimes) => Array(numberOfTimes + 1).join(str);
~~~
