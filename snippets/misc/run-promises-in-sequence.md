---
title: Run Promises in sequence
category: Misc
---

**JavaScript version**

```js
// `promises` is an array of `Promise`
const run = (promises) => promises.reduce((p, c) => p.then((rp) => c.then((rc) => [...rp, rc])), Promise.resolve([]));
```

**TypeScript version**

```js
const run = (promises: Promise<any>[]): Promise<any> => promises.reduce((p, c) => p.then((rp) => c.then((rc) => [...rp, rc])), Promise.resolve([]));
```

**Examples**

```js
run(promises).then((results) => {
    // `results` is an array of promise results in the same order
});
```
