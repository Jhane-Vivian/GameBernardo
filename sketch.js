var player;
function preload(){

}

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);
    background(0);
    player = createSprite(10,50,6,20);
    
}

function draw(){
    
    if(keyIsDown(65) || keyIsDown(LEFT_ARROW)){
        console.log("Movendo para esquerda!");
        player.x -=2;
    }
    if(keyIsDown(68) || keyIsDown(RIGHT_ARROW)){
        console.log("Movendo para direita!")
        player.x +=2;
    }
    if(keyIsDown(83) || keyIsDown(DOWN_ARROW)){
        console.log("Movendo para baixo!")
    }
    if(keyIsDown(87) || keyIsDown(UP_ARROW)){
        console.log("Movendo para cima!")
    }
    drawSprites();  
}