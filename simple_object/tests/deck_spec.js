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

  // Check that an unshuffled deck draws the king of clubs first
  it('draws the kings of clubs if unshuffled', function() {
    deck.initializeDeck();
    var card = deck.drawCard();
    expect(card.getSuit()).to.equal('clubs');
    expect(card.getRank()).to.equal('K');
  });

  // I expect that the deck will be shuffled and will
  // not draw the king of clubs first
  it('shuffles the deck', function() {
    deck.initializeDeck();
    deck.shuffleDeck();
    var card = deck.drawCard();
    console.log(card.getRank());
    if(card.getSuit() === 'clubs' && card.getRank() === 'K') {
      card = deck.drawCard();
      console.log(card.getRank() + card.getSuit());
      expect(card.getSuit() === 'clubs'  && card.getRank() === 'Q' ).to.not.be.ok;
    } else {
      expect(card.getSuit() === 'clubs' && card.getRank() === 'K').to.not.be.ok;
    }
  });
});
