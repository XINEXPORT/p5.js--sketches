//gerhardRichter.js
//https://www.youtube.com/watch?v=tcHNbGdW5Ys

const cols = 20;
const rows = 20;
const spacing = 10;
let cellWidth;
let cellHeight;

let gerhardRichterSketch = function(p) {
  p.setup = function() {
    // p.createCanvas(window.innerWidth / 2, window.innerHeight);
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.noLoop();
    p.noStroke();
    p.colorMode(p.HSB);
    cellWidth = (p.width - (cols + 1) * spacing) / cols;
    cellHeight = (p.height - (rows + 1) * spacing) / rows;
  };

  p.draw = function() {
    p.background(255);

    for (let j = 0; j < rows; j++) {
      for (let i = 0; i < cols; i++) {
        let x = spacing + i * (cellWidth + spacing);
        let y = spacing + j * (cellHeight + spacing);
        p.fill(p.random(360), p.random(30, 100), p.random(20, 100));
        p.rect(x, y, cellWidth, cellHeight);
      }
    }
  };
};

