---
title: Replace all line breaks with br elements
category: String
---

```js
const nl2br = (str) => str.replace(new RegExp('\r?\n', 'g'), '<br>');

// In React
str.split('\n').map((item, index) => (
    <React.Fragment key={index}>
        {item}
        <br />
    </React.Fragment>
));
```
