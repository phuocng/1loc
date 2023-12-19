---
title: Filter by predicates
category: Array
---

**JavaScript version**

```js
const filterByPredicates = (arr, predicates, condition = "and") => arr.filter(item => 
  condition === "and" ? predicates.every(func => func(item)) : predicates.some(func => func(item))
)
```

**TypeScript version**

```js
const filterByPredicates = <T, _>(
  arr: T[], 
  predicates: Array<(val: T) => boolean>, 
  condition: "and" | "or" = "and"
): T[] => arr.filter(item => 
  condition === "and" ? predicates.every(func => func(item)) : predicates.some(func => func(item))
)
```

**Example**

```js
const nums = [-2, -1, 0, 1, 2, 3.1];
const isEven = num => num % 2 === 0;
const isPositive = num => num > 0;
filterByPredicates(nums, [isPositive, Number.isInteger], "and"); // [1, 2]
filterByPredicates(nums, [isEven, isPositive], "or"); // [-2, 0, 1, 2, 3.1] 
```
