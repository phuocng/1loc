---
title: Generate a random string using Node crypto module
category: Random
---

```js
const randomStr = () => require('crypto').randomBytes(32).toString('hex');
```
