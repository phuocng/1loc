---
title: Convert a string to PascalCase
category: String
---

```js
const toPascalCase = (str) =>
    (str.match(/[a-zA-Z0-9]+/g) || []).map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');

// Examples
toPascalCase('hello world'); // 'HelloWorld'
toPascalCase('hello.world'); // 'HelloWorld'
toPascalCase('foo_bar-baz'); // FooBarBaz
```
