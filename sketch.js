var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box16, box15, box16
var slingShot;
var polygon; 

function preload() {
  polygonImage = loadImage("polygon.png");
}
function setup() {
createCanvas(800, 400);

engine = Engine.create();
world = engine.world
ground1 = new Ground(170, 200, 320, 20);

box1 = new Box (330, 235, 30, 40);
box1.shapeColor = "blue";
box2 = new Box (360, 235, 30, 40);
box2.shapeColor = "blue";
box3 = new Box (390, 235, 30, 40);
box3.shapeColor = "blue";
box4 = new Box (420, 235, 30, 40);
box4.shapeColor = "blue";
box5 = new Box (450,235, 30, 40);
box5.shapeColor = "blue";
box6 = new Box (480, 235, 30, 40);
box6.shapeColor = "blue";
box7 = new Box (510, 235, 30, 40);
box7.shapeColor = "blue";

box8 = new Box (540, 235, 30, 40);
box8.shapeColor = "grey";
box9 = new Box (570, 235, 30, 40);
box9.shapeColor = "grey";
box10 = new Box (600, 235, 30, 40);
box10.shapeColor = "grey";
box11 = new Box (630, 235, 30, 40);
box11.shapeColor = "grey";
box12 = new Box (660, 235, 30, 40);
box12.shapeColor = "grey";

box13 = new Box (690, 235, 30, 40);
box13.shapeColor = "white";
box14 = new Box (720, 235, 30, 40);
box14.shapeColor = "white";
box15 = new Box (750, 235, 30, 40);
box15.shapeColor = "white";

box16 = new Box (780, 235, 30, 40);
box16.shapeColor = "pink";

sling = new SlingShot(polygon_1.body, { x: 70, y: 90 });
polygon.addImage(polygonImage);
Engine.run(engine);

drawSprites(); 


imageMode(CENTER){
image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);
slingShot.display();
}

function MouseDragged() {
  Matter.Body.setPosition(this.polygon, {x:mouseX, y:mouseY});
}
function mouseReleased() {
    slingShot.fly(); 
}
}
