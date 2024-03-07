let counter1 = 0;
let counter2 = 0;
let counter3 = 0;

function setup() { 
  createCanvas(780, 700);
  background(127);
  noStroke();
}

function draw() { 
  background(0);
  //also parsa
  counter1 += .18;
  counter2 += .18;
  counter3 += .18;
 
  //mine
  for (let i = 0; i < 400; i += 10) {
    for (let j = 0; j < 400; j += 30) {
      let rr = random(255);
      let rg = random(255);
      let rb = random(255);
      fill(rr, rg, rb);
      rect( i-5, j+5, 10, i );
      console.log("this has a greyscale value of" + rr);
    }
  }

  //parsa code 
  for (let i=0; i < height; i+=10) {
    let x = i + random(counter1);
    let y = i + random(counter2);
    let z = i + random(counter3);

    if (counter1 > width) {
      counter1 = -400;
    }
    if (counter2 > height) {
      counter2 = - 400;
    }
    
    fill(x,y,z);
    rect(counter1, i, width, 10);
    rect(i, counter2, 10, height);
    
    fill(z,y,x);
    rect(x, i, width, 10);
    rect(i, y, 10, height);
    console.log(i);
  }



}




