---
title: Replace all tab characters with spaces
category: String
---

```js
const replace = (str, numSpaces = 4) => str.replaceAll('\t', ' '.repeat(numSpaces));
```
