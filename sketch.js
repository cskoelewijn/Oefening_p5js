let bubbles = [];



function setup(){
  createCanvas(600,400);
  for (let i = 0; i < 4; i ++){
    let x = random(width);
    let y = random(height);
    let r = random(10,60);

    bubbles[i] = new bubble(x,y,r);

  }

}


function mousePressed(){
  for (let i = bubbles.length-1; i >= 0; i--) {
    if (bubbles[i].contains(mouseX,mouseY)){
      bubbles.splice(i,1);
    } // end if
  } // end for
} // end function


function draw() {
  background(0);

  for (let i = 0; i < bubbles.length; i++){
    bubbles[i].show();
    bubbles[i].move();
    let overlapping = false;
    for (let j = i; j < bubbles.length; j++){
      if (j !== i && (bubbles[i].intersects(bubbles[j])) || (bubbles[i].contains(mouseX,mouseY))) {
        overlapping = true;
      }
    }
    if (overlapping) {
      bubbles[i].changeColor(255);
    }else{
      bubbles[i].changeColor(0);}

  } // end for

}

class bubble {
    constructor(x,y,r=40) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.brightness = 0;
    }

    changeColor(bright){
      this.brightness = bright;
    }

    contains(x,y){
      let d = dist(x,y,this.x,this.y);
      return (d < this.r);   //  is true of false
    }

    move(){
      this.x = this.x + random(-5,5);
      this.y = this.y + random(-5,5);
      if (this.x > width-this.r) { this.x = this.x - 5};
      if (this.x < 0+this.r) { this.x = this.x + 5};
      if (this.y > height-this.r) { this.y = this.y - 5};
      if (this.y < 0+this.r) { this.y = this.y + 5};
    }

    show(){
      stroke(255);
      strokeWeight(4);
      fill(this.brightness, 100);
      ellipse(this.x, this.y, this.r*2);
    }

    intersects(other){
      let d = dist(this.x,this.y,other.x,other.y);
      return (d < this.r+other.r)
    }
}
