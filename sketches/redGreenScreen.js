// redGreenScreen.js
let redGreenSketch = function(p) {
  p.setup = function() {
    p.createCanvas(window.innerWidth, window.innerHeight);
    // p.createCanvas(window.innerWidth / 2, window.innerHeight);
    p.background('black');
  };

  p.draw = function() {
    p.fill(p.random(255), p.random(255), p.random(0));
    let x = p.random(p.width);
    let y = p.random(p.height);
    let rWidth = p.random(100);
    let rHeight = p.random(50, 100);
    p.rect(x, y, rWidth, rHeight, 100, 50);
  };
};
