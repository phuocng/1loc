---
layout: layouts/post.njk
title: Get a random item from an array
category: Random
---

**JavaScript version**

```js
const randomItem = (arr) => arr[(Math.random() * arr.length) | 0];
```

**TypeScript version**

```js
const randomItem = <T,_>(arr: T[]): T => arr[(Math.random() * arr.length) | 0];
```
