---
title: Check if an object is a Promise
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
const isPromise = obj => !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
```