~~~ javascript
// space: O(n)
// time: O(n)
const getIntersection = (...arr) => [...(arr.flat().reduce((map, v) => map.set(v, (map.get(v) || 0) + 1), new Map()))].reduce((acc, [v, count]) => void (count === arr.length && acc.push(v)) || acc, []);

// getIntersection([1, 2, 3], [2, 3, 4, 5]) returns [2, 3]
// getIntersection([1, 2, 3], [2, 3, 4, 5], [1, 3, 5]) returns [3]

// Other method
const array1 = [1, 2, 3, 6, 8];
const array2 = [0, 2, 4, 5, 6];

const duplicateValues = [...new Set(array1)].filter(element => array2.includes(element));
// console.log(duplicateValues) -> [2, 6]
~~~