var Card = require('./card').Card;

module.exports.Deck = function() {
  'use strict';

  var deck,
      suits = ['hearts', 'diamonds', 'spades', 'clubs'],
      ranks = [ 'A', '2', '3', '4', '5', '6', '7', '8', 
                '9', '10', 'J', 'Q', 'K'];

  function Constructor(){}

  Constructor.prototype.countCards = function() {
    return deck.length;
  };

  Constructor.prototype.cardsDealt = function() {
    return 52 - deck.length;
  };

  Constructor.prototype.initializeDeck = function() {
    var i, j, card;
    deck = [];
    for( i = 0; i < 4; i++ ) {
      for( j = 0; j < 13; j++ ) {
        deck.push( new Card( suits[i], ranks[j] ) );
      }
    }
  };

  Constructor.prototype.drawCard = function() {
   /* deck.forEach( function(card) {
      console.log(card.getRank() + deck.length);
    }); */
    return deck.pop();
  };

  Constructor.prototype.shuffleDeck = function() {
    var temp = [],
        index, i;
    while( deck.length ) {
      index = Math.floor((Math.random() * deck.length));
      temp.push( deck.splice(index, 1)[0] );
    }
    deck = temp;
    return deck;
  };

  return new Constructor();
};
