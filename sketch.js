var w =  h = 1080;
var space = 125;
var offset = 107;
var sizeOff = 0;
var size2Off = 0;
var size3Off = 0;
var cr = 0;
var cg = 0;
var cb = 0;
var xMOff = 0;
var circles = [];
var fills = [];
var circleCountX = (w - 100) / space;
var circleCountY = (h - 100) / space;
var rectSize = 6;

function setup() {
    
    createCanvas(w, h);
    rectMode(CENTER);
    angleMode(DEGREES);
    
    for (let x = 0; x < circleCountY; x++ ) {
        circles[x] = [];
        for (let y = 0; y < circleCountX; y++) {
            circles[x][y] = 0;
        }
    }

    for (let x = 0; x < circleCountY; x++ ) {
        fills[x] = [];
        for (let y = 0; y < circleCountX; y++) {
            fills[x][y] = 0;
        }
    }
}
  
function windowResized() {
   resizeCanvas(w, h);
}

function draw() {
    background(245);
    

    for (let x = 0; x < circleCountY; x++) {
        for(let y = 0; y < circleCountX; y++) {

            let size = map(noise(sizeOff, x, y), 0,1 , 10, 90);
            let size2 = map(noise(size2Off, x, y), 0,1 , 0, 60);
            let size3 = map(noise(size3Off, x, y), 0,1 , -10, 40);
            let r = noise(cr, x, y) * 255;
            let g = noise(cg) * 255;
            let b = noise(cb) * 255; 
            
            smooth();
            noStroke();
            fill(r,g,b);
            ellipse(fills[x][y] + space + offset * x , fills[x][y] + space + offset * y, size, size);
            rect(fills[x][y] + space + offset * x , fills[x][y] + space + offset * y, (size -rectSize), (size - rectSize));


            push();
            fill(255);
            ellipse(fills[x][y] + space + offset * x , fills[x][y] + space + offset * y, size2, size2);
            rect(fills[x][y] + space + offset * x , fills[x][y] + space + offset * y, (size2 -rectSize), (size2 - rectSize));
            pop();

            push();
            fill(r - 80,g - 70,b - 70);
            ellipse(fills[x][y] + space + offset * x , fills[x][y] + space + offset * y, size3, size3);
            rect(fills[x][y] + space + offset * x , fills[x][y] + space + offset * y, (size3 -rectSize), (size3 - rectSize));
            pop();
            
        }
        sizeOff += 0.0004;
        size2Off += 0.0006;
        size3Off += 0.0008;
        cr += 0.0004;
        cg += 0.0006;
        cb += 0.0008;
    }
}