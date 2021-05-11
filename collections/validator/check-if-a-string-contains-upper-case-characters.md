---
title: Check if a string contains upper case characters
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
const containsUpperCase = str => str !== str.toLowerCase();

// Examples
containsUpperCase('Hello World');   // true
containsUpperCase('hello world');   // false
```