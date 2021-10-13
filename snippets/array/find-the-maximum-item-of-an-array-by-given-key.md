---
title: Find the maximum item of an array by given key
category: Array
---

**JavaScript version**

```js
const maxBy = (arr, key) => arr.reduce((a, b) => (a[key] >= b[key] ? a : b), {});
```

**TypeScript version**

```js
const maxBy = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): T => (
    arr.reduce((a, b) => (a[key] >= b[key] ? a : b), {} as T)
);
```

**Example**

```js
const people = [
    { name: 'Bar', age: 24 },
    { name: 'Baz', age: 32 },
    { name: 'Foo', age: 42 },
    { name: 'Fuzz', age: 36 },
];
maxBy(people, 'age'); // { name: 'Foo', age: 42 }
```
