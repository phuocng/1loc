export const uid = (() => {
    let id = 1;
    return () => id++;
})();
