---
title: Convert Celsius to Fahrenheit
category: Misc
tags:
  - posts
layout: layouts/post.njk
---

```js
const celsiusToFahrenheit = celsius => celsius * 9/5 + 32;

// Examples
celsiusToFahrenheit(15);    // 59
celsiusToFahrenheit(0);     // 32
celsiusToFahrenheit(-20);   // -4
```