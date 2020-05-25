~~~ javascript
const getIndex = col => col.split('').reduce((prev, next) => prev * 26 + parseInt(next, 36) - 9, 0);

// Examples
getIndex('A');      // 1
getIndex('B');      // 2
getIndex('C');      // 3
getIndex('Z');      // 26

getIndex('AA');     // 27
getIndex('AB');     // 28
getIndex('AC');     // 29
getIndex('AZ');     // 52

getIndex('AAA');    // 703
getIndex('AAB');    // 704
~~~