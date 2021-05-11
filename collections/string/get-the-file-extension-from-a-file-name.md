---
title: Get the file extension from a file name
category: String
tags:
  - posts
layout: layouts/post.njk
---

```js
const ext = fileName => fileName.split('.').pop();
```