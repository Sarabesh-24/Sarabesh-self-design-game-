var FinishFlag;
var Player1, Player2;
var Trophy;
var FinishFlagImg;
var Player1Img, Player2Img;
var TrophyImg;


function preload(){
    Player1Img = loadImage("Player1.png")
    FinishFlagImg = loadImage("FinishFlag.png")
    Player2Img = loadImage ("Player2.png")
    TrophyImg = loadImage ("Trophy.png")
}

function setup(){
 canvas=createCanvas(500,500)

 cardboard1=createSprite(28,104,20,100);
 cardboard2=createSprite(80,90,20,100);
 cardboard3=createSprite(174,20,100,20);
 cardboard4=createSprite(106,205,100,20);
 cardboard5=createSprite(130,110,20,100);
 cardboard6=createSprite(64,250,20,100);
 cardboard7=createSprite(208,160,20,100);
 cardboard8=createSprite(160,254,100,20);
 cardboard9=createSprite(250,312,100,20);
 cardboard10=createSprite(262,222,20,100);
 cardboard11=createSprite(310,120,100,20);
 cardboard12=createSprite(352,320,20,100);
 cardboard13=createSprite(52,348,100,20);
 cardboard14=createSprite(110,390,20,100);
 cardboard15=createSprite(210,360,100,20);
 cardboard16=createSprite(308,260,20,100);
 cardboard17=createSprite(356,166,20,100);
 cardboard18=createSprite(164,400,20,100);
 cardboard19=createSprite(310,30,20,100);
 cardboard20=createSprite(368,58,100,20);
 cardboard21=createSprite(410,210,100,20);
 cardboard22=createSprite(212,25,20,100);
 cardboard23=createSprite(480,58,50,20);
 cardboard24=createSprite(450,430,20,50);
 cardboard25=createSprite(250,450,495,20);
 cardboard26=createSprite(352,400,20,80);
 cardboard27=createSprite(330,280,30,20);
 cardboard28=createSprite(400,280,80,20)

Player1 = createSprite(60,40,10,10);
Player1.addImage("player1",Player1Img)
Player1.scale=0.15;

Player2 = createSprite(50,40,10,10);
Player2.addImage("player2",Player2Img)
Player2.scale=0.15;

FinishFlag = createSprite(440,350,20,10);
FinishFlag.addImage("flag",FinishFlagImg)
FinishFlag.scale=0.15;

Trophy = createSprite(210,200,15,15); 
Trophy.addImage("trophy",TrophyImg);
Trophy.scale=0.25;
Trophy.visible = false;
//FinishFlag.visible = false;

}

function draw(){
background("green");


 drawSprites();
}








