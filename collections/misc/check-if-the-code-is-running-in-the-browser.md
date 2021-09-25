---
title: Check if the code is running in the browser
category: Misc
---

```js
const isBrowser = typeof window === 'object' && typeof document === 'object';
```
