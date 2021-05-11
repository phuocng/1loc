---
title: Check if a value is base64 encoded
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
const isBase64 = value => /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(value);
```