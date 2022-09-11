---
layout: layouts/post.njk
title: Empty an array
category: Array
---

**JavaScript version**

```js
const empty = (arr) => (arr.length = 0);

// Or
arr = [];
```

**TypeScript version**

```js
const empty = <T,_>(arr: T[]) => (arr.length = 0);

// Or
arr = [];
```
