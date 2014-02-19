module.exports.Player = function( name ) {
  'use strict';

  var hand = [];

  function Constructor() {}

  constructor.prototype.getName = function(){ 
    return name; 
  };

  constructor.prototype.addCard = function( card ) {
    hand.push(card);
    return true;
  };

  constructor.prototype.getHand = function() {
    return hand;
  };

  return new Constructor();
};
