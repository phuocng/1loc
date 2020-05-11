~~~ javascript
// set value --> el.val('Hello World');
// get value --> el.val();
Element.prototype.val = function(newValue) { if(newValue === undefined) return this.value; this.value = newValue; return this; }
~~~
