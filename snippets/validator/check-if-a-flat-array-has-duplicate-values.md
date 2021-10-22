---
title: Check if a flat array has duplicate values
category: Validator
---

**JavaScript version**

```js
const hasDuplicateValues = (arr) => new Set(arr).size !== arr.length;
```

**TypeScript version**

```js
const hasDuplicateValues = <T,_>(arr: T[]): boolean => new Set(arr).size !== arr.length;
```

**Examples**

```js
hasDuplicateValues(['h', 'e', 'l', 'l', 'o']); // true
hasDuplicateValues(['w', 'o', 'r', 'd']); // false
```
