---
title: Returns a string representing a number in a specific locale.
category: String
---

**JavaScript version**

```js
const toLocaleStringFc = (value, code, style, currencySymbol) =>  value.toLocaleString(code, {style: stylecurrency:currencySymbol})

```

**TypeScript version**

```js
const toLocaleStringFc = (value: number, code: string, style: string, currencySymbol: string) => value.toLocaleString(code, { style: style, currency: currencySymbol });
```

**Examples**

```js
console.log(toLocaleStringFc(123456.789,'de-DE','currency','EUR')) //123.456,79 €
```
