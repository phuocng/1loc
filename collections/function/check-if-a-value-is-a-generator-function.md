---
title: Check if a value is a generator function
category: Function
---

```js
const isGeneratorFunction = (v) => Object.prototype.toString.call(v) === '[object GeneratorFunction]';

// Examples
isGeneratorFunction(function () {}); // false
isGeneratorFunction(function* () {}); // true
```
