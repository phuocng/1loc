---
title: Insert given HTML after an element
category: DOM
---

**JavaScript version**

```js
const insertHtmlAfter = (html, ele) => ele.insertAdjacentHTML('afterend', html);
```

**TypeScript version**

```js
const insertHtmlAfter = (html: string, ele: Element): void => ele.insertAdjacentHTML('afterend', html);
```
