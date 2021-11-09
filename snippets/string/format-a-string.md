---
title: Format a String (Java style)
category: String
---

**JavaScript version**

```js
const format = (str, ...vals) => vals.reduce((s,v,i) => s.replace(new RegExp('\\{' + i + '\\}', 'g'), v), str)
```

**TypeScript version**

```js
const format = (str: string, ...vals: unknown[]): string => vals.reduce((s,v,i) => s.replace(new RegExp('\\{' + i + '\\}', 'g'), v), str);
```

**Examples**

```js
const template = 'My name is {0} and I am {1} years old';
const name1 = 'John', age1 = 30;
const name2 = 'Jane', age2 = 20;

console.log(format(template, name1, age1));
// output: My name is John and I am 30 years old

console.log(format(template, name2, age2));
// output: My name is Jane and I am 20 years old
```
