~~~ javascript
// Reverse the order of arguments
const flip = fn => (...args) => fn(...args.reverse());

// For binary functions
const flip = fn => (b, a) => fn(a, b);

// Or for curried functions
const flip = fn => b => a => fn(a)(b);

// Example
const isParent = (parent, child) => parent.children.includes(child);
const isChild = flip(isParent);
~~~