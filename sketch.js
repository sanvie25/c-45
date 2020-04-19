var gamestate = "serve";

function preload() {
   log = loadImage("sprites/wood2.png")
}

function setup(){
    var canvas = createCanvas(displayWidth-30,displayHeight-30);
    player = createSprite(200,displayHeight-200,50,50);
   b1 = createSprite(10,displayHeight/2,20,displayHeight);
   b2 = createSprite(displayWidth-50,displayHeight/2,20,displayHeight);
   start = createSprite(displayWidth/2,displayHeight/2-100);
   start.visible = false; 
   bar1group = new Group();
   bar2group = new Group();
   bar3group = new Group();
   naturalgroup = new Group();
   toxicgroup = new Group();
   }

function draw(){
    
    background(0);
    if(gamestate==="serve"){
    fontSize(20);
        text("Game Start",displayWidth/2,displayHeight/2);
        text("move the player left and right to save the enviroment",displayWidth/2-400,displayHeight/3);
        text("let's save the enviroment",displayWidth/2-100,displayHeight-400);
        start.visible = true;
        if(mousePressedOver(start)){
            gamestate = "play";

        }
        
    }
    if(gamestate === "play"){
    player.x = World.mouseX;
    spawnYellowbars();
    spawnYellowbars1();
    spawnYellowbars2();
    natural();
    toxic();
    }
            drawSprites();
}
function spawnYellowbars(){
    if(World.frameCount%60===0){
        bar1 = createSprite(300,0,20,100);
        bar1.shapeColor = "yellow";        
        bar1.velocityY = 5;

    }
}
function spawnYellowbars1(){
    if(World.frameCount%60===0){
        bar1 = createSprite(700,0,20,100);
        bar1.shapeColor = "yellow";        
        bar1.velocityY = 5;
    }
}
function spawnYellowbars2(){
    if(World.frameCount%60===0){
        bar1 = createSprite(1100,0,20,100);
        bar1.shapeColor = "yellow";        
        bar1.velocityY = 5;
    }
}
function natural(){
    if(World.frameCount%200===0){
     wood = createSprite(200,0);
     wood.addImage(log);
     wood.x = Math.round(random(100,displayWidth-100));
     wood.velocityY = 5;
    }
}
function toxic(){
    if(World.frameCount%150===0){
     plastic = createSprite(200,-100);
     plastic.x = Math.round(random(100,displayWidth-100));
     plastic.velocityY = 5;
}
}