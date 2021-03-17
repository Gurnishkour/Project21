var canvas;
var music;
var s1,s2,s3,s4;
var ball , edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
    s1=createSprite(0,580,360,30);
    s1.shapeColor = "red";
    s2=createSprite(295,580,200,30);
    s2.shapeColor = "blue";
    s3=createSprite(515,580,200,30);
    s3.shapeColor = "green";
    s4=createSprite(740,580,220,30);
    s4.shapeColor = "yellow";

    //create box sprite and give velocity
     ball=createSprite(random(20,500),20,20,20);
     ball.velocityX = 5;
     ball.velocityY = 10;
     ball.shapeColor = "white";
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(ball.isTouching(s1)){
        ball.shapeColor = "red";
        music.play();
    }
    if(ball.isTouching(s2)){
        ball.shapeColor = "blue";
        music.play();
    }
    if(ball.isTouching(s3)){
        ball.shapeColor = "green";
        music.play();
    }
    if(ball.isTouching(s4)){
        ball.shapeColor = "yellow";
        music.stop();
        ball.velocityX = 0;
        ball.velocityY = 0;
    }
    drawSprites();
}
