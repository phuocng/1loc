---
title: Copy content to clipboard
category: String
---

**JavaScript version**

```js
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
```

**TypeScript version**

```js
const copyToClipboard = (text:any) => navigator.clipboard.writeText(text);
```

**Examples**

```js
copyToClipboard('12312);
```
