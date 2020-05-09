~~~ javascript
const array = [ 1, 2, 3, 1, 2, 3, 4, 4, 4];

// using Set
[...new Set(array)];

//using Filter
array.filter((element, index) => array.indexOf(element) === index);

//using Reduce
array.reduce((unique, element) => 
    unique.includes(element) ? unique : [...unique, element], []);
~~~