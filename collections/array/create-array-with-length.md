~~~ javascript

const withLength = length => Array.from({ length })

const withLengthAndValues = length => Array.from({ length }, (_x, index) => index + 1)

/*
withLength(2)
[undefined, undefined]

withLengthAndValues(5)
[1, 2, 3, 4, 5]
*/
~~~