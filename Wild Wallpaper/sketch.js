
function setup() { 
  createCanvas(780, 700);
  background(0);
  rectMode(CENTER);
  noStroke();
  frameRate(10);
  for (let i=0; i < height; i+=30) {
    fill(224,224,224);
    ellipse(i, i, width, 10);
    fill(143,188,143);
    ellipse(i, 0, 10, height);
    console.log(i);
  }
}

function draw() {

  for (let i = 0; i < 800; i += 30) {
    for (let j = 0; j < 200; j += 10) { 
      let rr = random(255);
      let rg = random(255);
      let rb = random(255);
      //rand = random(255);
      fill(rr,rg,rb);
      ellipse( i+5, j+5, 10, 10 );
      console.log("this has a greyscale value of"+ rr);
    }
  }

  for (let i=0; i < height; i+=20) {
    let rr = random(255);
    let rg = random(255);
    let rb = random(255);
    fill(rr, rg, rb);
    rect(600, 200, width, 200);
    rect(i/2, 800, 2, 600);
    console.log(i);
  }

  let r = random(30);
  let x1 = mouseX;
  let y1 = mouseY
  console.log(x1 + " " + r);
  if (x1 < 250)  {
    let rr = random(255);
    let rg = random(255);
    let rb = random(255);
    fill(rr, rg, rb);
    ellipse(x1, y1, r * 5, r * 2);
  } else {
    rect(x1, y1, r * 2, r * 5);
  }

  if (mouseY < 200) {
  
    fill(255,0,0,90);
    triangle(mouseX,y1,mouseX-50,y1+30,mouseX+50,y1+50);

  }  else {
    
    for (let i = 0; i < mouseX; i += 20) {
      r3 = random(100);
      fill(200,100,0,r3);
      rect( i+5, y1, 10, 10 );
      console.log("r3 = " + r3);
     }

    fill(255,120,0,50);
    ellipse(mouseX,y1,30,30);

  }

}

