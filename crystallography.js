function setup() {
  createCanvas(600, 600,WEBGL);
	obrotX=1.5;
  obrotY=-3.12;
  obrotZ=-1.6;
  poczUkl=new Pkt(0,0,0);
  skalaObr=0.05;
}

function draw() {
  background(50);
  stroke(255);
  rotateX(obrotX);
  rotateY(obrotY);
  rotateZ(obrotZ);
  fill(255,20);
  strokeWeight(1);
  box(200);
  os=new Os();
  os.show();
  przypadek = new Pkt(0,0,0);
  new Plaszczyzna(1,-1,1,przypadek,1).show();
  przypadek2 = new Pkt(0,0,0);
  new Krawedz(0,0,1,przypadek2,1).show();
}
function Os()
{
  
  Os.prototype.show=function()
  {
    stroke(255);
    strokeWeight(1);
    //os y
    line(100,100,100,100,-150,100);
    line(100,-150,100,100,-140,90);
    line(100,-150,100,100,-140,110);
    line(100,-155,110,100,-165,90);
    line(100,-160,100,100,-155,90);
    
    //os x
    line(100,100,100,-150,100,100);
    line(-150,100,100,-140,100,90);
    line(-150,100,100,-140,100,110);
    line(-155,100,105,-165,100,95);
    line(-165,100,105,-155,100,95);
    
    //os z
    line(100,100,100,100,100,-150);
    line(100,100,-150,100,110,-140);
    line(100,100,-150,100,90,-140);
    line(100,95,-165,100,105,-165);
    line(100,95,-158,100,105,-158);
    line(100,105,-158,100,95,-165);
  }
}
function Pkt(_x,_y,_z)
{
  this.x=-_x+100;
  this.y=-_y+100;
  this.z=-_z+100;
}
function Krawedz(h,k,l,punkt,skala)
{
  stroke(0,150,0);
  if(h<0) punkt.x=100+(-200);
  if(k<0) punkt.y=100+(-200);
  if(l<0) punkt.z=100+(-200);
  dolores=new Pkt((200*h+poczUkl.x-punkt.x)*skala,(200*k+poczUkl.y-punkt.y)*skala,(200*l+poczUkl.z-punkt.z)*skala);
  Krawedz.prototype.show=function()
  {
   line(dolores.x,dolores.y,dolores.z,punkt.x,punkt.y,punkt.z); 
  }
}
function Plaszczyzna(u,v,w,punkt,skala)
{
  stroke(255,0,0);
  strokeWeight(3);
  fill(255,0,0,40);
  var licz_zera=0;
  if(u==0) licz_zera++;
  if(v==0) licz_zera++;
  if(w==0) licz_zera++;
  if(u<0) punkt.x=100+(200/u);
  if(v<0) punkt.y=100+(200/v);
  if(w<0) punkt.z=100+(200/w);
	iks=new Pkt((200/u+poczUkl.x-punkt.x)*skala,0+poczUkl.y-punkt.y,0+poczUkl.z-punkt.z)
  igrek=new Pkt(0+poczUkl.x-punkt.x,(200/v+poczUkl.y-punkt.y)*skala,0+poczUkl.z-punkt.z)
  zed=new Pkt(0+poczUkl.x-punkt.x,0+poczUkl.y-punkt.y,(200/w+poczUkl.z-punkt.z)*skala)
  if(licz_zera==0)
  {
    Plaszczyzna.prototype.show=function()
    {
      beginShape();
      vertex(iks.x,iks.y,iks.z);
      vertex(igrek.x,igrek.y,igrek.z);
      vertex(zed.x,zed.y,zed.z);
      endShape(CLOSE);
    }
  }
  else if(licz_zera==1)
  {
    Plaszczyzna.prototype.show=function()
    {
      if(u==0)
      {
      	beginShape();
      	vertex(igrek.x,igrek.y,igrek.z);
      	vertex(zed.x,zed.y,zed.z);
      	vertex(zed.x-200,zed.y,zed.z);
      	vertex(igrek.x-200,igrek.y,igrek.z);
      	endShape(CLOSE);
      }
      if(v==0)
      {
      	beginShape();
      	vertex(iks.x,iks.y,iks.z);
      	vertex(zed.x,zed.y,zed.z);
      	vertex(zed.x,zed.y-200,zed.z);
      	vertex(iks.x,iks.y-200,iks.z);
      	endShape(CLOSE);
      }
      if(w==0)
      {
      	beginShape();
      	vertex(iks.x,iks.y,iks.z);
      	vertex(igrek.x,igrek.y,igrek.z);
      	vertex(igrek.x,igrek.y,igrek.z-200);
      	vertex(iks.x,iks.y,iks.z-200);
      	endShape(CLOSE);
      }
    }
  }
  else if(licz_zera==2)
  {
    Plaszczyzna.prototype.show=function()
    {
      if(u==0&&v==0)
      {
      	beginShape();
      	vertex(zed.x,zed.y,zed.z);
      	vertex(zed.x,zed.y-200,zed.z);
      	vertex(zed.x-200,zed.y-200,zed.z);
      	vertex(zed.x-200,zed.y,zed.z);
      	endShape(CLOSE);
      }
      if(v==0&&w==0)
      {
      	beginShape();
        vertex(iks.x,iks.y,iks.z);
      	vertex(iks.x,iks.y-200,iks.z);
      	vertex(iks.x,iks.y-200,iks.z-200);
      	vertex(iks.x,iks.y,iks.z-200);
      	endShape(CLOSE);
      }
      if(w==0&&u==0)
      {
      	beginShape();
      	vertex(igrek.x,igrek.y,igrek.z);
      	vertex(igrek.x,igrek.y,igrek.z-200);
      	vertex(igrek.x-200,igrek.y,igrek.z-200);
      	vertex(igrek.x-200,igrek.y,igrek.z);
      	endShape(CLOSE);
      }
    }
  }
}


function mouseDragged()
{
	if(pmouseX<mouseX) obrotZ+=skalaObr;
  else if (pmouseX>mouseX) obrotZ-=skalaObr;
  if(pmouseY<mouseY) obrotX-=skalaObr;
  else if (pmouseY>mouseY) obrotX+=skalaObr;
}