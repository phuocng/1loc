~~~ javascript
// el.hide();
Element.prototype.hide = function() { this.style.display = 'none'; return this; }

// el.hide();
Element.prototype.show = function() { this.style.display = ''; return this; }

// el.toggle();
Element.prototype.toggle = function() { this.style.display = (this.style.display !== 'none') ? 'none' : ''; return this; }
~~~
