// recode project
// Guillermo Montecinos
// 2 de febrero de 2018
// obra: Not Found NA_black_and_yellow_circles
// artista: Cármen Herrera
// año: Not Found
// medidas originales: Not Found
// fuente: https://www.pinterest.cl/pin/5629568263867090/
// dimensions were assumed

var diamGrande;
var yellow;

function setup(){
  createCanvas(windowWidth,windowHeight);
  colorMode(HSB,1);
  yellow = color(map(190,0,1399,0,1),map(726,0,780,0,1),1);
  diamGrande = 3*height/4;
}

function draw(){
  console.log("mouseX = " + mouseX);
  console.log("mouseY = " + mouseY);
  console.log("wW = " + width);
  console.log("wH = " + height);
  background(0,0,1);
  //arcos del fondo
  noStroke();
  for (var i = 0; i < 4; i++) {
    if(i%2 == 0){
      fill(0,0,0);
    }
    else {
      fill(yellow);
    }
    push();
    translate(width/2,height/2);
    rotate(i*PI/2);
    arc(0,0,diamGrande,diamGrande,3*PI/2,0,PIE);
    pop();
  }
  for (var i = 0; i < 2; i++) {
    //arcos pequeños
    push();
    // A5 y A8
    translate(width/2,height/2-diamGrande/4);
    // these translate and rotate are for A7 and A8
    translate(0,i*diamGrande/2);
    rotate(i*PI);
    fill(yellow);
    arc(0,0,diamGrande/2,diamGrande/2,3*PI/2,PI/2);
    // A6 y A7
    rotate(PI);
    fill(0,0,0);
    arc(0,0,diamGrande/2,diamGrande/2,3*PI/2,PI/2);
    pop();
  }
}
