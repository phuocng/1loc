---
title: Trim slashes at the beginning and the end of a string
category: String
---

**JavaScript version**

```js
const trimSlashes = (str) => str.replace(/^\/+|\/+$/g, '');

// Or
const trimSlashes = (str) => str.split('/').filter(Boolean).join('/');
```

**TypeScript version**

```js
const trimSlashes = (str: string): string => str.replace(/^\/+|\/+$/g, '');

// Or
const trimSlashes = (str: string): string => str.split('/').filter(Boolean).join('/');
```

**Examples**

```js
trimSlashes('//hello/world///'); // hello/world
```
