~~~ javascript
// el.addClass('the-class');
Element.prototype.addClass = function(newClass) { this.classList.add(newClass); return this; }

// el.removeClass('the-class');
Element.prototype.removeClass = function(oldClass) { this.classList.remove(oldClass); return this; }

// el.toggleClass('the-class');
Element.prototype.toggleClass = function(thisClass) { this.classList.toggle(thisClass); return this; }

// if(el.hasClass('the-class'))
Element.prototype.hasClass = function(thisClass) { return this.classList.contains(thisClass); }
~~~
