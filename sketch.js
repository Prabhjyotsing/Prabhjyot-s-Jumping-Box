var orange_,green_,red_,yellow_;
var box_;
var w1,w2,w3,w4;


function setup() {
  createCanvas(1200,800);
  orange_ = createSprite(150, 650, 250, 100);
  orange_.shapeColor = "orange";

  green_ = createSprite(450, 650, 250, 100);
  green_.shapeColor = "green";

  red_ = createSprite(750, 650, 250, 100);
  red_.shapeColor = "red";

  yellow_ = createSprite(1050, 650, 250, 100);
  yellow_.shapeColor = "yellow";

  box_ = createSprite(random(20,750),0,30,30);
  box_.shapeColor = "white";
  box_.velocityX=5;
  box_.velocityY=7;

  w1=createSprite(0,400,10,1200);
 // w1.visible=false;
  BounceOff(box_,w1);
  w2=createSprite(400,1200,1200,10);
 // w2.visible=false;
  BounceOff(box_,w2);
  w3=createSprite(1200,600,10,1200);
 // w3.visible=false;
  BounceOff(box_,w3);
  w4=createSprite(600,0,1200,10);
  //w4.visible=false;
  BounceOff(box_,w4);

 // box.debug=true;
 // orange.debug=true;
 // green.debug=true;
 // red.debug=true;
 // yellow.debug=true;
 
}

function draw() {
  background(0,0,0);  
 // box.x = World.mouseX;
 // box.y = World.mouseY;
 // console.log(wall.x,bullet.x);
 textSize(20);
 text("Don't touch me !",670,600);
 
 if(box_.isTouching(orange_)){
 box_.shapeColor=("orange")
 BounceOff(box_,orange_);
  box_.velocityX=5;
  box_.velocityY=-7;
 }
 if(box_.isTouching(green_)){
  box_.shapeColor=("green")
  BounceOff(box_,green_);
  box_.velocityX=-5;
  box_.velocityY=-7;
  }
  if(box_.isTouching(red_)){
    box_.shapeColor=("red")
    BounceOff(box_,red_);
    box_.velocityX=0;
  box_.velocityY=0;
    }
    if(box_.isTouching(yellow_)){
      box_.shapeColor=("yellow")
      BounceOff(box_,yellow_);
      box_.velocityX=-5;
  box_.velocityY=-7;
      }
      if(box_.isTouching(w1)){
        BounceOff(box_,w1);
        box_.velocityX=8;
      box_.velocityY=7;
        }
        if(box_.isTouching(w2)){
          BounceOff(box_,w2);
          box_.velocityX=5;
        box_.velocityY=-7;
          }
          if(box_.isTouching(w3)){
            BounceOff(box_,w3);
            box_.velocityX=-3;
          box_.velocityY=-5;
            }
            if(box_.isTouching(w4)){
              BounceOff(box_,w4);
              box_.velocityX=-4;
            box_.velocityY=8;
              }
 
  createEdgeSprites();
  //bow_.BounceOff(Edges);
 
  drawSprites();
}

