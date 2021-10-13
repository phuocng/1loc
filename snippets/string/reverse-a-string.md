---
title: Reverse a string
category: String
---

**JavaScript version**

```js
const reverse = (str) => str.split('').reverse().join('');

// Or
const reverse = (str) => [...str].reverse().join('');

// Or
const reverse = (str) => str.split('').reduce((rev, char) => `${char}${rev}`, '');

// Or
const reverse = (str) => (str === '' ? '' : `${reverse(str.substr(1))}${str.charAt(0)}`);
```

**TypeScript version**

```js
const reverse = (str: string): string => str.split('').reverse().join('');

// Or
const reverse = (str: string): string => [...str].reverse().join('');

// Or
const reverse = (str: string): string => str.split('').reduce((rev, char) => `${char}${rev}`, '');

// Or
const reverse = (str: string): string => (str === '' ? '' : `${reverse(str.substr(1))}${str.charAt(0)}`);
```

**Examples**

```js
reverse('hello world'); // 'dlrow olleh'
```
