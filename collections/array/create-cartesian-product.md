~~~ javascript
const cartesian = (...sets) => sets.reduce((acc, set) => acc.flatMap((x) => set.map((y) => [...x, y])), [[]]);

// Example
cartesian([1, 2], [3, 4]);   // [ [1, 3], [1, 4], [2, 3], [2, 4] ]

/*
       3       4
   ---------------
1 | [1, 3]  [1, 4]
  |
2 | [2, 3]  [2, 4]

*/
~~~
