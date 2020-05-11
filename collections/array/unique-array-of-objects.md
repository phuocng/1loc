uniqueArrayOfObjects = arr => [... new Set(arr.map(x => JSON.stringify(x)))].map(x => JSON.parse(x))

