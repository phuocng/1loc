---
title: Generate an array of alphabet characters
category: Array
---

**JavaScript version**

```js
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

// Or
const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];

// Or
const alphabet = Array(26)
    .fill(0)
    .map((_, i) => String.fromCharCode(i + 97));

// Or
const alphabet = [...Array(26).keys()].map((i) => String.fromCharCode(i + 97));

// Or
const alphabet = [...Array(26)].map((_, i) => (i + 10).toString(36));

// Or
const alphabet = String.fromCharCode(
    ...' '
        .repeat(26)
        .split('')
        .map((_, i) => i + 97)
).split('');
```

**TypeScript version**

```js
const alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

// Or
const alphabet: string[] = [...'abcdefghijklmnopqrstuvwxyz'];

// Or
const alphabet: string[] = Array(26)
    .fill(0)
    .map((_, i) => String.fromCharCode(i + 97));

// Or
const alphabet: string[] = [...Array(26).keys()].map((i) => String.fromCharCode(i + 97));

// Or
const alphabet: string[] = [...Array(26)].map((_, i) => (i + 10).toString(36));

// Or
const alphabet: string[] = String.fromCharCode(
    ...' '
        .repeat(26)
        .split('')
        .map((_, i) => i + 97)
).split('');
```
