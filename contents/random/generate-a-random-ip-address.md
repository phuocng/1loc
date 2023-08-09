---
layout: layouts/post.njk
title: Generate a random IP address
category: Random
---

**JavaScript version**

```js
const randomIp = () =>
    Array(4)
        .fill(0)
        .map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0))
        .join('.');
```

**TypeScript version**

```js
const randomIp = (): string =>
    Array(4)
        .fill(0)
        .map((_, i) => Math.floor(Math.random() * 255) + (i === 0 ? 1 : 0))
        .join('.');
```

**Examples**

```js
randomIp(); // 175.89.174.131
```
