---
title: Check if user scrolls to the bottom of the page
category: DOM
---

**JavaScript version**

```js
const isAtBottom = () => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;
```

**TypeScript version**

```js
const isAtBottom = (): boolean => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;
```
