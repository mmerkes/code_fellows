var Player =  require('../lib/player').Player,
    Deck = require('../lib/deck').Deck,
    expect = require('chai').expect;

describe('Deck object tests', function() {
  'use strict';

  var player, deck;

  beforeEach( function() {
    player = new Player('Matt Merkes');
    deck = new Deck();
  });

  // I expect the deck to be initialzed
  it('to be truthy', function() {
    expect(deck).to.be.ok;
  });

  // I expect the deck to have 52 cards
  it('to have 52 cards', function() {
    deck.initializeDeck();
    expect(deck.countCards()).to.equal(52);
  });

  // I expect that I can draw a card
  it('to be able to draw a card', function() {
    deck.initializeDeck();
    expect(deck.drawCard()).to.be.ok;
  });

  // I expect to know have many cards have been dealt
  it('to know the amount of cards dealt', function() {
    deck.initializeDeck();
    for( var i = 0; i < 5; i++ ) {
      deck.drawCard();
    }
    expect(deck.cardsDealt()).to.equal(5);
  });
});
