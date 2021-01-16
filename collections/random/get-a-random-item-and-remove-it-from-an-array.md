~~~ javascript
const randomItem = arr => arr.splice((Math.random() * arr.length) | 0, 1);

// Example
const arr = [1, 3, 5, 7, 9];
randomItem(arr);    // 7
                    // arr = [1, 3, 5, 9]
~~~