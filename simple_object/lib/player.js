module.exports.Player = function( name ) {
  'use strict';

  var hand = [];

  function Constructor() {}

  Constructor.prototype.getName = function(){ 
    return name; 
  };

  Constructor.prototype.addCard = function( card ) {
    hand.push(card);
    return hand;
  };

  Constructor.prototype.getHand = function() {
    return hand;
  };

  // Accepts the index of the hand to play a card
  Constructor.prototype.playCard = function( index ) {
    var card = hand[index];
    delete hand[index];
    return card;
  };

  return new Constructor();
};
