// variables for sprites
var harry, harryImg;
var bg, bgImg;
var goldensnitch,goldenSnitchImg;
var goldenSnitchG;

var voldermort, voldermortImg;
var voldermortG;
var hedwig, hedwigImg;
var hedwigG;
var gameOver, gameOverImg;



// variables for states
var PLAY = 1;
var END=0;
var gameState=1;


function preload(){
harryImg = loadImage("harry.png");
bgImg = loadImage("forbidden-fores.jpg");  
goldenSnitchImg = loadImage("Golden_Snitch.2.png");  
voldermortImg = loadImage("voldermort.png");
hedwigImg = loadImage("Hedwig_Snowy_Owl_PM.png");  
gameOverImg = loadImage("gameOver.jpg");  
  
 
  
  
}

function setup() {
  createCanvas(600,400);
  
  bg = createSprite(300,300,20,20);
  bg.addImage("forbiddenForest",bgImg);
  
  
  
  harry = createSprite(0,200,20,20);
  harry.addImage("hp",harryImg);
   harry.scale = 0.3;
  

 goldenSnitchG = new Group();
 voldermortG = new Group();
 hedwigG = new Group(); 
  
  
  
  
  
  
  
  
  
 
  
 
}

function draw() {
  
  
  if(gameState===PLAY){
    background("white");
    
     harry.y = World.mouseY;
    bg.velocityX = -2;
    // code to reset the background
     if(bg.x<0){
    bg.x = width/2;
  }
  
  
    
    
  CreateGoldenSnitch();
  CreateVoldermort();  
   CreateHedwig ();
    
    if(harry.isTouching(hedwigG)||harry.isTouching(goldenSnitchG)){
       hedwigG.destroyEach();
      goldenSnitchG.destroyEach();
       }
    
    
     if(harry.isTouching(voldermortG)){
      gameState=END;
      } 
    
    
  
    
  }else if(gameState===END){
           bg.velocityX =0;
    hedwigG.setVelocityXEach (0);
    voldermortG.setVelocityXEach (0);
    goldenSnitchG.setVelocityXEach (0);
    harry.destroy();
    voldermortG.destroyEach();
    goldenSnitchG.destroyEach();
    
    
    gameOver = createSprite(300,200,20,20);
  gameOver.addImage(gameOverImg);
  gameOver.scale =2;
    
    
    
  }  
    
    
  
           
  
  

 
  
 
  

 
  
  drawSprites();
 
}

function CreateGoldenSnitch (){
    if (World.frameCount % 150 == 0) {
  var goldenSnitch = createSprite(Math.round(random(1000, 50)),200, 300, 10);
  goldenSnitch.addImage(goldenSnitchImg);
  goldenSnitch.scale=0.02;
  goldenSnitch.velocityX = -5;
  goldenSnitch.lifetime = 200;
  goldenSnitchG.add(goldenSnitch);
  }

}


function CreateVoldermort(){
  if (World.frameCount % 500 == 0) {
 var voldermort = createSprite(Math.round(random(1000, 50)),100, 300, 10); 
  voldermort.addImage (voldermortImg);
  voldermort.scale = 0.1;
  voldermort.velocityX = -5;
  voldermort.lifetime = 200;
  voldermortG.add(voldermort);
  }
}


function CreateHedwig (){
  if(World.frameCount % 300 ==0){
      var hedwig = createSprite(Math.round(random(1000,50)),50,300,10);
  hedwig.addImage(hedwigImg);
  hedwig.scale = 0.1;
  hedwig.velocityX = -5;
  hedwig.lifetime = 200;
  hedwigG.add(hedwig);
    
  }

}