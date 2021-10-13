---
title: Decapitalize a string
category: String
---

**JavaScript version**

```js
const decapitalize = (str) => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;

// Or
const decapitalize = ([first, ...rest]) => `${first.toLowerCase()}${rest.join('')}`;
```

**TypeScript version**

```js
const decapitalize = (str: string): string => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;

// Or
const decapitalize = ([first, ...rest]: string): string => `${first.toLowerCase()}${rest.join('')}`;
```

**Examples**

```js
decapitalize('Hello world'); // 'hello world'
```
