~~~ javascript
const removeIndex = (arr, index) => arr.filter((_, i) => i !== index);

// Example
const arr = ['a', 'b', 'c']
const index = 1
removeIndex(arr, index) // ['a', 'c']
~~~
