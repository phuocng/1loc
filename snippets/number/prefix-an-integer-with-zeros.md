---
title: Prefix an integer with zeros
category: Number
---

**JavaScript version**

```js
const prefixWithZeros = (n, length) => (n / Math.pow(10, length)).toFixed(length).substr(2);

// Or
const prefixWithZeros = (n, length) => `${Array(length).join('0')}${n}`.slice(-length);

// Or
const prefixWithZeros = (n, length) => String(n).padStart(length, '0');
```

**TypeScript version**

```js
const prefixWithZeros = (n: number, length: number): string => (n / Math.pow(10, length)).toFixed(length).substr(2);

// Or
const prefixWithZeros = (n: number, length: number): string => `${Array(length).join('0')}${n}`.slice(-length);

// Or
const prefixWithZeros = (n: number, length: number): string => String(n).padStart(length, '0');
```

**Examples**

```js
prefixWithZeros(42, 5); // '00042'
```
