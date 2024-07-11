let sx, sy, sw, sh, dx, dy, dw, dh, fibonS;
let timer = 0;
let timer2 = 0;
let posX = 0;
let posY = 0;
let xoff = 0.8;
var diffX = 0;
var diffY = 0;
let chooseArray = 0;
let sourceMaterial = [];
let selectNu, selectNu2;

//fibonacci
var n = 0; // tacka
var c = 4; // skala, dalina tacaka
let posiX, posiY; // gde je

function preload() {
  sourceMaterial[0] = loadImage('data/autic.png');
  sourceMaterial[1] = loadImage('data/blejac.png');
  sourceMaterial[2] = loadImage('data/crveno.png');
  sourceMaterial[3] = loadImage('data/deki.png');
  sourceMaterial[4] = loadImage('data/evomene1.png');
  sourceMaterial[5] = loadImage('data/evomene2.png');
  sourceMaterial[6] = loadImage('data/evomene3.png');
  sourceMaterial[7] = loadImage('data/fank.png');
  sourceMaterial[8] = loadImage('data/fokaca.png');
  sourceMaterial[9] = loadImage('data/kuca.png');
  sourceMaterial[10] = loadImage('data/kuglicy.png');
  sourceMaterial[11] = loadImage('data/lazar.png');
  sourceMaterial[12] = loadImage('data/miza.png');
  sourceMaterial[13] = loadImage('data/nzm.png');
  sourceMaterial[14] = loadImage('data/ovajaja.png');
  sourceMaterial[15] = loadImage('data/ramen.png');
  sourceMaterial[16] = loadImage('data/ribicy.png');
  sourceMaterial[17] = loadImage('data/zabac.png');
  sourceMaterial[18] = loadImage('data/film.png');
  sourceMaterial[19] = loadImage('data/ultra.png');
  sourceMaterial[20] = loadImage('data/buba.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,94,235); 
  
  image(sourceMaterial[20], 0, (windowHeight/2), windowWidth, (windowHeight/2));
  
  //fibonacci 
   angleMode(DEGREES);
 frameRate(5);
  posiX = (windowWidth/2);
  posiY = (windowHeight/2);
}


//PASTE KOPIJU
function copyCat() {
  copy(sx, sy, sw, sh, dx, dy, dw, dh);
}

//PASTE NORMALNU SLIKU
function imgNow() {
  image((sourceMaterial[selectNu2]), sx, sy, dw, dh);
}

//SACUVAJ SLIKU
function keyPressed() {
  if (key == 's') {
    save('fibo_kolaz.png');
  }
}

function draw() {
  noCursor(); //jebes mis
  //KOLAZ RANDOMAJZER
  sx = int(random(0, width));
  sy = int(random(0, height));
  sw = int(random(50, 600));
  sh = int(random(30, 400));
  dx = int(random(-50, (width-50)));
  dy = int(random(-50, (height-50)));
  dw = int(random(20, 200));
  dh = int(random(10, 180));
  
  // FIBO VELICINA SLIKE
  fibonS = int(random(18, 40));


  selectNu = (int(random(0, 16)));
  selectNu2 = (int(random(0, 16)));

  if (key == 'q') {
    selectNu = (int(random(0, 16)));
  }
  if (key == 'w') {
    selectNu = 16;
  }
  //VREMENSKI INTERVAL - tutorijal
  if (millis() >= (1001+timer)) {
    copyCat();
    timer = millis();
  }

  
  
  //fibonacci 
  var a = n * 137.5;
  var r = c * sqrt(n);
  
  var x = r * cos(a) + posiX; // + .... poz start u centru
  var y = r * sin(a) + posiY; // + .... poz start u centru
  image((sourceMaterial[selectNu]), x, y, fibonS, fibonS);
  
//  noStroke();
//  fill(colVal, (colVal/2), colVal);
//ellipse(x, y, 4, 4);

  n++;
  
  if (n == 40) {
    n=0;

    posiX = (random(0, windowWidth));
    posiY = (random((windowHeight/3), windowHeight));
    
    c = int(random(4, 40));
  }
  
}


function mousePressed() {
  //IZABERE RANDOM SLIKU 
  chooseArray = sourceMaterial[selectNu2];

  //STAVI SLIKU
  posX = mouseX;
  posY = mouseY;
}

// CRTAJ BATO
function mouseDragged() {
  diffX = mouseX - posX;
  diffY = mouseY - posY;

  //SLIKA BUM BUM BUM
  image(chooseArray, posX, posY, diffX, diffY);
}
