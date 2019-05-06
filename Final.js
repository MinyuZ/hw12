
let img;
let y=-90;

function preload() {
  img = loadImage('assets/cuckoo-02.png');
  cuckoo = loadSound('assets/cuckoo.mp4');
}

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
  rectMode(CENTER);
  fill('#ED225D');  
  }

function draw() {
  background(200);
  fill(255);
  stroke(0);
  strokeWeight(4);
  ellipse(300, 300, 560, 560);
  
  for (let i=59; i>=0; i--){ 
    if(i<second()){
    stroke(255-i*3,230,10);
    strokeWeight(8);
    line(300,300,300-270*cos(y),270*sin(y)+300);
    }
    else if(i>=second()) {
    stroke(200);
    strokeWeight(8);
    line(300,300,300-270*cos(y),270*sin(y)+300);
  }
    y = y + 6;
 }

  fill(255);
  noStroke();
  
  ellipse(300,300,520,520);
  
  fill(0);
  rect(295,312,340,88);
  
  fill(255);
  textFont('Georgia'); 
  textSize(72); 
  if(hour()>9) {
  text(hour(), 140, 330)
  }
  else if(hour()<=9) {
  text('0',135,330)
  text(hour(), 180,330)
  }
  text(":", 230, 330);
  if(minute()>9) {
  text(minute(), 260, 330)
  }
  else if(minute()<=9) {
  text('0', 260, 330);
  text(minute(), 300, 330) 
  }
  text(':', 345, 330);
  if(second()>9) {
  text(second(), 370, 330)
  }
  else if(second()<=9) {
  text('0', 370, 330);
  text(second(), 410,330)
  }
  
  fill(0);
  beginShape();
  vertex(300,40);
  vertex(250,90);
  vertex(250,180);
  vertex(350,180);
  vertex(350,90);
  endShape();
  
  if(mouseIsPressed){

  if (cuckoo.isPlaying()) {
  cuckoo.stop();
  }
  image(img, 240,70);
  cuckoo.play();
  }
  
  
  
  
}

