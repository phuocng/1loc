~~~ javascript

const withLength = LENGTH => Array.from({ length: LENGTH })

const withLengthAndValues = LENGTH => Array.from({ length: LENGTH }, (_x, index) => index + 1)

/*
withLength(2)
[undefined, undefined]

withLengthAndValues(5)
[1, 2, 3, 4, 5]
*/
~~~