---
title: Convert camelCase to kebab-case and vice versa
category: String
---

**JavaScript version**

```js
const kebabToCamel = (str) => str.replace(/-./g, (m) => m.toUpperCase()[1]);

const camelToKebab = (str) => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
```

**TypeScript version**

```js
const kebabToCamel = (str: string): string => str.replace(/-./g, (m) => m.toUpperCase()[1]);

const camelToKebab = (str: string): string => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
```

**Examples**

```js
kebabToCamel('background-color'); // 'backgroundColor'
camelToKebab('backgroundColor'); // 'background-color'
```
