---
title: Convert camelCase to kebab-case and vice versa
category: String
---

```js
const kebabToCamel = (str) => str.replace(/-./g, (m) => m.toUpperCase()[1]);

const camelToKebab = (str) => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

// Examples
kebabToCamel('background-color'); // 'backgroundColor'
camelToKebab('backgroundColor'); // 'background-color'
```
