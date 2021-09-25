---
title: Detect dark mode
category: Misc
---

```js
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
```
