---
layout: layouts/post.njk
title: Check if a string contains only letters
category: Validator
---

**JavaScript version**

```js
const isAlpha = (str) => /^[A-Z]+$/i.test(str);
```

**TypeScript version**

```js
const isAlpha = (str: string): boolean => /^[A-Z]+$/i.test(str);
```

**Examples**

```js
isAlpha('helloworld'); // true
isAlpha('HelloWorld'); // true
isAlpha('hello world'); // false
isAlpha('0123456789'); // false
```
