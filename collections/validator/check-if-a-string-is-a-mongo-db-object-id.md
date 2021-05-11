---
title: Check if a string is a MongoDB ObjectId
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
const isMongoId = str => str.length === 24 && /^[A-F0-9]+$/i.test(str);

// Or
const isMongoId = str => str.length === 24 && str.split('').every(c => '0123456789ABCDEFabcdef'.indexOf(c) !== -1);
```