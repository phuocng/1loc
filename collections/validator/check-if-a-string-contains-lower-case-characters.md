---
title: Check if a string contains lower case characters
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
const containsLowerCase = str => str !== str.toUpperCase();

// Examples
containsLowerCase('Hello World');   // true
containsLowerCase('HELLO WORLD');   // false
```