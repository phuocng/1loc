---
title: Convert snake_case to camelCase
category: String
---

**JavaScript version**

```js
const snakeToCamel = (str) => str.toLowerCase().replace(/(_\w)/g, (m) => m.toUpperCase().substr(1));
```

**TypeScript version**

```js
const snakeToCamel = (str: string): string => str.toLowerCase().replace(/(_\w)/g, (m) => m.toUpperCase().substr(1));
```

**Examples**

```js
snakeToCamel('HELLO_world'); // 'helloWorld'
```
