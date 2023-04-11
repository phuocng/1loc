---
layout: layouts/post.njk
title: Capitalize a string
category: String
---

**JavaScript version**

```js
const capitalize = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

// Or
const capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`;

// Or
const capitalize = (str) => str.replace(/^([a-z])/, (first) => first.toUpperCase());
```

**TypeScript version**

```js
const capitalize1 = <T extends string,>(str: T) => `${str.charAt(0).toUpperCase()}${str.slice(1)}` as Capitalize<T>;

// Or
const capitalize2 = <T extends string,>([first, ...rest]: T) => `${first.toUpperCase()}${rest.join('')}` as Capitalize<T>;

// Or
const capitalize3 = <T extends string,>(str: T) => str.replace(/^([a-z])/, (first) => first.toUpperCase()) as Capitalize<T>;
```

**Examples**

```js
capitalize('hello world'); // 'Hello world'
```
