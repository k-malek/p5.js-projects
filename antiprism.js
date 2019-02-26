function setup() {
  createCanvas(1000, 600,WEBGL);
  obrotX=1.5;
  obrotY=-3.12;
  obrotZ=-1.6;
  skalaObr=0.05;
  
  A = new Pkt(-100,-100,100);
  B = new Pkt(100,-100,100);
  C = new Pkt(100,100,100);
  D = new Pkt(-100,100,100);
  
  E = new Pkt(0,-141.42,-68.17);
  F = new Pkt(141.42,0,-68.17);
  G = new Pkt(0,141.42,-68.17);
  H = new Pkt(-141.42,0,-68.17);
  
  Br = new Pkt(100,-100,100);
  Dr = new Pkt(-100,100,100);
  Er = new Pkt(0,-141.42,-68.17);
  Er2 = new Pkt(0,-141.42,-68.17);
  Fr = new Pkt(141.42,0,-68.17);
  Fr2 = new Pkt(141.42,0,-68.17);
  Gr = new Pkt(0,141.42,-68.17);
  Gr2 = new Pkt(0,141.42,-68.17);
  Gr3 = new Pkt(0,141.42,-68.17);
  Hr = new Pkt(-141.42,0,-68.17);
  
  kwadrat1=new Kwadrat(A,B,C,D);
  kwadrat2=new Kwadrat(Er,Fr2,Gr,Hr);
  
  trojkat1=new Trojkat(A,Br,Er);
  trojkat2=new Trojkat(B,C,Fr);
  trojkat3=new Trojkat(C,Dr,Gr3);
  trojkat4=new Trojkat(D,A,Hr);
  
  trojkat5=new Trojkat(Er,Hr,A);
  trojkat6=new Trojkat(Er2,Fr,B);
  trojkat7=new Trojkat(Fr,Gr3,C);
  trojkat8=new Trojkat(Gr2,Hr,D);
  //otworz();
  //console.log(Fr2.z);
  flag=0;
}

function draw() {
  background(220);
  fill(255,132,0);
  
  rotateX(obrotX);
  rotateY(obrotY);
  rotateZ(obrotZ);
  
  kwadrat1.show();
  kwadrat2.show();
  
  trojkat1.show();
  trojkat2.show();
  trojkat3.show();
  
  trojkat4.show();
  trojkat5.show();
  trojkat6.show();
  trojkat7.show();
  trojkat8.show();
}

function Pkt(_x,_y,_z)
{
  this.x=_x;
  this.y=_y;
  this.z=_z;
}

function Kwadrat(a,b,c,d)
{
  this.a=a;
  this.b=b;
  this.c=c;
  this.d=d;
	Kwadrat.prototype.show=function()
  {
    fill(0,234,123);
    beginShape();
    vertex(this.a.x,this.a.y,this.a.z);
    vertex(this.b.x,this.b.y,this.b.z);
    vertex(this.c.x,this.c.y,this.c.z);
    vertex(this.d.x,this.d.y,this.d.z);
    endShape(CLOSE);
  }
}
function Trojkat(e,f,g)
{
  this.e=e;
  this.f=f;
  this.g=g;
	Trojkat.prototype.show=function()
  {
    beginShape();
    vertex(this.e.x,this.e.y,this.e.z);
    vertex(this.f.x,this.f.y,this.f.z);
    vertex(this.g.x,this.g.y,this.g.z);
    endShape(CLOSE);
  }
}
function transf(pkt_srodek,pkt_obrot,os,kat)
{
 	x_wzgl=pkt_obrot.x-pkt_srodek.x;
  y_wzgl=pkt_obrot.y-pkt_srodek.y;
  z_wzgl=pkt_obrot.z-pkt_srodek.z;
  //console.log(pkt_obrot.x);
  if(os=='x')
  {
    x_nowy=x_wzgl;
    y_nowy=cos(kat)*y_wzgl-sin(kat)*z_wzgl;
    z_nowy=sin(kat)*y_wzgl+cos(kat)*z_wzgl;
  }
  else if(os=='y')
  {
    x_nowy=cos(kat)*x_wzgl-sin(kat)*z_wzgl;
    y_nowy=y_wzgl;
    z_nowy=sin(kat)*x_wzgl+cos(kat)*z_wzgl;
  }
  else if(os=='z')
  {
    x_nowy=cos(kat)*x_wzgl-sin(kat)*y_wzgl;
    y_nowy=sin(kat)*x_wzgl+cos(kat)*y_wzgl;
    z_nowy=z_wzgl;
  }
  pkt_obrot.x=x_nowy+pkt_srodek.x;
  pkt_obrot.y=y_nowy+pkt_srodek.y;
  pkt_obrot.z=z_nowy+pkt_srodek.z;
}
function mouseDragged()
{
	if(pmouseX<mouseX) obrotZ+=skalaObr;
  else if (pmouseX>mouseX) obrotZ-=skalaObr;
  if(pmouseY<mouseY) obrotX-=skalaObr;
  else if (pmouseY>mouseY) obrotX+=skalaObr;
}
function otworz()
{
  kat=rad(78.05);
 	transf(E,Fr2,'y',-kat);
  transf(E,Fr2,'x',-kat/2);
  transf(H,Gr,'y',-kat);
  transf(H,Gr,'x',-kat/2);
  
  transf(A,Br,'z',-PI/4);
  
  obr3=new Pkt(-189.825,116.864,-264.7);
  
  transf(A,Br,'z',-PI/4);
  transf(H,Er,'z',-PI/4);
  transf(obr3,Fr2,'z',-PI/4);
  transf(obr3,Gr,'z',-PI/4);
  
  transf(H,Gr2,'z',PI/4);
  
  transf(C,Dr,'z',-PI/2);
  transf(F,Gr3,'z',-PI/4);
  
  transf(F,Er2,'z',PI/4);
  
  transf(new Pkt(-100,0,100),Gr2,'y',-kat);
  transf(new Pkt(-100,0,100),Hr,'y',-kat);
  transf(new Pkt(-100,0,100),Fr2,'y',-kat);
  transf(new Pkt(-100,0,100),Gr,'y',-kat);
  transf(new Pkt(-100,0,100),Er,'y',-kat);
  
  transf(new Pkt(100,0,100),Gr3,'y',kat);
  transf(new Pkt(100,0,100),Fr,'y',kat);
  transf(new Pkt(100,0,100),Er2,'y',kat);
}
function rad(n)
{
  return n*PI/180;
}
function keyPressed()
{
  if(keyCode==CONTROL&&flag==0)
  {
    flag=1;
    otworz();
  }
}