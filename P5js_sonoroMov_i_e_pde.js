
/*
Based on code from beginContour() reference
 https://p5js.org/reference/#/p5/beginContour
 */
/*
 Alterado por Rodrigo Rezende em 08/2020
 para servir de base na obra SonoroMov(i)e V1.0
 */
//====================================================//

let px, py = 0;

let Npress, press, n = 0;

let l3, c3, l2, c2, l1, c1 = 0;
let qy8, qx8, qy7, qx7, qy6, qx6, qy5, qx5, qy4, qx4, qy3, qx3, qy2, qx2, qy1, qx1, qy0, qx0 =0;
let l3N, c3N, l2N, c2N, l1N, c1N = 0;

let cImgFx =0;

let revealSizeX = 0;
let revealSizeY = 0;
let img;

function preload() {
  img = loadImage('http://rodrigorez.github.io/SonoroMov_i_e/img/img.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();

  c1 = (windowWidth/3);    // and dimensions
  l1 = (windowHeight/3);
  c2 = (windowWidth/3);    // and dimensions
  l2 = (windowHeight/3);
  c3 = (windowWidth/3);    // and dimensions
  l3 = (windowHeight/3);

  c1N = c1;
  l1N = l1;
  c2N = c2;
  l2N = l2;
  c3N = c3;
  l3N = l3;

  upPosi();

  // thicker stroke = easier to see
}

function draw() {
  image(img, 0, 0, windowWidth, windowHeight);
  revealSizeX = windowWidth/12;
  revealSizeY = windowHeight/12;
  strokeWeight(0);
  fill(0);
  // update point to mouse coordinates
  px = mouseX;
  py = mouseY;
  translate(px, py);
  beginShape();
  // Exterior part of shape, clockwise winding
  vertex(-windowWidth, -windowHeight);
  vertex(windowWidth, -windowHeight);
  vertex(windowWidth, windowHeight);
  vertex(-windowWidth, windowHeight);
  // Interior part of shape, counter-clockwise winding
  beginContour();
  vertex(-revealSizeX, -revealSizeY);
  vertex(-revealSizeX, revealSizeY);
  vertex(revealSizeX, revealSizeY);
  vertex(revealSizeX, -revealSizeY);
  endContour();
  endShape(CLOSE);

  press=Npress;

  upPosi();

  //check for collision
  //if hit, change rectangle color

  colidPinta(px, py, qx0, qy0, c1, l1, 0);//q0
  colidPinta(px, py, qx1, qy1, c2, l1, 1);//q1
  colidPinta(px, py, qx2, qy2, c3, l1, 2);//q2
  colidPinta(px, py, qx3, qy3, c1, l2, 3);//q3
  colidPinta(px, py, qx4, qy4, c2, l2, 4);//q4
  colidPinta(px, py, qx5, qy5, c3, l2, 5);//q5
  colidPinta(px, py, qx6, qy6, c1, l3, 6);//q6
  colidPinta(px, py, qx7, qy7, c2, l3, 7);//q7
  colidPinta(px, py, qx8, qy8, c3, l3, 8);//q8

  // draw the point
  //strokeWeight(5);
  //stroke(127);
  //point(pmx, pmy);

  c1 = c1N;
  l1 = l1N;
  c2 = c2N;
  l2 = l2N;
  c3 = c3N;
  l3 = l3N;

  if (press == Npress) {
    imgFx(cImgFx);
  } else {
    cImgFx = int(random(0, 6));
    mudaTot();
  }
  if (mouseIsPressed) {
    mudaTot();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
