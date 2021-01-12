~~~ javascript
const getTypeOf = object => Object.prototype.toString.call(object).match(/\[object (.*)\]/)[1]

// Examples
getTypeOf('hello world')                   // String
getTypeOf(Infinity)                        // Number
getTypeOf(true)                            // Boolean
getTypeOf(Symbol())                        // Symbol
getTypeOf(null)                            // Null
getTypeOf(undefined)                       // Undefined
getTypeOf({})                              // Object
getTypeOf([])                              // Array
getTypeOf(/[a-z]/g)                        // RegExp
getTypeOf(new Date(2020))                  // Date
getTypeOf(new Error())                     // Error
getTypeOf(function(){})                    // Function
getTypeOf(async ()=>{})                    // AsyncFunction
getTypeOf(document)                        // HTMLDocument
~~~
