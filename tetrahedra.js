function setup() 
{
  createCanvas(400, 400,WEBGL);
  obrotX=1.5;
  obrotY=-3.12;
  obrotZ=-1.6;
  skalaObr=0.05;
  
  l=new Punkt(-150,-150,-150);
  m=new Punkt(100,-150,150);
  n=new Punkt(l.x,l.y,l.z);
  transf(m,n,"z",-PI/2);
  A=new Punkt(0,100,70,21);
  B=new Punkt(-100,0,70,21);
  C=new Punkt(0,-100,70,21);
  D=new Punkt(100,0,70,21);
  E=new Punkt(0,100,-70,21);
  F=new Punkt(-100,0,-70,21);
  G=new Punkt(0,-100,-70,21);
  H=new Punkt(100,0,-70,21);
  
  //transf(A,H,'y',-rad(45));
}

function draw()
{
  background(35);
  rotateX(obrotX);
  rotateY(obrotY);
  rotateZ(obrotZ);
  //os()
  A.show(255,0,0);
  B.show(0,255,0);
  C.show(0,0,255);
  D.show(255,255,0);
  E.show(255,0,255);
  F.show(0,255,255);
  G.show(255,255,255);
  H.show(255,127,0);
  stroke(50);
  fill(200,200,200);
  beginShape();
  vertex(B.x,B.y,B.z);
  vertex(D.x,D.y,D.z);
  vertex(G.x,G.y,G.z);
  vertex(B.x,B.y,B.z);
  vertex(E.x,E.y,E.z);
  vertex(D.x,D.y,D.z);
  vertex(E.x,E.y,E.z);
  vertex(G.x,G.y,G.z);
  endShape(CLOSE);
  beginShape();
  vertex(F.x,F.y,F.z);
  vertex(H.x,H.y,H.z);
  vertex(C.x,C.y,C.z);
  vertex(F.x,F.y,F.z);
  vertex(A.x,A.y,A.z);
  vertex(H.x,H.y,H.z);
  vertex(A.x,A.y,A.z);
  vertex(C.x,C.y,C.z);
  endShape(CLOSE);
}
function Kwadrat(a,b,c)
{
  this.angle=PI/2;
  this.angle=-this.angle;
  this.a=a;
  this.b=b;
  this.c=c;
  this.u=stworz_wektor(this.b,this.a);
  
  this.v=stworz_wektor(this.b,this.c);
  this.w=suma_wektorow(this.u,this.v);
  this.d=przesuniecie_o_wektor(b,this.w);
	Kwadrat.prototype.show=function(R,G,B)
  {
    noStroke();
	fill(R,G,B);
    beginShape();
    vertex(this.a.x,this.a.y,this.a.z);
    vertex(this.b.x,this.b.y,this.b.z);
    vertex(this.c.x,this.c.y,this.c.z);
    vertex(this.d.x,this.d.y,this.d.z);
    endShape(CLOSE);
  }
}
function Punkt(x,y,z)
{
   this.x=x;
   this.y=y;
   this.z=z;
   Punkt.prototype.show=function(R,G,B)
   {
    fill(R,G,B);
   	translate(this.x,this.y,this.z)
   	noStroke();
 		sphere(3);
   	translate(-this.x,-this.y,-this.z)
   }
}
function Wektor(x,y,z)
{
	this.x=x;
	this.y=y;
	this.z=z;
	this.length=sqrt(this.x*this.x+this.y*this.y+this.z*this.z);
  Wektor.prototype.show=function(A,R,G,B)
	{
		stroke(R,G,B);
    fill(R,G,B);
		B=przesuniecie_o_wektor(A,this);
		beginShape();
		vertex(A.x,A.y,A.z);
		vertex(B.x,B.y,B.z);
		endShape(CLOSE);
		translate(B.x,B.y,B.z)
		noStroke();
 		sphere(5);
		translate(-B.x,-B.y,-B.z);
	}
}
function stworz_wektor(A,B)
{
	e=B.x-A.x;
	f=B.y-A.y;
	g=B.z-A.z;
	u=new Wektor(e,f,g);
	return u;
}
function kat_wektory(u,v,zpi)
{
	skalar=u.x*v.x+u.y*v.y+u.z*v.z;
	iloraz=skalar/(u.length*v.length);
	kat=acos(iloraz);
	if(zpi=="bez_pi")kat-=PI;
	return kat;
}
function parametr_z_wektora(wektor,ppar1,ppar2,znak)
{
 	len=wektor.length;
	wynik = sqrt(len*len-ppar1*ppar1-ppar2*ppar2);
	if(znak=="-") wynik=-wynik;
	return wynik
}
function suma_wektorow(u,v)
{
	w = new Wektor(u.x+v.x,u.y+v.y,u.z+v.z);
	return w;
}
function przesuniecie_o_wektor(A,u)
{
 	return new Punkt(A.x+u.x,A.y+u.y,A.z+u.z);
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

function os()
{
  beginShape();
  vertex(0,0,0);
  vertex(0,0,100);
  endShape();
  stroke(0,255,0)
  beginShape();
  vertex(0,0,0);
  vertex(0,100,0);
  endShape();
  stroke(0,0,255)
  beginShape();
  vertex(0,0,0);
  vertex(100,0,0);
  endShape(); 
}
function rad(deg) {return deg*PI/180;}
function deg(rad) {return rad*180/PI;}
function mouseDragged()
{
	if(pmouseX<mouseX) obrotZ+=skalaObr;
  else if (pmouseX>mouseX) obrotZ-=skalaObr;
  if(pmouseY<mouseY) obrotX-=skalaObr;
  else if (pmouseY>mouseY) obrotX+=skalaObr;
}