---
title: Trim some character
category: String
---

**JavaScript version**

```js
const trim = (str, char) => str.split(char).filter(Boolean).join();
```

**TypeScript version**

```js
const trim = (str: string, char: string): string => str.split(char).filter(Boolean).join();
```

**Examples**

```js
trim('/hello world//', '/'); // hello world
trim('"hello world"', '"'); // hello world
trim('   hello world ', ' '); // hello world
```
