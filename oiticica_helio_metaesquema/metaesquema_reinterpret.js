// recode project
// Guillermo Montecinos
// 3 de febrero de 2018
// obra: Metaesquema
// artista: Hélio Oiticica
// año: 1958
// medidas originales: 550 x 639 mm
// fuente: http://www.tate.org.uk/art/artworks/oiticica-metaesquema-t12419

var wRect;
var hRect;

function setup(){
  createCanvas(64*14,55*14);
  colorMode(HSB,1);
  rectMode(CENTER);
  wRect = width*.8/4;
  hRect = height*.8/4;

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
      translate(width*.1 + wRect/2 + i*wRect, height*.1 + hRect/2 + j*hRect);
      if (counter%2 != 0) {
        rotate(random(-PI/20,PI/90));
      }
      rect(0,0,wRect,hRect);
      pop();
      counter++;
    }
    counter--;
  }
}
