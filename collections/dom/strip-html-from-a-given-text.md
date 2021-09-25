---
title: Strip HTML from a given text
category: DOM
---

```js
const stripHtml = (html) => new DOMParser().parseFromString(html, 'text/html').body.textContent || '';
```
