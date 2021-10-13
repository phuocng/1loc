---
title: Convert a letter to associate emoji
category: String
---

**JavaScript version**

```js
const letterToEmoji = (c) => String.fromCodePoint(c.toLowerCase().charCodeAt(0) + 127365);
```

**TypeScript version**

```js
const letterToEmoji = (c: string): string => String.fromCodePoint(c.toLowerCase().charCodeAt(0) + 127365);
```

**Examples**

```js
letterToEmoji('a'); // 🇦
letterToEmoji('b'); // 🇧
```
