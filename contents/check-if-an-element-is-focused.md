---
layout: layouts/post.njk
title: Check if an element is focused
category: DOM
---

**JavaScript version**

```js
const hasFocus = (ele) => ele === document.activeElement;
```

**TypeScript version**

```js
const hasFocus = (ele: Node): boolean => ele === document.activeElement;
```
