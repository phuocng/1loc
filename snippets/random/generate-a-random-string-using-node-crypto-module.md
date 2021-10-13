---
title: Generate a random string using Node crypto module
category: Random
---

**JavaScript version**

```js
const randomStr = () => require('crypto').randomBytes(32).toString('hex');
```

**TypeScript version**

```js
const randomStr = (): string => require('crypto').randomBytes(32).toString('hex');
```
