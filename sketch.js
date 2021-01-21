var gardenImg;
var garden;
var cat;
var walkingCat;
var standingCat;
var sittingCat;
var mouse;
var cheeseMouse;
var teasingMouse;
var lookingMouse;

function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    walkingCat=loadAnimation("images/tomTwo.png","images/tomThree.png");
    standingCat=loadImage("images/tomFour.png");
    sittingCat=loadImage("images/tomOne.png");
    cheeseMouse=loadImage("images/jerryOne.png");
    teasingMouse=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    lookingMouse=loadImage("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(300,300,20,20);
    garden.addImage("garden",gardenImg);
    cat=createSprite(650,500,10,10);
    cat.addImage("cat",sittingCat);
    cat.scale=0.1;
    cat.debug=true;
    cat.setCollider("rectangle",0,0,5,10,0);
    mouse=createSprite(100,480,20,20);
    mouse.addImage("mouse",cheeseMouse);
    mouse.scale=0.1;
    mouse.debug=true;
    mouse.setCollider("circle",90,20,100);
}

function draw() {
background ("white");
   if (cat.x-mouse.x<(cat.width-mouse.width)/2){
       cat.velocityX=0;
       cat.addAnimation("standing",standingCat);
       cat.changeAnimation("standing");
       mouse.addAnimation("looking",lookingMouse);
       mouse.changeAnimation("looking");
   }
   
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if (keyCode===LEFT_ARROW){
    cat.addAnimation("running",walkingCat);
    cat.changeAnimation("running");
    cat.velocityX=-3;
    mouse.addAnimation("teasing",teasingMouse);
    mouse.frameDelay=25;
    mouse.changeAnimation("teasing");
}

  //For moving and changing animation write code here


}
