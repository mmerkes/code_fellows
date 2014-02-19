var Player =  require('../lib/player').Player,
    Card =  require('../lib/card').Card,
    expect = require('chai').expect;

describe('Player object tests', function() {
  'use strict';

  var player, card;

  beforeEach( function() {
    player = new Player('Matt Merkes');
    card = new Card('hearts', 3 );
  });

  // I expect that when I create a player, the player
  // will have a name
  it('has a name', function() {
    expect(player.getName()).to.equal('Matt Merkes')
  });

  // I expect that the user can receive a card from the deck
  it('can recieve a card', function() {
    expect(player.addCard(card)).to.be.ok;
  });

  // I expect that the player's deck will have a card in it
  it('has the card it received', function() {
    player.addCard(card);
    var hand = player.getHand();
    expect(hand[0].getSuit()).to.equal('hearts');
  });
});
