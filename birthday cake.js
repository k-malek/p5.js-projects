function setup() {
  myCanvas=createCanvas(600, 400,WEBGL);
  f=0;
  c1=new Candle(-50,75);
  c2=new Candle(50,75);
  c3=new Candle(0,-50);
  movement=0;
  cherries=[];
  for(i=0;i<20;i++)
  {
    cherries[i]= new Cherry();
  }
  table=new Table;
  square=10;
  color=70;
}

function draw() {
  background(color,70,70,1);
  translate(0,50,0);
  table.show();
  translate(0,0,0-movement*0.75);
  fill(255, 153, 255);
  noStroke();
  rotateX(-0.6+(movement*0.001));
  cylinder(140,30);
  fill(102, 51, 0);
  translate(0,10,0);
  cylinder(141,20);
  translate(0,-24,0);
  for(i=0;i<20;i++)
  {
  	x=TWO_PI/20*i
  	r=130
  	translate(sin(x)*r,0,cos(x)*r);
  	cherries[i].show();
    translate(-sin(x)*r,0,-cos(x)*r);
  }
  translate(0,14,0);
  c1.show();
  c2.show();
  c3.show();
  if(c1.shoot_out==c2.shoot_out&&c2.shoot_out==c3.shoot_out&&c2.shoot_out>0) 
  {move();}
}

function mousePressed()
{
	if(mouseX<(229+square)&&mouseX>(229-square)&&mouseY<(245+square)&&mouseY>(245-square)) c1.shoot_out=2000;
	else if(mouseX<(368+square)&&mouseX>(368-square)&&mouseY<(245+square)&&mouseY>(245-square)) c2.shoot_out=2000;
	else if(mouseX<(300+square)&&mouseX>(300-square)&&mouseY<(162+square)&&mouseY>(162-square)) c3.shoot_out=2000;
	//else{c1.shoot_out=0;c2.shoot_out=0;c3.shoot_out=0;}
	if (f==0)tillnow=frameCount;
}
function move()
{
  f=1;
  movement=2*(frameCount-tillnow);
  if(movement>300)movement=300;
}
function Candle(x,y)
{
  this.posx=x;
  this.posy=y;
  this.flame=new Flame();
  this.shoot_out=0;
  Candle.prototype.show=function()
  {
    fill('green');
    translate(this.posx,-30,this.posy);
    cylinder(5,70);
    translate(0,-41-this.shoot_out,0);
    this.flame.show();
    translate(-this.posx,71+this.shoot_out,-this.posy);
  }
}
function Cherry()
{
  Cherry.prototype.show=function()
  {
    fill(255,0,0);
    sphere(8);
  }
}
function Flame()
{
  Flame.prototype.show=function()
  {
    green=random(102,235);
    fill(255, green, 0);
    sphere(4);
  }
}
function Table()
{
  Table.prototype.show=function()
  {
    stroke(130, 30, 0)
    a=0;b=130;c=-300;
    hnog=200; odlnog=170;
    rotateX(-0.3);
    translate(a,b,c);
    fill(153, 51, 0);
    cylinder(300,50);
    //noga1
    translate(odlnog,hnog,odlnog);
    cylinder(30,400);
    translate(-odlnog,0,-odlnog);
    //noga2
    translate(-odlnog,0,odlnog);
    cylinder(30,400);
    translate(odlnog,0,-odlnog);
    //noga3
    translate(odlnog,0,-odlnog);
    cylinder(30,400);
    translate(-odlnog,0,odlnog);
    //noga4
    translate(-odlnog,0,-odlnog);
    cylinder(30,400);
    translate(odlnog,0,odlnog);
    translate(-a,-b-hnog,-c);
    rotateX(0.3);
  }
}