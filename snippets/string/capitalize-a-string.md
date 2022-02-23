---
title: Capitalize a string
category: String
---

**JavaScript version**

```js
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// Or
const capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`;

// Or
const capitalize = (str) => str.replace(/^([a-z])/, (first) => first.toUpperCase());
```

**TypeScript version**

```js
const capitalize = (str: string): string => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// Or
const capitalize = ([first, ...rest]: string): string => `${first.toUpperCase()}${rest.join('')}`;

const capitalize = (str: string): string => str.replace(/^([a-z])/, (first) => first.toUpperCase());
```

**Examples**

```js
capitalize('hello world'); // 'Hello world'
```
