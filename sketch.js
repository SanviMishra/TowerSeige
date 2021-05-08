const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var ground, base;
var box1, box2, box3, box4, box5, box6, box7, box8, box9;
var ball;
var slingShot;
var bg = "white";
var score = 0;
function preload() {
  getBackgroundImage();
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(800, 400);
  createSprite(400, 200, 50, 50);
  ground = new Ground(600, height, 1200, 20);
  base = new Ground(400, 255, 200, 20);
  //level two

  box1 = new Box(330, 235, 30, 40);
  box2 = new Box(360, 235, 30, 40);
  box3 = new Box(390, 235, 30, 40);
  box4 = new Box(420, 235, 30, 40);
  box5 = new Box(450, 235, 30, 40);
  //level three
  box6 = new Box(360, 195, 30, 40);
  box7 = new Box(390, 195, 30, 40);
  box8 = new Box(420, 195, 30, 40);
  //top
  box9 = new Box(390, 155, 30, 40);

  ball = Bodies.circle(50, 200, 20);

  //this.image = loadImage("polygon.png");
  World.add(world, ball);

  slingShot = new SlingShot(ball, { x: 100, y: 200 });
}

function draw() {
  background(bg);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 10, 10);
  Engine.update(engine);
  ground.display();
  base.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  slingShot.display();

  text("SCORE : " + score, 500, 40);

  // drawSprites();
}
function mouseDragged() {
  Matter.Body.setPosition(ball, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  slingShot.fly();
}
function keyPressed() {
  if (keyCode === 32) {
    slingShot.attach(ball);
  }
}
async function getBackgroundImage() {
  var response = await fetch(
    "https://worldtimeapi.org/api/timezone/Asia/Kolkata"
  );
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  if (hour >= 06 && hour <= 18) {
    bg = "yellow";
  } else {
    bg = "blue";
  }
}
//console.log(hour);
