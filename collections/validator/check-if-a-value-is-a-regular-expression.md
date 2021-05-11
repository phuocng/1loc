---
title: Check if a value is a regular expression
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
const isRegExp = value => Object.prototype.toString.call(value) === '[object RegExp]';
```