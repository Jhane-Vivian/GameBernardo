var player;
function preload(){

}

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    player = createSprite(10,50,6,20);
    
}

function draw(){
    background(0);
    
    if(keyIsDown(65) || keyIsDown(LEFT_ARROW)){
        console.log("Movendo para esquerda!");
        player.position.x -=2;
        
    }
    if(keyIsDown(68) || keyIsDown(RIGHT_ARROW)){
        console.log("Movendo para direita!")
       player.position.x +=2;
    }
    if(keyIsDown(83) || keyIsDown(DOWN_ARROW)){
        console.log("Movendo para baixo!");
        player.position.y+=2;
    }
    if(keyIsDown(87) || keyIsDown(UP_ARROW)){
        console.log("Movendo para cima!")
        player.position.y-=2;
    }
    drawSprites();  
}