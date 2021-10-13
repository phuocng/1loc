---
title: Detect dark mode
category: Misc
---

**JavaScript version**

```js
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
```

**TypeScript version**

```js
const isDarkMode: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
```
