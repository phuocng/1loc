// space: O(n)
// time: O(n)
const intersectionSetOfArrays = (...arrays) => [...(arrays.flat().reduce((map, v) => map.set(v, (map.get(v) || 0) + 1), new Map()))].reduce((acc, [v, count]) => void (count === arrays.length && acc.push(v)) || acc, []);
