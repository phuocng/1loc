---
layout: layouts/post.njk
title: Generate a random sign
category: Random
---

**JavaScript version**

```js
const randomSign = () => (Math.random() >= 0.5 ? 1 : -1);
```

**TypeScript version**

```js
const randomSign = (): number => (Math.random() >= 0.5 ? 1 : -1);
```
