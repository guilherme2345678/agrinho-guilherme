var img;

function preload(){
  img = loadImage("imagem.png");
}

function setup() {
  createCanvas(850, 600);
}

function draw() {
  //usando a imagem como fundo
  background(img);
}
