---
title: Find the length of the longest string in an array
category: Array
---

**JavaScript version**

```js
const findLongest = (words) => Math.max(...words.map((el) => el.length));
```

**TypeScript version**

```js
const findLongest = (words: string[]): number => Math.max(...words.map((el) => el.length));
```

**Example**

```js
findLongest(['always', 'look', 'on', 'the', 'bright', 'side', 'of', 'life']); // 6
```
