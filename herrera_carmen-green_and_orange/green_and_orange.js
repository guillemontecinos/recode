// recode project
// Guillermo Montecinos
// 1 de febrero de 2018
// obra: Green & Orange
// artista: Cármen Herrera
// año: 1958
// medidas originales: 152.4x182.9 cm
// fuente: https://whitney.org/Exhibitions/CarmenHerrera#artworks-4

function setup(){
  createCanvas(180*5,150*5);
  colorMode(HSB,1);
}

function draw(){
  console.log("mouseX = " + mouseX);
  console.log("mouseY = " + mouseY);
  // background(map(mouseX,0,width,0,1),map(mouseY,0,height,0,1),1);
  background(map(47,0,width,0,1),map(593,0,height,0,1),1);
  // barras verdes
  noStroke();
  // fill(map(mouseX,0,width,0,1),1,map(mouseY,0,height,0,1));
  fill(map(361,0,width,0,1),1,map(434,0,height,0,1));
  rect(0,height/5,width,height/5);
  rect(0,3*height/5,width,height/5);
  //t1
  triangle(0,0,height*(6.3/14.7),height,0,height);
  // t2
  fill(map(47,0,width,0,1),map(593,0,height,0,1),1);
  push();
  translate(width,height);
  rotate(PI);
  triangle(0,0,height*(6.3/14.7),height,0,height);
  pop();

}
