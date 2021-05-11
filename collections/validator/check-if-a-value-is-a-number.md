---
title: Check if a value is a number
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
const isNumber = value => !isNaN(parseFloat(value)) && isFinite(value);
```