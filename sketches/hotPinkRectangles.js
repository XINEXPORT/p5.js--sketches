//hotPinkReactangles.js

let hotPinkRectanglesSketch = function(p) {
    p.setup = function () {
      p.createCanvas(window.innerWidth, window.innerHeight);
      // p.createCanvas(window.innerWidth / 2, window.innerHeight);
      p.strokeWeight(20);
    };
  
    p.draw = function () {
      p.blendMode(p.BLEND);
      p.background("#ff39b5");
      p.ellipse(p.mouseX, p.mouseY, 80, 80);
      p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
      p.frameRate(18);
  
      let a = p.color('green');
      p.fill(a);
  
      p.rect(50, 50, 300, 100);
      p.stroke('red');
      p.fill('#00ccb5');
  
      p.rect(50, 600, 1000, 100);
      p.stroke('black');
      p.fill('#02ccb6');
      p.rect(10, 300, 300, 400);
      p.stroke('blue');
      p.circle(500, 300, 150, 300);
      p.stroke('orange');
      p.line(500, 300, 150, 500);
      p.fill("purple");
      p.square(100, 490, 64);
    };
  };
  