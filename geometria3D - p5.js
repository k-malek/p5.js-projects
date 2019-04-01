function setup() 
{
  createCanvas(400, 400,WEBGL);
  obrotX=1.5;
  obrotY=-3.12;
  obrotZ=-1.6;
  skalaObr=0.05;
}

function draw()
{
  rotateX(obrotX);
  rotateY(obrotY);
  rotateZ(obrotZ);
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
function Trojkat(a,b,c)
{
	this.a=a;
	this.b=b;
	c=new Punkt(a.x,a.y,a.z);
	transf(this.b,c,"z",rad(60));
	this.c=c;
	this.pts=[this.a,this.b,this.c];
	Trojkat.prototype.show=function(R,G,B)
	{
		stroke(0);
		fill(R,G,B);
		beginShape();
		vertex(this.a.x,this.a.y,this.a.z);
		vertex(this.b.x,this.b.y,this.b.z);
		vertex(this.c.x,this.c.y,this.c.z);
		endShape(CLOSE);
	}
	Trojkat.prototype.update_pts=function()
	{
		this.pts=[this.a,this.b,this.c];
	}
	Trojkat.prototype.obroc=function(A,B,theta)
	{
		this.a=transf2(this.a,A,B,theta);
		this.b=transf2(this.b,A,B,theta);
		this.c=transf2(this.c,A,B,theta);
		this.update_pts();
	}
}
function Kwadrat(a,b)
{
	this.a=a;
	this.b=b;
	c=new Punkt(a.x,a.y,a.z);
	transf(this.b,c,"z",rad(90));
	this.c=c;
	d=new Punkt(b.x,b.y,b.z);
	transf(this.a,d,"z",-rad(90));
	this.d=d;
	this.pts=[this.a,this.b,this.c,this.d];
	Kwadrat.prototype.show=function(R,G,B)
	{
		stroke(0);
		fill(R,G,B);
		beginShape();
		vertex(this.a.x,this.a.y,this.a.z);
		vertex(this.b.x,this.b.y,this.b.z);
		vertex(this.c.x,this.c.y,this.c.z);
		vertex(this.d.x,this.d.y,this.d.z);
		endShape(CLOSE);
	}
	Kwadrat.prototype.update_pts=function()
	{
		this.pts=[this.a,this.b,this.c,this.d];
	}
	Kwadrat.prototype.obroc=function(A,B,theta)
	{
		this.a=transf2(this.a,A,B,theta);
		this.b=transf2(this.b,A,B,theta);
		this.c=transf2(this.c,A,B,theta);
		this.d=transf2(this.d,A,B,theta);
		this.update_pts();
	}
}
function Pieciokat(a,b)
{
 	this.a=a;
	this.b=b;
	c=new Punkt(a.x,a.y,a.z);
	transf(this.b,c,"z",rad(108));
	this.c=c;
	d=new Punkt(b.x,b.y,b.z);
	transf(this.a,d,"z",-rad(108));
	this.d=d;
	e=new Punkt(a.x,a.y,a.z);
	transf(this.d,e,"z",-rad(108));
	this.e=e;
	this.pts=[this.a,this.b,this.c,this.d,this.e];
	Pieciokat.prototype.show=function(R,G,B)
	{
		stroke(0);
		fill(R,G,B);
		beginShape();
		vertex(this.a.x,this.a.y,this.a.z);
		vertex(this.b.x,this.b.y,this.b.z);
		vertex(this.c.x,this.c.y,this.c.z);
		vertex(this.e.x,this.e.y,this.e.z);
		vertex(this.d.x,this.d.y,this.d.z);
		endShape(CLOSE);
	}
	Pieciokat.prototype.update_pts=function()
	{
		this.pts=[this.a,this.b,this.c,this.d,this.e];
	}
	Pieciokat.prototype.obroc=function(A,B,theta)
	{
		this.a=transf2(this.a,A,B,theta);
		this.b=transf2(this.b,A,B,theta);
		this.c=transf2(this.c,A,B,theta);
		this.d=transf2(this.d,A,B,theta);
		this.e=transf2(this.e,A,B,theta);
		this.update_pts();
	}
}
function Czworoscian(A,B)
{
	alfa=deg(asin(sqrt(8)/3));
	this.t1=new Trojkat(A,B);
	this.ta1 = new Trojkat(A,B);
	this.ta2 = new Trojkat(A,B);
	this.ta3 = new Trojkat(A,B);
	this.ta1.obroc(this.ta1.a,this.ta1.b,alfa);
	this.ta2.obroc(this.ta2.b,this.ta2.c,alfa);
	this.ta3.obroc(this.ta3.c,this.ta3.a,alfa);
	this.pts=[this.t1.a,this.t1.b,this.t1.c,this.ta1.c];
	Czworoscian.prototype.show=function(R,G,B)
	{
		this.t1.show(R,G,B);
		this.ta1.show(R,G,B);
		this.ta2.show(R,G,B);
		this.ta3.show(R,G,B);
	}
	Czworoscian.prototype.update_pts=function()
	{
		this.pts=[this.t1.a,this.t1.b,this.t1.c,this.ta1.c];
	}
	Czworoscian.prototype.obroc=function(A,B,theta)
	{
		this.t1.obroc(A,B,theta);
		this.ta1.obroc(A,B,theta);
		this.ta2.obroc(A,B,theta);
		this.ta3.obroc(A,B,theta);
	}
}
function Osmioscian(A,B)
{
	alfa=deg(asin(sqrt(2/3)));
	this.kw = new Kwadrat(A,B);
	this.ta1 = new Trojkat(this.kw.a,this.kw.b);
	this.ta2 = new Trojkat(this.kw.b,this.kw.c);
	this.ta3 = new Trojkat(this.kw.c,this.kw.d);
	this.ta4 = new Trojkat(this.kw.d,this.kw.a);
	this.tb1 = new Trojkat(this.kw.a,this.kw.b);
	this.tb2 = new Trojkat(this.kw.b,this.kw.c);
	this.tb3 = new Trojkat(this.kw.c,this.kw.d);
	this.tb4 = new Trojkat(this.kw.d,this.kw.a);
	this.ta1.obroc(this.ta1.a,this.ta1.b,alfa);
	this.ta2.obroc(this.ta2.a,this.ta2.b,alfa);
	this.ta3.obroc(this.ta3.a,this.ta3.b,alfa);
	this.ta4.obroc(this.ta4.a,this.ta4.b,alfa);
	this.tb1.obroc(this.tb1.a,this.tb1.b,-alfa);
	this.tb2.obroc(this.tb2.a,this.tb2.b,-alfa);
	this.tb3.obroc(this.tb3.a,this.tb3.b,-alfa);
	this.tb4.obroc(this.tb4.a,this.tb4.b,-alfa);
	this.pts=[this.kw.a,this.kw.b,this.kw.c,this.kw.d,this.ta1.c,this.tb1.c];
	Osmioscian.prototype.show=function(R,G,B)
	{
		this.ta1.show(R,G,B);
		this.ta2.show(R,G,B);
		this.ta3.show(R,G,B);
		this.ta4.show(R,G,B);
		this.tb1.show(R,G,B);
		this.tb2.show(R,G,B);
		this.tb3.show(R,G,B);
		this.tb4.show(R,G,B);
	}
	Osmioscian.prototype.update_pts=function()
	{
		this.pts=[this.kw.a,this.kw.b,this.kw.c,this.kw.d,this.ta1.c,this.tb1.c];
	}
	Osmioscian.prototype.obroc=function(A,B,theta)
	{
		this.ta1.obroc(A,B,theta);
		this.ta2.obroc(A,B,theta);
		this.ta3.obroc(A,B,theta);
		this.ta4.obroc(A,B,theta);
		this.tb1.obroc(A,B,theta);
		this.tb2.obroc(A,B,theta);
		this.tb3.obroc(A,B,theta);
		this.tb4.obroc(A,B,theta);
	}
}
function Dwunastoscian(A,B)
{
  this.kat=deg(acos(-sqrt(5)/5));
  this.piec1=new Pieciokat(A,B);
  this.piec1a=new Pieciokat(A,B);
  this.piec1b=new Pieciokat(A,B);
  this.piec1c=new Pieciokat(A,B);
  this.piec1d=new Pieciokat(A,B);
  this.piec1e=new Pieciokat(A,B);
  this.piec2a=new Pieciokat(A,B);
  this.piec2b=new Pieciokat(A,B);
  this.piec2c=new Pieciokat(A,B);
  this.piec2d=new Pieciokat(A,B);
  this.piec2e=new Pieciokat(A,B);
  this.piec2=new Pieciokat(A,B);
  this.piec1a.obroc(this.piec1.a,this.piec1.b,this.kat);
  this.piec1b.obroc(this.piec1.b,this.piec1.c,this.kat);
  this.piec1c.obroc(this.piec1.c,this.piec1.e,this.kat);
  this.piec1d.obroc(this.piec1.e,this.piec1.d,this.kat);
  this.piec1e.obroc(this.piec1.d,this.piec1.a,this.kat);
  this.piec2a.obroc(this.piec1.a,this.piec1.b,this.kat);
  this.piec2a.obroc(this.piec1a.e,this.piec1a.c,this.kat);
  this.piec2b.obroc(this.piec1.b,this.piec1.c,this.kat);
  this.piec2b.obroc(this.piec1b.d,this.piec1b.e,this.kat);
  this.piec2c.obroc(this.piec1.c,this.piec1.e,this.kat);
  this.piec2c.obroc(this.piec1c.a,this.piec1c.d,this.kat);
  this.piec2d.obroc(this.piec1.e,this.piec1.d,this.kat);
  this.piec2d.obroc(this.piec1d.b,this.piec1d.a,this.kat);
  this.piec2e.obroc(this.piec1.d,this.piec1.a,this.kat);
  this.piec2e.obroc(this.piec1e.c,this.piec1e.b,this.kat);
  this.piec2.obroc(this.piec1.d,this.piec1.a,this.kat);
  this.piec2.obroc(this.piec1e.c,this.piec1e.b,this.kat);
  this.piec2.obroc(this.piec2e.e,this.piec2e.d,this.kat);
  Dwunastoscian.prototype.show=function(R,G,B)
	{
		this.piec1.show(R,G,B);
		this.piec1a.show(R,G,B);
		this.piec1b.show(R,G,B);
		this.piec1c.show(R,G,B);
        this.piec1d.show(R,G,B);
        this.piec1e.show(R,G,B);
        this.piec2.show(R,G,B);
		this.piec2a.show(R,G,B);
		this.piec2b.show(R,G,B);
		this.piec2c.show(R,G,B);
        this.piec2d.show(R,G,B);
        this.piec2e.show(R,G,B);
	}
	Dwunastoscian.prototype.obroc=function(A,B,theta)
	{
		this.piec1.obroc(A,B,theta);
		this.piec1a.obroc(A,B,theta);
		this.piec1b.obroc(A,B,theta);
		this.piec1c.obroc(A,B,theta);
        this.piec1d.obroc(A,B,theta);
        this.piec1e.obroc(A,B,theta);
		this.piec2a.obroc(A,B,theta);
		this.piec2b.obroc(A,B,theta);
		this.piec2c.obroc(A,B,theta);
        this.piec2d.obroc(A,B,theta);
        this.piec2e.obroc(A,B,theta);
        this.piec2.obroc(A,B,theta);
	}
}
function show_pts(obiekt)
{
	kolory=[[255,0,0],[0,255,0],[0,0,255],[255,255,0],[255,0,255],[0,255,255],[255,127,0],[255,0,127],[127,255,0],[0,255,127],[127,0,255],[0,127,255]];
	len=obiekt.pts.length;
	for(i=0;i<len;i++)
	{
		obiekt.pts[i].show(kolory[i][0],kolory[i][1],kolory[i][2]);
	}
}
function obroc(obiekt,A,B,theta)
{
	len=obiekt.pts.length;
	for(i=0;i<len;i++)
	{
		obiekt.pts[i]=transf2(obiekt.pts[i],A,B,theta);
	}
	obiekt.update_pts();
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
function transf2(A,B,C,theta)
{
 	o=macierz_translacji(B,C,theta);
  w=[[A.x],[A.y],[A.z],[1]];
  m=pomnoz(o,w);
  D=new Punkt(m[0][0],m[1][0],m[2][0]);
  return D;
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
function pomnoz(A,B)
{
	wynik=[]
	for(i=0;i<B.length;i++)
	{
		wiersz=[]
		for(j=0;j<B[0].length;j++)
		{
			suma=0;
			for(k=0;k<B.length;k++)
			{
				suma+=A[i][k]*B[k][j]
			}
			wiersz.push(suma)
		}
		wynik.push(wiersz)
	}
	return wynik;
}
function macierz_translacji(A,B,theta)
{
	v=stworz_wektor(A,B);
	len=v.length;
	u=new Wektor(v.x/len,v.y/len,v.z/len);
	T=[[1,0,0,-A.x],[0,1,0,-A.y],[0,0,1,-A.z],[0,0,0,1]];
	V=[[1,0,0,A.x],[0,1,0,A.y],[0,0,1,A.z],[0,0,0,1]];
	Q=[
	[cos(rad(theta))+u.x*u.x*(1-cos(rad(theta))),u.x*u.y*(1-cos(rad(theta)))-u.z*sin(rad(theta)),u.x*u.z*(1-cos(rad(theta)))+u.y*sin(rad(theta)),0],
	[u.x*u.y*(1-cos(rad(theta)))+u.z*sin(rad(theta)),cos(rad(theta))+u.y*u.y*(1-cos(rad(theta))),u.y*u.z*(1-cos(rad(theta)))-u.x*sin(rad(theta)),0],
	[u.x*u.z*(1-cos(rad(theta)))-u.y*sin(rad(theta)),u.z*u.y*(1-cos(rad(theta)))+u.x*sin(rad(theta)),cos(rad(theta))+u.z*u.z*(1-cos(rad(theta))),0],
	[0,0,0,1]
	];
	wynik=pomnoz(V,Q);
	return pomnoz(wynik,T);
}
