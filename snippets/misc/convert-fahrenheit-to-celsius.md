---
title: Convert Fahrenheit to Celsius
category: Misc
---

**JavaScript version**

```js
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
```

**TypeScript version**

```js
const fahrenheitToCelsius = (fahrenheit: number): number => ((fahrenheit - 32) * 5) / 9;
```

**Examples**

```js
fahrenheitToCelsius(59); // 15
fahrenheitToCelsius(32); // 0
```
