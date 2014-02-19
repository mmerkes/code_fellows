var Player =  require('../lib/player').Player,
  expect = require('chai').expect;

describe('Player object tests', function() {
  'use strict';

  var player;

  beforeEach( function() {
    player = new Player('Matt Merkes');
  });

  // I expect that when I create a player, the player
  // will have a name
  it('has a name', function() {
    expect(patron.name).to.equal('Matt Merkes')
  });

  // I expect that the user can receive a card from the deck
  it('can recieve a card');
});
