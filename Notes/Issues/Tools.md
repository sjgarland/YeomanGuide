# Issues with tools for developing add-ins

## Angular

_Resolved_.  There was a problem with a (keydown) handler not being invoked, compounded by problem with `addEventListener`: evaluation of `this` inside the event handler referred to an html element, not to an instance of the class containing the handler.  The solution was to use `@HostListener`.



