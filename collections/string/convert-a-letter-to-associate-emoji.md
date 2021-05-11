---
title: Convert a letter to associate emoji
category: String
tags:
  - posts
layout: layouts/post.njk
---

```js
const letterToEmoji = c => String.fromCodePoint(c.toLowerCase().charCodeAt() + 127365);

// Examples
letterToEmoji('a');     // 🇦
letterToEmoji('b');     // 🇧
```