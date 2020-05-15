~~~ javascript
const hasProp = (obj, prop) => typeof obj[prop] !== "undefined";

// Or
const hasProp = (obj, prop) => obj.hasOwnProperty(prop);

// Or
const hasProp = (obj, prop) => prop in obj;

// Example
const user = { id: 0, name: "John Doe" };

hasProp(user, "id") // true
hasProp(user, "email") // false
~~~
