window.onload = function () {
  'use strict';

  var game
    , ns = window['pixelrain'];

  game = new Phaser.Game(640, 480, Phaser.AUTO, 'pixelrain-game');
  game.state.add('boot', ns.Boot);
  game.state.add('preloader', ns.Preloader);
  game.state.add('menu', ns.Menu);
  game.state.add('game', ns.Game);

  game.state.start('boot');
};
