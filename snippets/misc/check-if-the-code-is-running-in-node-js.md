---
title: Check if the code is running in NodeJS
category: Misc
---

**JavaScript version**

```js
const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
```

**TypeScript version**

```js
const isNode: boolean = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
```
