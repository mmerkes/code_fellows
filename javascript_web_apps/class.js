//adding inheritance facility to our Class library
var Class = function(parent) { 
  var klass = function() {
    this.init.apply(this, arguments); 
  };
  // Change klass' prototype
  if (parent) {
    var subclass = function() { };
    subclass.prototype = parent.prototype;
    klass.prototype = new subclass; 
  };
  klass.prototype.init = function(){ };
  // Shortcuts
  klass.fn = klass.prototype; 
  klass.fn.parent = klass; 
  klass._super = klass.__proto__;
  klass.fn.proxy = klass.proxy;

  // Adding class properties 
  klass.extend = function(obj) {
    var extended = obj.extended; 
    for(var i in obj) {
      klass[i] = obj[i]; 
    }
    // support for the 'extended' hook
    if (extended) extended(klass) 
  };

  // Adding instance properties
  klass.include = function(obj) {
    var included = obj.included; 
    for(var i in obj) {
      klass.fn[i] = obj[i]; 
    }
    // support for the 'included' hook
    if (included) included(klass) 
  };

  klass.proxy = function( func ) {
    var self = this;
    return( function() {
      return fun.apply( self, arguments );
    })
  }

  return klass; 
};

var Animal = new Class;

Animal.include({ 
  breath: function( ){ console.log('breath ' + this.name ); }
});

Animal.name = 'bob';

Animal.extend({
  eat: function() {
    console.log( 'eat' );
  }
});

Animal.extend({
  walk: function() {
    console.log('walk');
  }
});

// creating a Cat class which inheriths from Animal (caveat: only instance properties not class properties are copied)
var Cat = new Class(Animal);

// Usage
var tommy = new Cat; 
tommy.name = 'tommy';
// inherits breath
tommy.breath();

// tommy does not inherit walk
// tommy.walk() -> throws an error
Animal.walk();

Animal.eat();








