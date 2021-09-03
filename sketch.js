var player1,player2,ball;
var player1standingimg,player1kickimg,player2standingimg,player2kickimg,ballimg;
var Goalpost1,Goalpost2;
var topB,bottomB,leftB,rightB,center;


function preload(){
player1standingimg= loadImage("Assets/Player1.png");
player1kickimg= loadImage("Assets/player1kick.png");
player2standingimg= loadImage("Assets/player2standing.png");
player2kickimg= loadImage("Assets/player2kick.png");
ballimg= loadImage("Assets/ball.png");


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  Goalpost1= createSprite(windowWidth/2,20,200,10);
  Goalpost2= createSprite(windowWidth/2,windowHeight-20,200,10);
 Goalpost1.shapeColor="black";
 Goalpost2.shapeColor="black";

 player1=createSprite(windowWidth/2,60,10,10)
 player1.addImage("standing",player1standingimg);
 player1.scale=0.8;

 player2=createSprite(windowWidth/2,windowHeight-60,10,10);
 player2.addImage("standing",player2standingimg);
 player2.scale=0.8;
 
 center=createSprite(windowWidth/2,windowHeight/2,windowWidth,5);
 center.shapeColor="white";

 ball=createSprite(windowWidth/2,windowHeight/2,10,10);
ball.addImage("ball",ballimg)
ball.scale=0.2;

 topB=createSprite(windowWidth/2,5,windowWidth,5);
 topB.shapeColor="white";
 
 

bottomB=createSprite(windowWidth/2,windowHeight-10,windowWidth,5)
bottomB.shapeColor="white";

leftB=createSprite(5,windowHeight/2,5,windowHeight);
leftB.shapeColor="white";

rightB=createSprite(windowWidth-5,windowHeight/2,5,windowHeight);
rightB.shapeColor="white";

}

function draw() {
 background("green"); 
 player1.x=ball.x;
 ball.bounceOff(player1);
 ball.bounceOff(player2);
 ball.bounceOff(topB);
 ball.bounceOff(bottomB);
 ball.bounceOff(leftB);
 ball.bounceOff(rightB);
 if(keyDown("space")){
 
  ball.velocityX=0;
  ball.velocityY=2;

 }

 if(keyWentDown("k")){

 player2.addImage("kick",player2kickimg);

 }

 if(keyWentUp("k")){

  player2.addImage("standing",player2standingimg);
 
  }

 if(keyDown(LEFT_ARROW)){

  player2.x=player2.x-5;

 }

 if(keyDown(RIGHT_ARROW)){

  player2.x=player2.x+5;
  
 }

 if(keyDown(UP_ARROW)){

  player2.y=player2.y-5;
  
 }

 if(keyDown(DOWN_ARROW)){

  player2.y=player2.y+5;
  
 }


strokeWeight(3);
fill("white");
circle(windowWidth/2,windowHeight/2,200)
   
fill("grey");
circle(windowWidth/2,windowHeight/2,30);


  drawSprites() 
}

