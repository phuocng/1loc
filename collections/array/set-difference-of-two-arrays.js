// just because you can, doesn't mean you should.
const setDifferenceOfTwoArrays = (a, b) => {const setB = new Set(b); return [...new Set(a)].filter((x) => !setB.has(x))};
