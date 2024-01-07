//color-landscape.js
//https://youtu.be/R1tfyVyU0hg?si=FjKgMmU0UjteHIrg

let angleX = 90;
let angleY = 0;

let colorfulLandscapeSketch = function (p) {
  p.setup = function () {
    p.createCanvas(windowWidth, windowHeight, p.WEBGL);
    p.angleMode(p.DEGREES);
    p.noiseDetail(1);
  };

  p.draw = function () {
    p.background('#000000');

    p.translate(0, -100, -500);

    p.rotateX(angleX);
    p.rotateZ(p.frameCount / 2);
    p.rotateX(p.map(p.cos(p.frameCount / 4), -1, 1, 50, -120) + angleX);
    p.rotateY(p.map(p.sin(p.frameCount / 4), -1, 1, -30, 30) + angleY);

    p.noStroke();

    p.directionalLight([255], p.createVector(0, 0, -1));
    p.directionalLight([255], p.createVector(0, 0, -1));
    p.directionalLight([100], p.createVector(0, 0, -1));
    p.directionalLight([50], p.createVector(0, 0, -1));

    var w = 15;
    var start = p.frameCount / 50;
    var xoff = 0;

    for (var x = -p.width / 2; x <= p.width / 2; x += w) {
      yoff = 0;
      for (var y = -p.height / 2; y <= p.height / 2; y += w) {
        var h = p.map(p.noise(xoff + start, yoff + start), 0, 1, -100, 100);
        var r = p.map(x, -p.width / 2, p.width / 2, 0, 255);
        var g = p.map(y, -p.height / 2, p.height / 2, 255, 0);
        var b = p.map(h, -100, 100, 0, 255);

        p.push();
        p.fill(r, g, b);
        p.translate(x, y, -h / 2);
        p.box(w, w, h);
        p.pop();

        yoff += 0.08;
      }
      xoff += 0.08;
    }
  };

  p.mouseDragged = function () {
    let drag = 0.1;
    angleX += (p.pmouseY - p.mouseY) * drag;
    angleY += (p.mouseX - p.pmouseX) * drag;
  };
};

