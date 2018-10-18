var Person = function(firstAndLast) {
    var first = firstAndLast.substr(0, firstAndLast.indexOf(' '));
    var last = firstAndLast.substr(firstAndLast.indexOf(' ') + 1);

    this.getFullName = function() {
      return firstAndLast;
    };

    this.getFirstName = function() {
      return first;
    };

	this.getLastName = function() {
	  return last;
	};

    this.setFirstName = function(name) {
      firstAndLast = firstAndLast.replace(first, name);
    };

    this.setLastName = function(name) {
      firstAndLast = firstAndLast.replace(last, name);
    };

    this.setFullName = function(fullName) {
      firstAndLast = fullName;
      first = firstAndLast.substr(0, firstAndLast.indexOf(' '));
      last = firstAndLast.substr(firstAndLast.indexOf(' ') + 1);
    };
};

var bob = new Person('Bob Ross');