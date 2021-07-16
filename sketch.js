const Engine = Matter.Engine
const World = Matter.World
const Events = Matter.Events
const Bodies = Matter.Bodies 

var play;
var gameState = 0;
var showLevel;
var player;

function preload(){
    level1img = loadImage("Images/intergalactic.png");
    titleimg = loadImage("Images/Title.png");
    UFO = loadImage("Images/Player.png");
}

function setup(){
    createCanvas(1600,800)
    engine = Engine.create();
    world = engine.world;
    hi = createSprite(20,20,20,20);
    play = createButton("PLAY");
    test1 = new LevelPage();
    player1 = createSprite(800,750,30,30);
 
}

function draw(){
    background(232,160,200);
    Engine.update(engine);
    if(gameState===10){
        imageMode(CENTER);
        image(level1img,800,400,550,550);
        test1.display();
        player1.visible = false
        play.hide();
    }
    if (gameState===1){
       background(232,160,200)
       test1.hideAll();
       test1.level1.hide()
       ground = createSprite(200,790,3000,10);
       player1.visible = true
       if(keyIsDown(UP_ARROW)){
            player1.velocityY = -10
       }
       if(keyIsDown(LEFT_ARROW)){
           player1.x = player1.x-10
       }
       if(keyIsDown(RIGHT_ARROW)){
        player1.x = player1.x+10
    }
       player1.velocityY+=1.5
       player1.collide(ground)
    }
    if(gameState===0){       
        play.position(750,450);
        play.size(200,50);
        play.mousePressed(test);
        imageMode(CENTER);
        image(titleimg,800,250,700,700)
        player1.visible = false
    }
    drawSprites();
}
function test(){
    gameState = 10;
}
