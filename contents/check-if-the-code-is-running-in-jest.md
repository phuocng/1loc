---
layout: layouts/post.njk
title: Check if the code is running in Jest
category: Misc
---

**JavaScript version**

```js
const isRunningInJest = typeof process !== 'undefined' && process.env.JEST_WORKER_ID !== undefined;
```

**TypeScript version**

```js
const isRunningInJest: boolean = typeof process !== 'undefined' && process.env.JEST_WORKER_ID !== undefined;
```
