document.writeln("BOOM! Browser lets you write like this, node does not.");

// For some reason this is how they define new methods
Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

// That looks like a helper function so that we don't have to type
// prototype everytime we want to add a method to an {Object}
//
// String.method('trim', function() { this.replace(/^\s+|\s+$/g, ''); });
//
// If trim exists though, we probably want to add the method conditionally
Function.prototype.method = function (name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
    return this;
  }
};
