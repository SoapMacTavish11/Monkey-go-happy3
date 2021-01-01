var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime;
var gameover,GameOveri,jungle;
var ground;
var score=0;
function preload(){
  
  monkey_running= loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  GameOveri=loadImage("GameOver.png");
  jungle=loadImage("Jungle.jpg");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {

  canvas=createCanvas(displayWidth,displayHeight);
  monkey= createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.velocityX=1 ;
  monkey.scale=0.1;
  
  banana= createSprite(100,200,10,10);
  banana.addImage(bananaImage);
  banana.velocityX=-5;
  banana.scale=0.1; 

  
  
  ground= createSprite(400,850,4000,10); 
 
  ground.scale=1;
  console.log(ground.x);
  
  survivalTime=0;
  score=0;
  obstacleGroup= new Group();
  FoodGroup=new Group();
}


function draw() {
  background(jungle);

  drawSprites();
  
  fill("black");
  text("Score: "+score,500,50);
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);  
 
  
  
  
  monkey.collide(ground);
  

    if (ground.x < 0){
      ground.x = ground.width/2;
    }

  survivalTime=Math.ceil(frameCount/frameRate());
  
  text("Survival Time:"+ survivalTime,100,50);
  
  if(keyDown("space")){
    monkey.velocityY=-8;
    }
  monkey.velocityY=monkey.velocityY+0.5;
  
  if(FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach(); 
    score=score+1
} 
if(monkey.isTouching(obstacleGroup)){
 monkey.velocityX=0;
  monkey.scale=0.001;

  gameover=createSprite(400,400);
 gameover.addImage(GameOveri);
 gameover.scale=1;
 gameover.velocityX=0;

} 

 camera.x=monkey.x;
  
  spawnObstacle();
  spawnBanana();

}
function spawnBanana(){
   if(camera.x%100===0){
  banana=createSprite(250,250);
  banana.x=(random(750,800))
  banana.y = (random(750,790))
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-3;
  FoodGroup.add(banana);
  banana.lifetime=300;
   }
}

function spawnObstacle(){
   if(camera.x%300===0){
  obstacle=createSprite(800,830);
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  obstacle.velocityX=-3;
  obstacle.lifetime=300;
  obstacleGroup.add(obstacle);
   }
}



