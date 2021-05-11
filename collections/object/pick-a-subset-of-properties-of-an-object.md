---
title: Pick a subset of properties of an object
category: Object
tags:
  - posts
layout: layouts/post.njk
---

```js
const pick = (obj, keys) => Object.keys(obj).filter(k => keys.includes(k)).reduce((res, k) => Object.assign(res, {[k]: obj[k]}), {});

// Example
pick({ a: '1', b: '2', c: '3' }, ['a', 'b']);   // { a: '1', b: '2' }
```