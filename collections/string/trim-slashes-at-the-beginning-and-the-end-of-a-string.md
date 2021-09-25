---
title: Trim slashes at the beginning and the end of a string
category: String
---

```js
const trimSlashes = (str) => str.replace(/^\/+|\/+$/g, '');

// Or
const trimSlashes = (str) => str.split('/').filter(Boolean).join('/');

// Example
trimSlashes('//hello/world///'); // hello/world
```
