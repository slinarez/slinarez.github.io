var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "L1" ;
var img1, img2, img3;

function preload() {

  img1 = loadImage('https://slinarez.github.io/images/backyard.jpg');
  img2 = loadImage('https://slinarez.github.io/images/charlie.png'); 
  img3 = loadImage('https://slinarez.github.io/images/bone.png');

}


function setup() {
createCanvas(600,600);
textAlign(CENTER);
textSize(20);

}//end of setup


function draw() {
  
  background(img1);
  
  if(gameState == "L1"){
  levelOne();
  }
  
  if(gameState == "L2") {
    levelTwo();
  }
  
  if(gameState == "L3"){
    levelThree();
  }
  
  if(gameState =="Win"){
    background(50);
  win();
  }
  
  text(("Score: " + score), width/2, 40);

}//end of draw

function levelOne() {
  
  text("Level 1", width/2, height-20);
 
  var disToBall = dist(ballx,bally,mouseX,mouseY);
  if(disToBall < ballSize/2){
  ballx = random(width);
  bally = random(height);
  score = score + 1;
  }
  
  if(score >= 5){
  gameState = "L2";
  
  }
  
  line(ballx,bally,mouseX,mouseY);
  //ellipse(ballx,bally,ballSize,ballSize);
  image(img3, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  image(img2, mouseX, mouseY, ballSize, ballSize);
 
}//end of level one



function levelTwo() {
  
  text("Level 2", width/2, height-20);
  var disToBall = dist(ballx,bally,mouseX,mouseY);
  if(disToBall < ballSize/2){
  ballx = random(width);
  bally = random(height);
  score = score + 1;
  }
  
  if(score > 10){
  gameState = "L3";
  
  }
  
  //line(ballx,bally,mouseX,mouseY);
  image(img3, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  image(img2, mouseX, mouseY, ballSize, ballSize);
 
}//end of level two

function levelThree() {
  
  text("Level 3", width/2, height-20);
  var disToBall = dist(ballx,bally,mouseX,mouseY);
  if(disToBall < ballSize/2){
  ballx = random(width);
  bally = random(height);
  score = score + 1;
  ballSize = ballSize -5;
  }
  
  if(score > 15){
  gameState="Win";
  
  }
  
  //line(ballx,bally,mouseX,mouseY);
  image(img3, ballx-ballSize/2, bally-ballSize/2, ballSize, ballSize);
  image(img2, mouseX, mouseY, ballSize, ballSize);
 
}//end of level three

function win(){
  background(img1);
  text("You Won, Charlie is now full :)", width/2, height-20);
} // end win
