---
title: Repeat a string
category: String
---

**JavaScript version**

```js
const repeat = (str, numberOfTimes) => str.repeat(numberOfTimes);

// Or
const repeat = (str, numberOfTimes) => Array(numberOfTimes + 1).join(str);
```

**TypeScript version**

```js
const repeat = (str: string, numberOfTimes: number): string => str.repeat(numberOfTimes);

// Or
const repeat = (str: string, numberOfTimes: number): string => Array(numberOfTimes + 1).join(str);
```
