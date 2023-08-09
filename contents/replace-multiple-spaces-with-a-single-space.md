---
layout: layouts/post.njk
title: Replace multiple spaces with a single space
category: String
---

**JavaScript version**

```js
// Replace spaces, tabs and new line characters
const replaceSpaces = (str) => str.replace(/\s\s+/g, ' ');

// Only replace spaces
const replaceOnlySpaces = (str) => str.replace(/  +/g, ' ');
```

**TypeScript version**

```js
const replaceSpaces = (str: string): string => str.replace(/\s\s+/g, ' ');

const replaceOnlySpaces = (str: string): string => str.replace(/  +/g, ' ');
```

**Examples**

```js
replaceSpaces('this\n   is     \ta    \rmessage'); // 'this is a message'
```
