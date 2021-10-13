---
title: Check if a value is a plain object
category: Validator
---

**JavaScript version**

```js
const isPlainObject = (v) => !!v && typeof v === 'object' && (v.__proto__ === null || v.__proto__ === Object.prototype);
```

**TypeScript version**

```js
const isPlainObject = (v: any): boolean => !!v && typeof v === 'object' && (v.__proto__ === null || v.__proto__ === Object.prototype);
```

**Examples**

```js
isPlainObject(null); // false
isPlainObject('hello world'); // false
isPlainObject([]); // false
isPlainObject(Object.create(null)); // false
isPlainObject(function () {}); // false

isPlainObject({}); // true
isPlainObject({ a: '1', b: '2' }); // true
```
