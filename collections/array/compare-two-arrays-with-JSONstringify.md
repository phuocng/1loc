```javascript
// Compare 2 arrays with JSON.stringify
//set arrays
var a = [1, 2, 3, 4, 5];
var b = [1, 2, 3, 4, 5];
var c = ['1', 2, 3, 4, 5];
// true
JSON.stringify(a) === JSON.stringify(b);
//false
JSON.stringify(a) === JSON.stringify(c);
```
