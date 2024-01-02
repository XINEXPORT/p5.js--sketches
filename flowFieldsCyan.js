let flowFieldsCyanSketch = function(p) {
    let particles = [];
    const num = 1000;
    const noiseScale = 0.01;
  
    p.setup = function () {
      p.createCanvas(window.innerWidth, window.innerHeight);
      
      for (let i = 0; i < num; i++) {
        particles.push(p.createVector(p.random(p.width), p.random(p.height)));
        p.stroke(0, 240, 255);
      }
    };
  
    p.draw = function () {
      p.background(0, 5);
      for (let i = 0; i < num; i++) {
        let part = particles[i];
  
        p.point(part.x, part.y);
        let n = p.noise(part.x * noiseScale, part.y * noiseScale);
        let a = p.TAU * n;
        part.x += p.cos(a);
        part.y += p.sin(a);
        if (!onScreen(part)) {
          part.x = p.random(p.width);
          part.y = p.random(p.height);
        }
      }
    };
  
    p.mouseReleased = function () {
      p.noiseSeed(p.millis());
    };
  
    function onScreen(v) {
      return v.x >= 0 && v.x <= p.width && v.y >= 0 && v.y <= p.height;
    }
  };
  