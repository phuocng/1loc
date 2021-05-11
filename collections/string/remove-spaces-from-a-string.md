---
title: Remove spaces from a string
category: String
tags:
  - posts
layout: layouts/post.njk
---

```js
const removeSpaces = str => str.replace(/\s/g, '');

// Example
removeSpaces('hel lo wor ld');      // 'helloworld'
```