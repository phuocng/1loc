---
layout: layouts/post.njk
title: Add an ordinal suffix to a number
category: Number
---

**JavaScript version**

```js
// `n` is a position number
const addOrdinal = (n) => `${n}${['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th'}`;
```

**TypeScript version**

```js
const addOrdinal = (n: number): string => `${n}${['st', 'nd', 'rd'][((((n + 90) % 100) - 10) % 10) - 1] || 'th'}`;
```

**Examples**

```js
addOrdinal(1); // '1st'
addOrdinal(2); // '2nd'
addOrdinal(3); // '3rd'
addOrdinal(11); // '11th'
addOrdinal(12); // '13th'
addOrdinal(13); // '13th'
```
