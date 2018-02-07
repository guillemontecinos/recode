// recode project
// Guillermo Montecinos
// 7 de febrero de 2018
// obra: "Japanese Poster: Morisawa"
// artista: John Maeda
// año: 1996
// medidas originales: assumed
// fuente: https://www.pinterest.cl/pin/33917803427367153/

var font;
var texto = "CODED";
var size;
var originalSize;
var boxes;
var rows = 150;

function preload(){
  font = loadFont('./assets/helvetica.otf');
}

function setup(){
  createCanvas(150*5,150*6);
}

function draw(){
  boxes = [];
  background(240);
  // console.log(mouseX);
  // originalSize = mouseX;
  originalSize = 210;
  size = originalSize;
  boxes[0] = font.textBounds(texto,0,0,size);
  // primer texto
  push();
  noFill();
  // rect(0,0,boxes[0].w,boxes[0].h);
  translate(0,boxes[0].h);
  textFont(font);
  textSize(size);
  fill(0);
  text(texto,0,0);
  pop();
  // siguientes textos
  // var verticalShift = boxes[0].h;
  var verticalShift = 0;
  for(var j = 1; j < rows; j++){
    verticalShift += boxes[j-1].h;
    // size = size/(2);
    size = originalSize/(1+j);
    boxes.push(font.textBounds(texto,0,0,size));
    var aux = 0;
    // for (var i = 0; i < pow(2,j); i++) {
    for (var i = 0; i < j+1; i++) {
      // rect(i*boxes[j].w,verticalShift,boxes[j].w,boxes[j].h);
      push();
      translate(i*boxes[j].w,verticalShift + boxes[j].h);
      textSize(size);
      fill(0);
      text(texto,0,0);
      pop();
    }
  }


}
