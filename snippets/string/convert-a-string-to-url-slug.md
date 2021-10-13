---
title: Convert a string to URL slug
category: String
---

**JavaScript version**

```js
const slugify = (str) =>
    str
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
```

**TypeScript version**

```js
const slugify = (str: string): string =>
    str
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');
```

**Examples**

```js
slugify('Chapter One: Once upon a time...'); // 'chapter-one-once-upon-a-time'
```
