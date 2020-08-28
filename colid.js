function  colidPinta(px, py, rx, ry, rw, rh, n) {
  // is the point inside the rectangle's bounds?
  if (px >= rx &&        // right of the left edge AND
    px <= rx + rw &&   // left of the right edge AND
    py >= ry &&        // below the top AND
    py <= ry + rh) {   // above the bottom
    // muda cor
    //fill(255, 150, 0);
    Npress=n;
  } else {
    //fill(0, 150, 255);
  }
  // desenha rectangulo
  //rect(rx, ry, rw, rh); //desenha retangulo
}

function  upPosi() {
  qx0 = 0;    // square position
  qy0 = 0;
  qx1 = c1;    // square position
  qy1 = 0;
  qx2 = c1+c2;    // square position
  qy2 = 0;
  qx3 = 0;    // square position
  qy3 = l1;
  qx4 = c1;    // square position
  qy4 = l1;
  qx5 = c1+c2;    // square position
  qy5 = l1;
  qx6 = 0;    // square position
  qy6 = l1+l2;
  qx7 = c1;    // square position
  qy7 = l1+l2;
  qx8 = c1+c2;    // square position
  qy8 = l1+l2;
}

//mouse press muda tamanho retangulo
//function  mousePressed() {
//  mudaTot();
//}

function  mudaTot() {
  //c columas //l linhas
  c1N = random((windowWidth/6), (windowWidth/2));
  c2N = random(c1N, (windowWidth/3));
  c3N = windowWidth - c2N;
  l1N = random((windowHeight/6), (windowHeight/2));
  l2N = random(l1N, (windowHeight/3));
  l3N = windowHeight - l2N;
}
