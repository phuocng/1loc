~~~ javascript
const Type = object => Object.prototype.toString.call(object).match(/\[object (.*)\]/)[1]

// Examples
Type('hello world')                   // String
Type(Infinity)                        // Number
Type(true)                            // Boolean
Type(Symbol())                        // Symbol
Type(null)                            // Null
Type(undefined)                       // Undefined
Type({})                              // Object
Type([])                              // Array
Type(/[a-z]/g)                        // RegExp
Type(new Date(2020))                  // Date
Type(new Error())                     // Error
Type(function(){})                    // Function
Type(document)                        // HTMLDocument
~~~
