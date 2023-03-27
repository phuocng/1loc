---
layout: layouts/post.njk
title: Pluralisse a string
category: String
---

**JavaScript version**

```js
const pluralise = (items, singular, plural) => items.length > 1 || items.length === 0 ? plural : singular;
```

**TypeScript version**

```ts
const pluralise = (items: Array, singular: string, plural: string) => items.length > 1 || items.length === 0 ? plural : singular;
```

**Examples**

```js
pluralise([0], 'item', 'items'); // 'item'
pluralise([0, 1, 2], 'item', 'items'); // 'items'
```
