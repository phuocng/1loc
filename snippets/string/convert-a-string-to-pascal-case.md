---
title: Convert a string to PascalCase
category: String
---

**JavaScript version**

```js
const toPascalCase = (str) => (str.match(/[a-zA-Z0-9]+/g) || []).map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');
```

**TypeScript version**

```js
const toPascalCase = (str: string): string => (str.match(/[a-zA-Z0-9]+/g) || []).map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');
```

**Examples**

```js
toPascalCase('hello world'); // 'HelloWorld'
toPascalCase('hello.world'); // 'HelloWorld'
toPascalCase('foo_bar-baz'); // FooBarBaz
```
