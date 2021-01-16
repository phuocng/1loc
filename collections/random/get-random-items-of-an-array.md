~~~ javascript
const randomItems = (arr, count) => arr.concat().reduce((p, _, __, arr) => (p[0] < count) ? [p[0] + 1, p[1].concat(arr.splice(Math.random() * arr.length | 0, 1))] : p, [0, []])[1];

// Examples
randomItems([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);                        // [4, 8, 5]
randomItems(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 4);     // ['e', 'c', 'h', 'j']
~~~