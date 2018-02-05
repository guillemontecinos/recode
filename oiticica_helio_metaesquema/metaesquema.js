// recode project
// Guillermo Montecinos
// 3 de febrero de 2018
// obra: Metaesquema
// artista: Hélio Oiticica
// año: 1958
// medidas originales: 550 x 639 mm
// fuente: http://www.tate.org.uk/art/artworks/oiticica-metaesquema-t12419

var alphaMain = [.3,.2,.2,.3]; //ponderador principal que define los tamaños de los rectángulos
var posX = [];
var posY = [];

function setup(){
  createCanvas(64*14,55*14);
  colorMode(HSB,1);
  rectMode(CENTER);
  posX[0] = width*(.1 + .8 * alphaMain[0]/2);
  posY[0] = height*(.1 + .8 * alphaMain[0]/2);
  for (var i = 1; i < 4; i++) {
    for (var j = 1; j < 4; j++) {
      posX[i] = posX[i-1] + width*.8/2*(alphaMain[i-1] + alphaMain[i]);
      posY[j] = posY[j-1] + height*.8/2*(alphaMain[j-1] + alphaMain[j]);
    }
  }
}

function draw(){
  randomSeed(100);
  console.log("mouseX: " + mouseX);
  console.log("mouseY: " + mouseY);
  // background(map(mouseX,0,width,0,1), map(mouseY,0,height,0,1),1);
  background(map(94,0,width,0,1), map(339,0,height,0,1),map(618,0,height,0,1)); //Corregir
  noStroke();
  fill(map(540,0,width,0,1), 1,map(384,0,height,0,1));
  var counter = 0;
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      push();
      translate(posX[i],posY[j]);
      if (counter%2 != 0) {
        // rotate(random(-PI/20,PI/20));
        rotate(random(-PI/20,0));
        rect(0,0,width*.8*alphaMain[i]*random(.94,.95),height*.8*alphaMain[j]*random(.95,1.05));
      }
      else {
        rect(0,0,width*.8*alphaMain[i],height*.8*alphaMain[j]);
      }
      pop();
      counter++;
    }
    counter--;
  }
}
