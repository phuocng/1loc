```javascript
/*
Input-
[
	{ id: "1", name: "Alpha", gender: "Male"},
	{ id: "2", name: "Bravo", gender: "Male"},
	{ id: "3", name: "Charlie", gender: "Female"},
]
*/

const toObject = (arr) => arr.reduce((a, b) => ({ ...a, [b.id]: b }), {});
/*
Output-
{
	"1": { id: "1", name: "Alpha", gender: "Male"},
	"2": { id: "2", name: "Bravo", gender: "Male"},
	"3": { id: "3", name: "Charlie", gender: "Female"},
}

*/

//using id property for indexing

//any property of objects unique to every object can be used for indexing in the new object

/*
Usefulness -
reduces access time for any object to O(1), instead of searching over the whole array.
*/
```
