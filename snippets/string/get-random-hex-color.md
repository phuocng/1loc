---
title: Get random hex color
category: String
---

**JavaScript version**

```js
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`

```

**TypeScript version**

```js
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`
```

**Examples**

```js
randomHex()
```
