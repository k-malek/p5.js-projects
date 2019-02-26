function setup() {
  createCanvas(400, 400, WEBGL);
  naped=30;
  naped2=30
  naped3=30;
  naped4=30;
  skalaObr=0.04;
  skalaObr2=0.05;
  skalaObr3=0.01;
  skalaObr4=0.03;
}
function draw() {
  background(20);
  x=sin(naped)*150;
  y=cos(naped)*150;
  z=sin(naped)*(-50);
  fill(255,255,0)
  noStroke();
  sphere(70);
  fill(0,0,255)
  translate(x,z,y);
  sphere(5);
  translate(-x,-z,-y); 
  x=sin(naped2)*80;
  y=cos(naped2)*80;
  z=sin(naped2)*(-50);
  fill(255,120,0)
  translate(x,z,y);
  sphere(2);
  translate(-x,-z,-y); 
  x=sin(naped3)*120;
  y=cos(naped3)*120;
  z=sin(naped3)*(-50);
  fill(255, 153, 51)
  translate(x,z,y);
  sphere(10);
  translate(-x,-z,-y); 
  x=sin(naped4)*190;
  y=cos(naped4)*190;
  z=sin(naped4)*(-50);
  fill(255, 0, 0)
  translate(x,z,y);
  sphere(4);
  naped+=1*skalaObr;
  naped2+=1*skalaObr2;
  naped3+=1*skalaObr3;
  naped4+=1*skalaObr4;
  if (mouseIsPressed) 
  {
    naped+=1*skalaObr;
    naped2+=1*skalaObr2;
    naped3+=1*skalaObr3;
  	naped4+=1*skalaObr4;
  }
}