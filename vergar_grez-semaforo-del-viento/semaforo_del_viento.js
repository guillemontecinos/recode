// recode project
// Guillermo Montecinos
// 31 de enero de 2018
// obra: Semáforo del Viento
// artista: Ramón Vergara Grez
// medidas originales: 160x110 cm
// fuente: http://www.ccplm.cl/sitio/catalogola-revolucion-de-las-formas/, pag 108-109

var anchoBarra = 0;
var pendiente = 0;
//puntos para los quads
var a;
var b;
var c;
var d;

function setup(){
  createCanvas(160*6,110*6);
  anchoBarra = width/31;
  pendiente = ((.75*height-anchoBarra)-(height/4+anchoBarra))/(width);
  //seteamos vectores
  a = createVector(0,0);
  b = createVector(0,0);
  c = createVector(0,0);
  d = createVector(0,0);
}

function draw(){
  console.log("mouseX = " + mouseX);
  console.log("mouseY = " + mouseY);
  colorMode(RGB,255);
  background(240);
  for (var i = 0; i < 16; i++) {
    noStroke();
    fill(10);
    // rect(width/15.5*(.25+i),0,width/31,height);
    rect(2*anchoBarra*(.25+i),0,anchoBarra,height);
  }
  // rectángulos
  colorMode(HSB,1);
  // fill(map(mouseX,0,width,0,1),1,map(mouseY,0,height,0,1));
  fill(map(552,0,width,0,1),1,map(405,0,height,0,1));
  //rect1
  rect(0,0,width/2,height/4);
  //rect2
  a.set(0,height/4+anchoBarra);
  b.set(width/2,height/2);
  c.set(width/2,height*3/4);
  d.set(0,height*7/8);
  quad(a.x,a.y,b.x,b.y,c.x,c.y,d.x,d.y);
  //rect3
  a.set(width,height/8);
  b.set(width,.75*height-anchoBarra);
  c.set(width/2+anchoBarra,pendiente*(width/2+anchoBarra)+(height/4+anchoBarra));
  d.set(width/2+anchoBarra,height/4);
  quad(a.x,a.y,b.x,b.y,c.x,c.y,d.x,d.y);
  //rect4
  rect(anchoBarra+width/2,3*height/4,width,height);
  //línea referencial
  // stroke(0);
  // line(0,height/4+anchoBarra,width,(.75*height-anchoBarra));
}
