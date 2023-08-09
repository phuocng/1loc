---
layout: layouts/post.njk
title: Decode HTML entities
category: String
---

**JavaScript version**

```js
const decodeHtmlEntities = (str) => str.replace(/&#(\w+)(^\w|;)?/g, (_, dec) => String.fromCharCode(dec));
```

**TypeScript version**

```js
const decodeHtmlEntities = (str: string): string => str.replace(/&#(\w+)(^\w|;)?/g, (_, dec) => String.fromCharCode(dec));
```
