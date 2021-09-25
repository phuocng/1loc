---
title: Convert a string to URL slug
category: String
---

```js
const slugify = (string) =>
    string
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '');

// Example
slugify('Chapter One: Once upon a time...'); // 'chapter-one-once-upon-a-time'
```
