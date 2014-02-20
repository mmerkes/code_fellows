module.exports.Card = function( suit, rank ) {
  'use strict';

  function Constructor() {}

  Constructor.prototype.getSuit = function(){ 
    return suit; 
  };
  Constructor.prototype.getRank = function(){ 
    return rank; 
  };

  return new Constructor();
};
