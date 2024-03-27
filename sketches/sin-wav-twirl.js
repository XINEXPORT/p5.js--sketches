//sin wav structure
//https://www.youtube.com/watch?v=vmhRlDyPHMQ&list=PLwUlLzAS3RYow0T9ZXB0IomwB-DyBRTfm

let sinWavTwirlSketch = function (p){

    p.setup = function(){
    p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
    p.angleMode(p.DEGREES)
  }
  
  p.draw = function(){
    p.background(30)
    
    p.rotateX(60)
    
    p.noFill()
    p.stroke(255)
    
    for(let i =0; i<90; i++){
      
      let r = p.map(p.sin(p.frameCount / 2 ), -1, 1, 0, 400)
      let g = p.map(i, 0, 50, 100, 255)
      let b = p.map(p.cos(p.frameCount), -1, 1, 200, 100)
      
     p.stroke(r,g,b)
      
     p.rotate(p.frameCount / 20)
      
      p.beginShape()
      for (let j = 0; j<360; j += 60){
        let rad = i * 4
        let x = rad * p.cos(j)
        let y = rad * p.sin(j)
        let z = p.sin(p.frameCount * 2 + i * 5) * 50
        
        p.vertex(x,y, z)
      }
      p.endShape(p.CLOSE)
    }
  }
}