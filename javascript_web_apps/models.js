var Model = {
  inherited: function(){},
  created: function(){},

  prototype: {
    init: function(){}
  },

  create: function() {
    var object = Object.create(this);
    object.parent = this;
    object.prototype = object.fn = Object.create(this.prototype);

    object.created();
    this.inherited(object);
    return object;
  },

  init: function() {
    var instance = Object.create(this.prototype);
    instance.parent = this;
    instance.init.apply(instance, arguments);
    return instance;
  },

  extend: function(o) {
    var extended = o.extended;
    jQuery.extend(this, o);
    if(extended) extended(this);
  },

  include: function(o) {
    var included = o.included;
    jQuery.extend(this.prototype, o);
    if( included ) included(this);
  }
};

Model.include({
  newRecord: true,

  create: function() {
    if( !this.id ) {
      this.id = Math.uuid();
    }
    this.newRecord = false;
    this.parent.records[this.id] = this;
  },

  destroy: function() {
    delete this.parent.records[this.id];
  },

  update: function() {
    this.parent.records[this.id] = this;
  },

  save: function() {
    this.newRecord ? this.create() : this.update();
  },

  toJSON: function() {
    return (this.attributes());
  },

  createRemote: function( url, callback ) {
    $.post( url, this.attributes(), callback );
  },

  updateRemote: function( url ) {
    $.ajax({
      url: url,
      data: this.attributes,
      success: callback,
      type: "PUT"
    });
  }
});

Model.extend({
  find: function(id) {
    return this.records[id] || console.log('Unknown record');
  },
  populate: function( values ) {
    // Reset model & records
    this.records = {};

    for( var i = 0, il = values.length; i < il; i++ ) {
      var record = this.init(values[i]);
      record.newRecord = false;
      this.records[record.id] = record;
    }
  },
  created: function() {
    this.records = {};
    this.attributes = [];
  }
});

ModelLocalStorage = {
  saveLocal: function( name ) {
    // Turn records into an array
    var result = [];
    for( var i in this.records ) {
      result.push( this.records[i] );
    }

    localStorage[name] = JSON.stringify( result );
  },

  loadLocal: function( name ) {
    var result = JSON.parse( localStorage[name] );
    this.populate( result );
  }
};

Math.uuid = function() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });
};

var Asset = Model.create(),
    User = Model.create(),
    user = User.init(),
    asset = Asset.init();

asset.name = "same, same";
asset.save();
console.log(asset.id);

var asset2 = Asset.init();
asset2.name = "but different";
asset2.save();
console.log( asset2.id );

asset2.destroy();

/*
  create() -> inherits from the Model object
  init() -> inherits from Model.prototype
*/
