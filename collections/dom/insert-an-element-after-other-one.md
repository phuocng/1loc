---
title: Insert an element after other one
category: DOM
---

```js
const insertAfter = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle.nextSibling);

// Or
const insertAfter = (ele, anotherEle) => anotherEle.insertAdjacentElement('afterend', ele);
```
