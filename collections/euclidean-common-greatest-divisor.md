const euclid = (a, b) => (b === 0 ? a : euclid(b, a % b))

// Example
euclid(6,27);    // 3
