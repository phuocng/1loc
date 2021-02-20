~~~ javascript
const getNthItems = (arr, nth) => arr.filter((_, i) => i % nth === nth - 1);

// Examples
getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);    // [2, 4, 6, 8]
getNthItems([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);    // [3, 6, 9]
~~~