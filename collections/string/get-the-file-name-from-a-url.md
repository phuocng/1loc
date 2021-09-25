---
title: Get the file name from a URL
category: String
---

```js
const fileName = (url) => url.substring(url.lastIndexOf('/') + 1);

// Example
fileName('http://domain.com/path/to/document.pdf'); // 'document.pdf'
```
