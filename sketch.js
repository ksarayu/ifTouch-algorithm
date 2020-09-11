var fixed_rect, moving_rect, third_rect;

function setup() {
  createCanvas(800,400);
  fixed_rect=createSprite(400, 200, 50, 50);
  fixed_rect.shapeColor = "blue";
  moving_rect=createSprite(400, 200, 50, 50);
  moving_rect.shapeColor = "blue";
  third_rect=createSprite(200, 200, 50, 50);
  third_rect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);  

  moving_rect.x = mouseX;
  moving_rect.y = mouseY;

  if(ifTouch(moving_rect, fixed_rect)){
    moving_rect.shapeColor = "purple";
    fixed_rect.shapeColor = "purple";
  }
  else if(ifTouch(moving_rect, third_rect)){
    moving_rect.scale = 3;
    third_rect.scale = 3;
  }
  else{
    moving_rect.shapeColor = "blue";
    moving_rect.scale = 1;
    fixed_rect.shapeColor = "blue";
    third_rect.scale = 1;
  }

  drawSprites();
}
