---
title: Check if a value is an object
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
const isObject = v => (v !== null && typeof v === 'object');

// Examples
isObject(null);             // false
isObject('hello world');    // false

isObject({});               // true
isObject([]);               // true 
```