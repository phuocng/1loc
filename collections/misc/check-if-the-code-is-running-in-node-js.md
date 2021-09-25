---
title: Check if the code is running in NodeJS
category: Misc
---

```js
const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
```
