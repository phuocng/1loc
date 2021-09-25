---
title: Get a random item from an array
category: Random
---

```js
const randomItem = (arr) => arr[(Math.random() * arr.length) | 0];
```
