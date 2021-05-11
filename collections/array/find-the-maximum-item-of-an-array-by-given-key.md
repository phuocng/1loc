---
title: Find the maximum item of an array by given key
category: Array
tags:
  - posts
layout: layouts/post.njk
---

```js
const maxBy = (arr, key) => arr.reduce((a, b) => a[key] >= b[key] ? a : b, {});

// Example
const people = [
    { name: 'Bar', age: 24 },
    { name: 'Baz', age: 32 },
    { name: 'Foo', age: 42 },
    { name: 'Fuzz', age: 36 },
];
maxBy(people, 'age');   // { name: 'Foo', age: 42 }
```