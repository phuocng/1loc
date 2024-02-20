~~~ javascript
const mergeObjects = (obj1, obj2) => Object.assign(obj1, obj2);

//Or

const obj = {...obj1, ...obj2};

// Examples
const obj1 = {name : "Nick", city: "London"}; 
const obj2 = { age : 25}; 

const obj = mergeObjects(obj1, obj2); // {name: "Nick", city: "London", age: 25}
const obj = {...obj1, ...obj2}; // {name: "Nick", city: "London", age: 25}
~~~