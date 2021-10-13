---
title: Check if an array is not empty
category: Validator
---

**JavaScript version**

```js
const isNotEmpty = (arr) => Array.isArray(arr) && Object.keys(arr).length > 0;
```

**TypeScript version**

```js
const isNotEmpty = (arr: any): boolean => Array.isArray(arr) && Object.keys(arr).length > 0;
```

**Examples**

```js
isNotEmpty([]); // false
isNotEmpty([1, 2, 3]); // true
```
