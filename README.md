# Favorite single line of code

What's your favorite JavaScript single LOC (line of code)? Let me know!

## Array

* Create an array of numbers in given range

~~~ javascript
const range = (min, max) => Array(max - min + 1).fill(0).map((_, i) => max - min + i);
// range(5, 10) === [5, 6, 7, 8, 9, 10]
~~~

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

## Date time

* Check if a year is leap year

~~~ javascript
const isLeapYear = year => (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));

// Or
// Get the number of days in February
const isLeapYear = year => new Date(year, 1, 29).getDate() === 29;
~~~

* Get the number of days in given month

~~~ javascript
// `month` is zero-based index
const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
~~~

## DOM

* Check if an element is a descendant of another

~~~ javascript
const isDescendant = (child, parent) => parent.contains(child);
~~~

* Check if an element is focused

~~~ javascript
const hasFocus = ele => (ele === document.activeElement);
~~~

* Detect macOS browser

~~~ javascript
const isMacBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
~~~

* Get all siblings of an element

~~~ javascript
const siblings = ele => [].slice.call(ele.parentNode.children).filter((child) => (child !== ele));
~~~

* Go back to the previous page

~~~ javascript
history.back();

// Or
history.go(-1);
~~~

* Insert an element after other one

~~~ javascript
const insertAfter = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle.nextSibling);

// Or
const insertAfter = (ele, anotherEle) => anotherEle.insertAdjacentElement('afterend', ele);
~~~

* Insert an element before other one

~~~ javascript
const insertBefore = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle);

// Or
const insertBefore = (ele, anotherEle) => anotherEle.insertAdjacentElement('beforebegin', ele);
~~~

* Insert given HTML after an element

~~~ javascript
const insertHtmlAfter = (html, ele) => ele.insertAdjacentHTML('afterend', html);
~~~

* Insert given HTML before an element

~~~ javascript
const insertHtmlBefore = (html, ele) => ele.insertAdjacentHTML('beforebegin', html);
~~~

* Redirect to another page

~~~ javascript
const goTo = url => location.href = url;
~~~

* Reload the current page

~~~ javascript
const reload = () => location.reload();

// Or
const reload = () => (location.href = location.href);
~~~

* Replace an element

~~~ javascript
const replace = (ele, newEle) => ele.parentNode.replaceChild(newEle, ele);
~~~

* Scroll to top of the page

~~~ javascript
const goToTop = () => window.scrollTo(0, 0);
~~~

* Strip HTML from a given text

~~~ javascript
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
~~~

* Toggle an element

~~~ javascript
const toggle = ele => (ele.style.display = (ele.style.display === 'none') ? 'block' : 'none');
~~~

## String

* Capitalize a string

~~~ javascript
const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
// capitalize('hello world') === 'Hello world'
~~~

* Get the file extension from a file name

~~~ javascript
const ext = fileName => fileName.split('.').pop();
~~~

* Get the file name from an URL

~~~ javascript
const fileName = url => url.substring(url.lastIndexOf('/') + 1);
// fileName('http://domain.com/path/to/document.pdf') === 'document.pdf'
~~~

* Reverse a string

~~~ javascript
const reverse = str => str.split('').reverse().join('');

// Or
const reverse = str => [...str].reverse().join('');

// Or
const reverse = str => str.split('').reduce((rev, char)=> `${char}${rev}`, '');

// Or
const reverse = str => (str === '') ? '' : `${reverse(str.substr(1))}${str.charAt(0)}`;

// reverse('hello world') === 'dlrow olleh'
~~~

## Misc

* Check if an object is empty

~~~ javascript
const isEmpty = obj => Object.keys(obj).length === 0 && obj.constructor === Object;

// Or
const isEmpty = obj => JSON.stringify(obj) === '{}';
~~~

* Create an empty function

~~~ javascript
const noop = () => {};
~~~

* Create an empty map that doesn't have properties

~~~ javascript
// `map` doesn't have any properties
const map = Object.create(null);

// The following `map` has `__proto__` property
// const map = {};
~~~

* Convert a string to number

~~~ javascript
const toNumber = str => +str;
// toNumber('42') === 42
~~~

* Generate a random number in given range

~~~ javascript
const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
~~~

* Swap two variables

~~~ javascript
[a, b] = [b, a];
~~~
