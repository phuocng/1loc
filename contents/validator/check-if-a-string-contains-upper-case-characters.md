---
layout: layouts/post.njk
title: Check if a string contains upper case characters
category: Validator
---

**JavaScript version**

```js
const containsUpperCase = (str) => str !== str.toLowerCase();
```

**TypeScript version**

```js
const containsUpperCase = (str: string): boolean => str !== str.toLowerCase();
```

**Examples**

```js
containsUpperCase('Hello World'); // true
containsUpperCase('hello world'); // false
```
