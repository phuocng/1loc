---
title: Strip HTML from a given text
category: DOM
---

**JavaScript version**

```js
const stripHtml = (html) => new DOMParser().parseFromString(html, 'text/html').body.textContent || '';
```

**TypeScript version**

```js
const stripHtml = (html: string): string => new DOMParser().parseFromString(html, 'text/html').body.textContent || '';
```
