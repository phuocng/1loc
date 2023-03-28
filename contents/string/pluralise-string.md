---
layout: layouts/post.njk
title: Pluralize a string
category: String
---

**JavaScript version**

```js
const pluralize = (items, singular, plural) => items.length > 1 || items.length === 0 ? plural : singular;
```

**TypeScript version**

```ts
const pluralize = (items: Array, singular: string, plural: string) : String => items.length > 1 || items.length === 0 ? plural : singular;
```

**Examples**

```js
pluralize([0], 'item', 'items'); // 'item'
pluralize([0, 1, 2], 'item', 'items'); // 'items'
```
