~~~ javascript
const getLast = arr => Array.isArray(arr) ? arr[arr.length - 1] : undefined;
// globalArr = [1,2,3,4,5,6];
// const lastItem = getLast(globalArr); it returns 6
// globalArr is still [1,2,3,4,5,6];
~~~
