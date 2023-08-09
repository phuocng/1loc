---
layout: layouts/post.njk
title: Check if a string contains lower case characters
category: Validator
---

**JavaScript version**

```js
const containsLowerCase = (str) => str !== str.toUpperCase();
```

**TypeScript version**

```js
const containsLowerCase = (str: string): boolean => str !== str.toUpperCase();
```

**Examples**

```js
containsLowerCase('Hello World'); // true
containsLowerCase('HELLO WORLD'); // false
```
