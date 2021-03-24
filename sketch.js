var mario , marioImage;

var Background,BackgroundImage;

var enemy1,enemy1Image,enemy,enemyImage,enemy2,enemy2Image,enemyGroup,enemy1Group,enemy2Group;

function preload(){
   marioImage = loadAnimation("mario.png","mario1.png")

 BackgroundImage = loadImage("forest.png");
  
  enemyImage = loadAnimation("enemy.png","enemy.pn\");
  
  
  
}


 

function setup(){
  
  createCanvas(windowWidth,windowHeight)
  
   Background = createSprite(width - 300,height - 300,400,400)
  Background.addImage(BackgroundImage)
  Background.scale = 2
  
  mario  = createSprite(width  - 600,height - 80,20,20)
  mario.addAnimation("mario_running",marioImage)
  mario.scale = 0.5
  

}


function draw(){
  
  background('white')
  spawnEnimes();
  drawSprites();
  
}

function spawnEnimes(){
  enemy = createSprite(200,200,10,10)
  enemy.addAnimation("enemy_arriving",enemyImage)
  enemy.scale = 4
}