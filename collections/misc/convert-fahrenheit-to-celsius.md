---
title: Convert Fahrenheit to Celsius
category: Misc
tags:
  - posts
layout: layouts/post.njk
---

```js
const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

// Examples
fahrenheitToCelsius(59);    // 15
fahrenheitToCelsius(32);    // 0
```