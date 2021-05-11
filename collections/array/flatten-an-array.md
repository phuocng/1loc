---
title: Flatten an array
category: Array
tags:
  - posts
layout: layouts/post.njk
---

```js
const flat = arr => [].concat.apply([], arr.map(a => Array.isArray(a) ? flat(a) : a));
// Or
const flat = arr => arr.reduce((a, b) => Array.isArray(b) ? [...a, ...flat(b)] : [...a, b], []);

// Or
// See the browser compatibility at https://caniuse.com/#feat=array-flat
const flat = arr => arr.flat();

// Example
flat(['cat', ['lion', 'tiger']]);   // ['cat', 'lion', 'tiger']
```