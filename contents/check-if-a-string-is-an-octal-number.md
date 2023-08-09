---
layout: layouts/post.njk
title: Check if a string is an octal number
category: Validator
---

**JavaScript version**

```js
const isOctal = (str) => /^(0o)?[0-7]+$/i.test(str);
```

**TypeScript version**

```js
const isOctal = (str: string): boolean => /^(0o)?[0-7]+$/i.test(str);
```
