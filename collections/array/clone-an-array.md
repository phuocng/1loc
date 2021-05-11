---
title: Clone an array
category: Array
tags:
  - posts
layout: layouts/post.njk
---

```js
// `arr` is an array
const clone = arr => arr.slice(0);

// Or
const clone = arr => [...arr];

// Or
const clone = arr => Array.from(arr);

// Or
const clone = arr => arr.map(x => x);

// Or
const clone = arr => JSON.parse(JSON.stringify(arr));

// Or
const clone = arr => arr.concat([]);
```