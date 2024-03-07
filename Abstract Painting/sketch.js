
let currentkey = '1';
let bgc ;
let gkcount;
let b;
//let value = 0;

function setup() {
    createCanvas(800, 700);
    background(255);
    smooth();
    bgc = color(255);
    gkcount = 30;
    b = loadImage("assets/image/gloomy.png"); 
}


function draw() {
    // triggering the clear_print function
    
    if( keyIsPressed) { 
      clear_print();
    }
    // triggering the newkeychoice
    if(mouseIsPressed) {
     drawChoice();
    }
}

   rect(0,0,20,20); // 4 arg


  //  function rect(lx,ly,w,h) {

   


  //   // magial rectangle

  //  }




      // wrapper function ( no parameters or arguments )
function drawChoice() {
  // the key mapping if statemens that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic function
  // key global variable contains whatever key was last pressed
  let currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // black line
 // let k = color(0);
  drawline1(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '2':
  console.log("2");  // red line
  drawline2(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3':
  console.log("3");  // green line
  drawline3(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
  case '4':
  console.log("4");  // green line
  drawline4(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '5':
  console.log("5");  // fat teal line
  drawline5(color(0), mouseX, mouseY, pmouseX, pmouseY);
  break;
  case '6':
  console.log("6");  // fat teal line
  drawline6(color(160,82,45), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '9':
  console.log("9");  // erase with bg color
  eraser9(bgc,mouseX, mouseY,25);
   break;
case '7':
    console.log("7");  // erase with bg color
    sophiaBrush7(gkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (gkcount > 50 ) {

        gkcount = 1;
    } else {
        gkcount+= .5;
    }
 break;
 case '8':
    console.log("8");  // erase with bg color
    sophiaCrazeBrush8(gkcount, mouseX, mouseY, pmouseX, pmouseY);

    if (gkcount > 50 ) {

        gkcount = 1;
    } else {
        gkcount+= .5;
    }
 break;

default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

}

function drawline1( k,  lx, ly,  px, py) {
  
  strokeWeight(25);
  stroke(65,105,225);
  line(lx, ly, px, py);
  console.log(mouseX);
  console.log(pmouseX);
  
}

function drawline2( k,  lx, ly,  px, py) {
  

  strokeWeight(2);
  stroke(65,105,225);
  triangle(mouseX, mouseY, mouseX, mouseY+400, mouseX-400, mouseY);
  fill(0,100,0);
  //console.log(mouseX);
  //1console.log(pmouseX);
  
}

function drawline3() {
  
  let rr = random(255);
  let rg = random(255);
  let rb = random(255);
  strokeWeight(4);
  stroke(rr,rg,rb);
  fill(218,112,214);
  triangle(mouseX, mouseY, mouseX+100, mouseY+100, mouseX-100, mouseY-100);
  console.log(mouseX);
  console.log(pmouseX);3
  
}

function drawline4() {

  strokeWeight(.5);
  stroke(186,85,211);
  fill(153,50,204);
  triangle(mouseX, mouseY, pmouseX, pmouseY, width/2, height/2);
  console.log(mouseX);
  console.log(pmouseX);3
  
}

function drawline5( k,  lx, ly,  px, py) {
  
  strokeWeight(2);
  stroke(255,240,245);
  circle(mouseX, mouseY, 100);
  fill(178,34,34);
  console.log(mouseX);
  console.log(pmouseX);
  
}

function drawline6( k,  lx, ly,  px, py) {
  strokeWeight(5);
  stroke(k);
  line(lx, ly, px, py);
}

function sophiaBrush7(kcount, lx, ly,  px, py) {

  let rr = random(255);
  let rg = random(255);
  let rb = random(255);
  strokeWeight(random(1,35));
  //strokeWeight(kcount);
  stroke(rr,rg,rb);
  //image(b,lx,ly, 30,30);
  line(lx, ly, px, py);
}

function sophiaCrazeBrush8(kcount, lx, ly,  px, py) {
  //strokeWeight(random(1,35));
  //strokeWeight(kcount);
  //fill(kcount*10,random(20,255),0);
  noStroke();
  image(b,lx,ly, 500,500);
  //rect(lx, ly,30,30,kcount);
}

function eraser9( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz,sz);
}

function clear_print() {

  // these 2 options let you choose between clearing the background
  // and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
    background(255);
  } else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }
  if (key == 't' || key == 'T') {
    background(0);

}
}


// mouseX ==> 100
// mpuseX --> 110  --<pmouseX 100

// mouseX > 100
// mouseX > 110
// pmouseX> 100
// mouseX > 120
// pmouseX> 110
// mouseX > 130
