---
title: Insert given HTML before an element
category: DOM
---

**JavaScript version**

```js
const insertHtmlBefore = (html, ele) => ele.insertAdjacentHTML('beforebegin', html);
```

**TypeScript version**

```js
const insertHtmlBefore = (html: string, ele: Element): void => ele.insertAdjacentHTML('beforebegin', html);
```
