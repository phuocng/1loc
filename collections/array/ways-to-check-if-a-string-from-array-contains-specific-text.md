~~~ javascript
const example = ['+441234', '+43212', '+5532323', '+32323', '+55111', '11+551'];
const exampleTwo = ['dog', 'cat', '4caterpillar', 'categorize'];

// Check if any value is in string
console.log(example.filter(el => el.includes('+55')))  // ["+5532323", "+55111", "11+551"]
console.log(exampleTwo.filter(el => el.includes('cat'))) // ["cat", "4caterpillar", "categorize"]

// Check if a string starts with some value
console.log(example.filter(el => !el.indexOf('+55'))) // ["+5532323", "+55111"]
console.log(exampleTwo.filter(el => !el.indexOf('cat'))) // ["cat", "categorize"]

// Check if a string starts with some value
console.log(example.filter(el => el.startsWith('+55'))) // ["+5532323", "+55111"]
console.log(exampleTwo.filter(el => el.startsWith('cat'))) // ["cat", "categorize"]
~~~
