# Favorite single line of code

What's your favorite JavaScript single LOC (line of code)? Let me know!

## Array

* Empty an array

~~~ javascript
const empty = arr => arr.length = 0;

// Or
const empty = arr => arr = [];
~~~

* Find the maximum item of an array

~~~ javascript
const max = arr => Math.max(...arr);
~~~

* Find the minimum item of an array

~~~ javascript
const min = arr => Math.min(...arr);
~~~

* Get a random item from an array

~~~ javascript
const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];
~~~

* Get the average of an array

~~~ javascript
const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
~~~

* Get the sum of array of numbers

~~~ javascript
const sum = arr => arr.reduce((a, b) => a + b, 0);
~~~

* Get the unique values of an array

~~~ javascript
const unique = arr => [...new Set(arr)];

// Or
const unique = arr => arr.filter((el, i, array) => array.indexOf(el) === i);
~~~

## Misc

* Create an empty map that doesn't have properties

~~~ javascript
// `map` doesn't have any properties
const map = Object.create(null);

// The following `map` has \`__proto__\` property
// const map = {};
~~~

* Generate a random number in given range

~~~ javascript
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
~~~

* Swap two variables

~~~ javascript
[a, b] = [b, a];
~~~
