---
title: Check if a value is a generator function
category: Function
---

**JavaScript version**

```js
const isGeneratorFunction = (v) => Object.prototype.toString.call(v) === '[object GeneratorFunction]';
```

**Examples**

```js
isGeneratorFunction(function () {}); // false
isGeneratorFunction(function* () {}); // true
```
