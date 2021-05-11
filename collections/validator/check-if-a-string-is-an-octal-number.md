---
title: Check if a string is an octal number
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
const isOctal = str => /^(0o)?[0-7]+$/i.test(str);
```