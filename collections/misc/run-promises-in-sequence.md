~~~ javascript
// `promises` is an array of `Promise`
const run = promises => promises.reduce((p, c) => p.then(rp => c.then(rc => [...rp, rc])), Promise.resolve([]));

// Example
run(promises).then((results) => {
    // `results` is an array of promise results in the same order
});
~~~