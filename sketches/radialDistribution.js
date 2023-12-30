// radialDistribution.js
let radialSketch = function(p) {
  const numRings = 3;

  p.setup = function() {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.angleMode(p.DEGREES);
  };

  p.draw = function() {
    p.background(0);
    p.translate(window.innerWidth / 2, window.innerHeight / 2);

    for (let i = 0; i < numRings; i++) {
      p.rotate(60);
      drawRing();
    }
  };

  function drawRing() {
    for (let angle = 0; angle < 360; angle += 10) {
      const x = p.cos(p.frameCount + angle) * (window.innerWidth / 20 + p.mouseX / 8);
      const y = p.sin(p.frameCount / 2 + angle) * (window.innerWidth / 20 + p.mouseY / 4);

      p.fill(angle);
      p.stroke(0);
      p.strokeWeight(2);
      p.ellipse(x, y, 50);
    }
  }
};
