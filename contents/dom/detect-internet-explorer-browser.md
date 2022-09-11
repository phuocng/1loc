---
layout: layouts/post.njk
title: Detect Internet Explorer browser
category: DOM
---

**JavaScript version**

```js
const isIE = !!document.documentMode;
```

**TypeScript version**

```js
const isIE = !!(document as any).documentMode;
```
