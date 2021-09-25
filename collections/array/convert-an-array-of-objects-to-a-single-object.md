---
title: Convert an array of objects to a single object
category: Array
---

```js
const toObject = (arr, key) => arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {});

// Or
const toObject = (arr, key) => Object.fromEntries(arr.map((it) => [it[key], it]));

// Example
toObject(
    [
        { id: '1', name: 'Alpha', gender: 'Male' },
        { id: '2', name: 'Bravo', gender: 'Male' },
        { id: '3', name: 'Charlie', gender: 'Female' },
    ],
    'id'
);
/* 
{
    '1': { id: '1', name: 'Alpha', gender: 'Male' },
    '2': { id: '2', name: 'Bravo', gender: 'Male' },
    '3': { id: '3', name: 'Charlie', gender: 'Female' },
}
*/
```
