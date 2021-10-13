---
title: Replace all tab characters with spaces
category: String
---

**JavaScript version**

```js
const replace = (str, numSpaces = 4) => str.replaceAll('\t', ' '.repeat(numSpaces));
```

**TypeScript version**

```js
const replace = (str: string, numSpaces = 4): string => str.replaceAll('\t', ' '.repeat(numSpaces));
```
