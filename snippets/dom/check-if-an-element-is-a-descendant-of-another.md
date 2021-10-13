---
title: Check if an element is a descendant of another
category: DOM
---

**JavaScript version**

```js
const isDescendant = (child, parent) => parent.contains(child);
```

**TypeScript version**

```js
const isDescendant = (child: Node, parent: Node): boolean => parent.contains(child);
```
