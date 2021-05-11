---
title: Check if a value is a business identifier code
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
const isBIC = value => /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(value);
```