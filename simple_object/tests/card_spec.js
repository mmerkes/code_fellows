'use strict';

var Card =  require('../lib/card').Card,
  expect = require('chai').expect;

describe('Card object tests', function() {
  var card;

  beforeEach( function() {
    card = new Card('hearts', 3);
  });

  // I expect that when I create a card of a particular suit
  // and rank, that card has that suit and rank.
  describe('constructor', function() {
    it('card should be truthy (exists)', function() {
      expect(card).to.be.ok;
    });
    it('card should have suit property', function() {
      expect(card).to.have.property('getSuit');
    });
    it('card should be a heart', function() {
      expect(card.getSuit()).to.equal('hearts');
    });
    it('card should be of rank 3', function() {
      expect(card.getRank()).to.equal(3);
    })
  });

  // I expect that a card that I am holding will not change suit
  // and rank
  describe('immutable', function() {
    it('suit should be immutable', function(){
      card.suit = 'diamonds';
      expect(card.getSuit()).to.not.equal('diamonds');
    });
    it('rank should be immutable', function() {
      card.rank = 5;
      expect(card.getRank()).to.not.equal(5);
    })
  });
});
