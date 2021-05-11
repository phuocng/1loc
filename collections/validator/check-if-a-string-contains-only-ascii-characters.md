---
title: Check if a string contains only ASCII characters
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
const isAscii = str => /^[\x00-\x7F]+$/.test(str);
```