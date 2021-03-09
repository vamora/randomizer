let mic;
let micLevel;
let pupilX;
let pupilY;
let noseJump;

function setup() {
  createCanvas(400, 400);
  background(161, 247, 228);
  angleMode(DEGREES);
  
  let pupilX = map(mouseX, 0, 400, -3, 3);
  let pupilY = map(mouseY, 0, 400, -3, 3);
  let noseJump = map(mouseY, 0, 400, -5, 5);
  
  mic = new p5.AudioIn();
  mic.start();
  
  drawHead();
  drawEarCut();
  drawEarFull();
  drawFill();
  drawEyes();
  //drawNose();
  // drawLeftPupil();
  // drawRightPupil();
}

function draw() {

    console.log("mic level " + mic.getLevel());
//   console.log("mouse x is: " + mouseX);
//   console.log("mouse y is: " + mouseY);
  
  //pupils rotate to follow cursor
  // pupilX = map(mouseX, 0, 400, -3, 3);
  // pupilY = map(mouseY, 0, 400, -3, 3);
  
  micLevel = mic.getLevel();
  
  pupilX = map(mic.getLevel(), 0, .3, -3, 3);
  pupilY = map(mic.getLevel(), 0, .3, -3, 3);
  
  noseJump = map(mic.getLevel(), 0, .3, -5, 5);
  
  drawHead();
  drawEarCut();
  drawEarFull();
  drawFill();
  drawEyes();
  drawNose();
  drawLeftPupil();
  drawRightPupil();
}


function drawHead(){
  noStroke();
  fill(255);
  beginShape();
  vertex(width * .20, height * .30);
  vertex(width * .80, height * .30);
  vertex(width * .80, height * .65);
  vertex(width * .50, height * .80);
  vertex(width * .20, height * .65);
  vertex(width * .20, height * .30);
  endShape();
}

function drawEarCut(){
  noStroke();
  beginShape();
  fill(0);
  vertex(width * .20, height * .30);
  vertex(width * .20, height * .20);
  vertex(width * .30, height * .20);
  vertex(width * .40, height * .30);
  vertex(width * .20, height * .30);
  endShape();
}

function drawEarFull(){
  noStroke();
  beginShape();
  fill(0);
  vertex(width * .60, height * .30);
  vertex(width * .80, height * .10);
  vertex(width * .80, height * .30);
  vertex(width * .60, height * .30);
  endShape();
}

function drawFill(){
  // draw left black fill
  noStroke();
  beginShape();
  fill(0);
  vertex(width * .20, height * .65);
  vertex(width * .20, height * .30);
  vertex(width * .50, height * .30);
  vertex(width * .425, height * .475);
  vertex(width * .20, height * .65);
  endShape();
  // draw right black fill
  beginShape();
  fill(0);
  vertex(width * .80, height * .65);
  vertex(width * .80, height * .30);
  vertex(width * .50, height * .30);
  vertex(width * .575, height * .475);
  vertex(width * .80, height * .65);
  endShape();
}

function drawEyes(){
  fill(255, 234, 158);
  stroke(0);
  strokeWeight(4);
  // draw left eye
  circle(width * .375, height * .50, width * .125);
  // draw right eye
  circle(width * .625, height * .50, width * .125);
}

function drawNose(){
  beginShape();
  stroke(255, 206, 211);
  fill(255, 206, 211);
  vertex(width * .475, height * .625 + noseJump);
  vertex(width * .525, height * .625 + noseJump);
  vertex(width * .50, height * .65 + noseJump);
  vertex(width * .475, height * .625 + noseJump);
  endShape();
}

function drawLeftPupil(xPos, yPos, rotation){
  fill(0);
  stroke(0);
  push();
  ellipseMode(CENTER);
  circle(width * .375 + pupilX, height * .50 + pupilY, width * .08);
  pop();
 
}

function drawRightPupil(){
  fill(0);
  stroke(0);
  push();
  ellipseMode(CENTER);
  circle(width * .625 + pupilX, height * .50 + pupilY, width * .08);
  pop();
}

//1.2 Update_Fixed color problem by including fill in each shape function . Pupils and nose move in response to sound-- eyes vertically from side to side and nose up and down.  