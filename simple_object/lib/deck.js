var Card = require('./card').Card;

module.exports.Deck = function() {
  'use strict';

  var deck = [],
      suits = ['hearts', 'diamonds', 'spades', 'clubs'],
      ranks = [ 'A', '2', '3', '4', '5', '6', '7', '8', 
                '9', '10', 'J', 'Q', 'K'],
      card;

  function Constructor(){}

  Constructor.prototype.countCards = function() {
    return deck.length;
  };

  Constructor.prototype.cardsDealt = function() {
    return 52 - deck.length;
  };

  Constructor.prototype.initializeDeck = function() {
    var i, j, set = [];
    for( i = 0; i < 4; i++ ) {
      for( j = 0; j < 13; j++ ) {
        set.push( new Card( suits[i], ranks[j] ));
      }
    }
    deck = set;
  };

  Constructor.prototype.drawCard = function() {
    return deck.pop();
  };

  return new Constructor();
};
