//circleSplash.js

let circleSplashSketch = function (p) {
    let d = 50;
    let timer = 0;
    const resetTime=8000;
  
    // Create a new canvas to the browser size
    p.setup = function () {
      p.createCanvas(p.windowWidth / 2, p.windowHeight);
    };

    // Render loop that draws shapes with p5
    p.draw = function () {
      p.blendMode(p.BLEND);
      p.background("#ffa500");
  
      p.stroke("#8ff247");
      p.stroke("#ee82ee");
      p.stroke("#8ff2b5");
      p.noFill("#8ff247");
      p.strokeWeight(20);
      p.strokeWeight(10);
  
      d += 5;
  
      p.blendMode(p.EXCLUSION);
  
      p.circle(p.width / 2, p.height / 4, d);
      p.circle(p.width / 3, p.height / 5, d);
      p.circle(p.width / 4, p.height / 6, d);
  
      p.circle(2 * d, p.height / 2, d);
      p.circle(3 * d, p.height / 3, d);
      p.circle(4 * d, p.height / 5, d);
  
      p.circle(p.width - d, p.height / 2, d);
      p.circle(p.width - d, p.height / 4, d);

      timer += p.deltaTime;

      if(timer > resetTime) {
        d=50;
        timer=0;
      }
    };
  };
  