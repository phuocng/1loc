~~~ javascript
// Add an element to an array only if it is not already added
const push = (arr, el) => !arr.includes(el) && arr.push(el);

const arr = ['a', 'b', 'c'];
push(arr, 'a') // Returns false
push(arr, 'd') // Returns true and adds the element

// Version supporting objects
const push = (arr, el) => !arr.some(JSON.stringify(el)) && arr.push(el);
const arr = [
  {
    name: 'a',
    value: 'b',
  },
  {
    name: 'c',
    value: 'd',
  }
];
push(arr, {name: 'a', value: 'b'}); // Returns undefined and does not add object to array
push(arr, {name: 'e', value: 'f'}); // Returns the new array length and add object to array
~~~
