var hr, min, sec;

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(0);  

    translate(400,200)
    rotate(-90)
    hr = hour();
    min = minute();
    sec = second();

    strokeWeight(2);
    stroke(255, 150, 235);
    noFill();
    secAngle = map(sec, 0, 60, 0, 360);

    strokeWeight(8);
    stroke(154, 234, 101);
    minAngle = map(min,0,60,0,360);

    strokeWeight(8);
    stroke(137, 96, 253);
    hrAngle = map(hr %12,0,12,0,360);

    push();
    rotate(secAngle); 
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop()

    push();
    rotate(minAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,85,0);
    pop()

    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,45,0);
    pop()

    stroke("white");
    point(0,0)

    strokeWeight(7);
    noFill();
    
    stroke(255,0,0);
    arc(0,0,300,300,0,secAngle);
    
    strokeWeight(7);
    stroke(0,255,0);
    arc(0,0,280,280,0,minAngle);
    
    strokeWeight(7);
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);
}