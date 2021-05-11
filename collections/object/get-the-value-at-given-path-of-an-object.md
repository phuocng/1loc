---
title: Get the value at given path of an object
category: Object
tags:
  - posts
layout: layouts/post.njk
---

```js
const getValue = (path, obj) => path.split('.').reduce((acc, c) => acc && acc[c], obj);

// Example
getValue('a.b', { a: { b: 'Hello World' } });   // 'Hello World';
```