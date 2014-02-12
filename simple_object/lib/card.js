module.exports.Card = function( suit, rank ) {
  'use strict';

  function Constructor() {}

  constructor.prototype.getSuit = function(){ 
    return suit; 
  };
  constructor.prototype.getRank = function(){ 
    return rank; 
  };

  return new Constructor();
};
