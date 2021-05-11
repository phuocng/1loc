---
title: Get the file name from a URL
category: String
tags:
  - posts
layout: layouts/post.njk
---

```js
const fileName = url => url.substring(url.lastIndexOf('/') + 1);

// Example
fileName('http://domain.com/path/to/document.pdf');     // 'document.pdf'
```