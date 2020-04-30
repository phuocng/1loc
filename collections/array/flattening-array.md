const flat = (arr) => arr.reduce((a, b) => Array.isArray(b) ? [...a, ...flat(b)] : [...a, b],[]);
