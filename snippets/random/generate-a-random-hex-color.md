---
title: Generate a random hex color
category: Random
---

**JavaScript version**

```js
const randomColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;

// Or
const randomColor = () => `#${(~~(Math.random() * (1 << 24))).toString(16)}`;
```

**TypeScript version**

```js
const randomColor = (): string => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;

// Or
const randomColor = (): string => `#${(~~(Math.random() * (1 << 24))).toString(16)}`;
```
