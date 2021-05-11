---
title: Check if a value is base32 encoded
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
const isBase32 = value => value.length % 8 === 0 && /^[A-Z2-7]+=*$/.test(value);
```