---
layout: layouts/post.njk
title: Convert Celsius to Fahrenheit
category: Misc
---

**JavaScript version**

```js
const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
```

**TypeScript version**

```js
const celsiusToFahrenheit = (celsius: number): number => (celsius * 9) / 5 + 32;
```

**Examples**

```js
celsiusToFahrenheit(15); // 59
celsiusToFahrenheit(0); // 32
celsiusToFahrenheit(-20); // -4
```
