
var col1;
var col2;
var r = 0;
var b = 255;

var cirkel = {
  x:100,
  y:50,
  diameter:150
};

function setup() {
  createCanvas(600,400);
}

function draw() {

  r = map(mouseX+mouseY,0,1000,0,255)
  b = map(mouseX+mouseY,0,1000,255,0)
background(r,0,b);


  fill(0,0,255,50);
  ellipse(cirkel.x,cirkel.y,cirkel.diameter,cirkel.diameter);

cirkel.x = cirkel.x + 1;
}


function mousePressed() {
background(255,255,0);

}





var speed = 5;
var on = false;
var t = 0;
var g = 1;
var vx = 10;
var vy = 0;
var dt = 1;
var xx = 0;
var yy = 0;


var el = {
  d1:20,
  d2:20
};


var spot = {
  x:100,
  y:50
};
var col = {
  r:255,
  g:0,
  b:0
};
function setup() {
createCanvas(600,400);
background(0);


}

function draw() {
  t = t + dt;

background(0);
xx = vx*t;
yy = 0.5*g*t*t;
  //col.r = random(0,255);
  //col.b = random(0,255);
  //spot.x = random(0,width);
  //spot.y = random(0,height);
  //el.d1 = random(10,200);
  //el.d2 = random(10,200);
  stroke(255);
  strokeWeight(4);
  noFill();
if ((mouseX > (spot.x - 0.5*el.d1)) && (mouseX < (spot.x + 0.5*el.d1)) && (mouseY > (spot.y - 0.5*el.d2)) && (mouseY < (spot.y + 0.5*el.d2))) {

fill(col.r,col.g,col.b);
if (on) {
  background(255,0,0);
} else {  background(0);}
}
var x;
var y;

//for (x=0; x<= mouseX; x +=60) {
//  for (y=0; y<= mouseY; y +=60){
//    fill(col.r,col.g,col.b);
//    ellipse(x,y,el.d1,el.d2);
//  }
//}
ellipse(xx,yy,el.d1,el.d2);

if (yy > 400) {
  dt = dt * -1;
  g = g * -1;}
if (xx < 1) { speed = speed * -1}
}

function mousePressed() {
  on = !on;
}
