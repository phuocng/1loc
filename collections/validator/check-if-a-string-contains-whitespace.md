---
title: Check if a string contains whitespace
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
const containsWhitespace = str => str => /\s/.test(str);

// Example
containsWhitespace('hello world');      // true
```