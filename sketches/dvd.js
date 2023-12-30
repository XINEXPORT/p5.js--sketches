//dvd.js
//https://www.youtube.com/watch?v=XStSK9Dy9Gc

//global
var boxX;
var boxY;
var boxSpeed = 5;
var boxDirectionX = 1;
var boxDirectionY = 1;
var dvd;

// Create a new canvas to the browser size
let dvdSketch = function (p) {
  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);

    //start box in center of screen
    boxX = p.width / 2;
    boxY = p.height / 2;

    p.fill(255, 255, 0);
    p.noStroke();

    p.rectMode(p.CENTER); //sets box coordinates to center
    p.imageMode(p.CENTER); ///sets dvd coordinates to center
  };

  //draw box
  p.draw = function () {
    p.background(0);
    p.rect(boxX, boxY, 200, 200);
    p.image(dvd, boxX, boxY, 200, 100);

    //Physics
    boxX = boxX + boxDirectionX * boxSpeed; //move Horizontal
    boxY = boxY + boxDirectionY * boxSpeed; //move Vertical

    //BOUNCE FUNCTIONS
    if (boxY >= p.height) {
      p.fill(255, 0, 0);
      boxDirectionY = boxDirectionY * -1;
    }
    if (boxX >= p.width) {
      //hit side walls & change direction
      p.fill(0, 255, 0);
      boxDirectionX = boxDirectionX * -1;
    }
    if (boxY <= 0) {
      p.fill(0, 0, 255);
      boxDirectionY = boxDirectionY * -1;
    }
    if (boxX <= 0) {
      p.fill(255, 255, 0);
      boxDirectionX = boxDirectionX * -1;
    }
  };

  p.preload = function () {
    dvd = p.loadImage('assets/dvd-logo.png');
  };

  p.windowResized = function () {
    p.resizeCanvas(window.innerWidth, window.innerHeight);
    // Adjust the starting position of the box when the window is resized
    boxX = p.width / 2;
    boxY = p.height / 2;
  };
};


