~~~ javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let concatAndDeDuplicate = (...arrs) => [ ...new Set( [].concat(...arrs) ) ];

// Examples
concatAndDeDuplicate(arr1, arr2, [7, 8, 9, 2, 4]);
// [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
~~~
