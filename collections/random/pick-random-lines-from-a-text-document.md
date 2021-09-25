---
title: Pick random lines from a text document
category: Random
---

```js
const randomLines = (str, count) =>
    str
        .split(/\r?\n/)
        .reduce(
            (p, _, __, arr) =>
                p[0] < count ? [p[0] + 1, p[1].concat(arr.splice((Math.random() * arr.length) | 0, 1))] : p,
            [0, []]
        )[1];

// Example
randomLines(
    `one
two
three
four
five`,
    2
);

// ['one', 'four']
```
