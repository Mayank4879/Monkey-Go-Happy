var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, survivalTime

function preload(){
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {

  background("white");
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x) 
  
  monkey.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 120,50);
  
  if(keyDown("space") && monkey.y>250){
    monkey.velocityY=-17;
  }
  
  monkey.velocityY = monkey.velocityY + 1;
  
  bananas();
  obstacles();
  
  drawSprites();
}

function bananas(){
  
  if(frameCount % 80 === 0){
    banana = createSprite(400,Math.round(random(120,200)),20,20);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-7;
    banana.lifetime=55;
    
    FoodGroup.add(banana);
  }
  
}

function obstacles(){
  
  if(frameCount % 300 === 0){  
    obstacle = createSprite(400,315,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2; 
    obstacle.velocityX=-8;
    obstacle.lifetime=52;
    
    obstacleGroup.add(obstacle);
  }
  
}


