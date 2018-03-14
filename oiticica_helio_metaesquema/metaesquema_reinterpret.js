// recode project
// Guillermo Montecinos
// 3 de febrero de 2018
// obra: Metaesquema
// artista: Hélio Oiticica
// año: 1958
// medidas originales: 550 x 639 mm
// fuente: http://www.tate.org.uk/art/artworks/oiticica-metaesquema-t12419

var wRect; //declaración de variable que contiene el ancho de cada rectángulo
var hRect; //declaración de variable que contiene el alto de cada rectángulo

function setup(){
  createCanvas(64*14,55*14); //creamos canvas
  colorMode(HSB,1); //decinimos modo de color HSB, con escala {0,1}
  rectMode(CENTER); //definimos modo de rectángulo centrado
  wRect = width*.8/4; //asignamos valor a variable ancho y alto de rectángulo
  hRect = height*.8/4;

}

function draw(){
  randomSeed(100); //función semilla establece una lista de valores aleatorios
  console.log("Hue Back: " + map(94,0,width,0,1));
  console.log("Sat Back: " + map(339,0,height,0,1));
  // background(map(mouseX,0,width,0,1), map(mouseY,0,height,0,1),1);
  background(map(94,0,width,0,1), map(339,0,height,0,1),map(618,0,height,0,1)); //pintamos el fondo con colores calculados a partir del mapeo de mouseX y mouse Y
  noStroke(); //retángulos sin borde
  fill(map(540,0,width,0,1), 1,map(384,0,height,0,1)); //pintamos rectángulo
  var counter = 0; //contador para enumerar rectángulos
  for (var i = 0; i < 4; i++) { //for loop anidados recorren la cuadrícula
    for (var j = 0; j < 4; j++) {
      push(); //fijar sistema cartesiano (matriz)
      translate(width*.1 + wRect/2 + i*wRect, height*.1 + hRect/2 + j*hRect); //trasladamos cada rect desde (0,0) hasta su posición definitiva
      if (counter%2 != 0) { //el operador módulo '%' devuelve un '0' cuando el counter es par
        rotate(random(-PI/20,PI/90));
      }
      rect(0,0,wRect,hRect);
      pop();
      counter++; //incrementamos contador al avanzar a la derecha
    }
    counter--; //decrementamos el contador al pasar a la siguiente línea para que el último rect de la derecha esté rotado igual que el primero de la línea siguiente
  }
}
