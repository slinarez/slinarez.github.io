
let bgcounter = 0;
let counter = 0;
let counterG = 0;
let counterR = 0;
let f; 
let value = 0; 
let purpOn = false;


function preload() {
f = loadFont('assets/font/Prida65.otf'); 
}


function setup() {
  createCanvas(1000, 1000);
  background(255);
  //frameRate(10);
  counterR = height;
  textFont(f);

 
}

function draw() {

    //fbackground(255-value); 
    fill(value); 
    ellipse(width/2, height/2, 100, 100);       
   
    if (mouseIsPressed && purpOn) {  // tests true or false
      console.log("show that purple");
      fill(255,0,255);
      let r = random(100,width-10);
      ellipse(width/2, height/2, r, r);
    }


  //background(0,15);
  if ( mouseIsPressed && keyIsPressed == true )  {
    textSize((counterR)/2.5);
    textAlign(CENTER);
    fill(255, 0, 0);
    text("AAAHHAHAHAHAHA ", width/2, counterR);
    counterR-=3.5;
    if (counterR < -50) {
      counterR = height;
    }
    
  } else  {
  
  textSize((counterG+30)/3);
  textAlign(CENTER);
  fill(220,20,60);
  text("My Tummy Hurts", width/2, counterG);

  counterG +=1.5;
    if (counterG > width) {
      counterG = -30;
    }

  }

  fill(220,220,220);
  rect(40, counter, width - random(40), 10);
  fill	(0,0,0);
  rect(counter, 20, 50, height - random(40));

  if (counter > height) {
      background(bgcounter);
      bgcounter+=3;
      counter = 0;
      } else {
      counter+=20;
      }
      }

function keyPressed() { 


        if ( key == 'b' || key == 'B' ) { 
          // example of toggle logic 
          if (value == 0) { 
            value = 255;
          } else { 
            value = 0;
          }
        }

        if (  (key == 'p' || key == 'P') ) {
         purpOn = true;    
        }

        if (  (key == 'x' || key == 'X' || key == " ") ) {
          purpOn = false;    
         }


      }