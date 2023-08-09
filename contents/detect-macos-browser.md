---
layout: layouts/post.njk
title: Detect macOS browser
category: DOM
---

**JavaScript version**

```js
const isMacBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
```

**TypeScript version**

```js
const isMacBrowser: boolean = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
```
