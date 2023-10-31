function setup() {  
 createCanvas(600,600);
}


function draw() {
background(220, 204, 200); // Dark blue color
circle(380,400,135);//hair
circle(190,400,135);//hair
fill(0,0,0);//bod
ellipse(300,600,330,400);//bod
fill(235,190,150);//skin
ellipse(300,275,300,333);//head
fill(235,180,150);
circle(280,325,10);
fill(255, 255, 255); //eye - white
ellipse(235,255,50,30);//left eye
 fill(10,10,10);//pupil color
ellipse(230,255,25,30);//left pupil
fill(255, 255, 255); //eye - white
ellipse(335,255,50,30);//right eye
fill(10,10,10);//pupil color
ellipse(330,255,25,30);//right pupil
line(240, 367, 340,367);//mouth
fill(255, 71, 71); // red
arc(280, 367, 50, 50, 0, PI);//:p
fill(48, 4, 4);
beginShape()//eyebrow
vertex(310, 210);
vertex(310, 220);
vertex(390,220);
endShape();
beginShape()//eyebrow
vertex(260, 210);
vertex(260, 220);
vertex(190,220);
endShape();

fill(48, 4, 4); // hair color
circle(275,90,70);
circle(320,90,70);
circle(200,160,100);
circle(240,120,100);
circle(249,170,10);
circle(300,96,40);
circle(360,120,100);
circle(400,160,100);
circle(349,170,10);
circle(165,190,125);
circle(420,190,125);
circle(467,230,135);
circle(120,230,135);
circle(120,280,135);
circle(120,380,135);
circle(467,380,135);
circle(467,280,135);
circle(467,500,135);
circle(120,500,135);
beginShape()//hair
vertex(300, 110);
vertex(250, 220);
vertex(150,300);
endShape();
beginShape()
vertex(300,110);
vertex(350,220);
vertex(450,300)
endShape();
}
