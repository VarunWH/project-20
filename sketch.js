var bgimg;
var catimg1,mouseimg2,catimg2,mouseimg1,mouseimg3,catimg3;

function preload() {
    //load the images here
    bgimg = loadImage("garden.png");
    catimg1 = loadAnimation("cat1.png");
    mouseimg1 = loadAnimation("mouse4.png");
    catimg2 = loadAnimation("cat3.png","cat2.png");
    mouseimg2 = loadAnimation("mouse3.png");
    mouseimg3 = loadAnimation("mouse1.png");
    catimg3 = loadAnimation("cat4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg=createSprite(500,360,20,20);
    bg.addImage("background",bgimg);
  
  cat=createSprite(750,620,20,20);
  cat.addAnimation("normalc",catimg1);
  cat.scale=0.1;
   
  mouse=createSprite(200,620,20,20);
  mouse.addAnimation("normalm",mouseimg1);
  mouse.scale=0.1;
  
}

function draw() {

    background(0);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
   mouse.addAnimation("mouseteasing",mouseimg2);
    mouse.changeAnimation("mouseteasing");
    mouse.frameDelay = 25;
    
    
  }

  if(keyCode === LEFT_ARROW){
    cat.addAnimation("catrunning",catimg2)
    cat.changeAnimation("catrunning");
    cat.frameDelay = 25;
    cat.scale=0.2;
    cat.velocityX = -1;
    
    
  }
  
  if(mouse.isTouching(cat))  {
    mouse.addAnimation("happyend",mouseimg3);
    mouse.changeAnimation("happyend");
   // cat.addAnimation("happycat",catimg3);
    //cat.changeAnimation("happycat");
    //cat.velocityX=0;
    
  }
  
  
}
