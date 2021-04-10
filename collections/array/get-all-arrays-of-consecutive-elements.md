~~~ javascript
const getConsecutiveArrays = (arr, size) => size > arr.length ? [] : arr.slice(size - 1).map((_, i) => arr.slice(i, size + i));

// Examples
getConsecutiveArrays([1, 2, 3, 4, 5], 2);   // [[1, 2], [2, 3], [3, 4], [4, 5]]
getConsecutiveArrays([1, 2, 3, 4, 5], 3);   // [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
getConsecutiveArrays([1, 2, 3, 4, 5], 6);   // []
~~~