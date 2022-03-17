const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundimg;
var tower,towerimg;
var cannon,cannonimg;
var cannonBall;
var angle = 20
var balls =[];

function preload() {
  backgroundimg = loadImage('./assets/background.gif');
  towerimg = loadImage('./assets/tower.png');
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  angle = 15;

  cannon = new Cannon(180,110,130,100,angle);

 options={
 isStatic:true
 }
 
 ground= Bodies.rectangle(0,height-1, width*2,1,options);
 World.add(world,ground);

 tower= Bodies.rectangle(160,350,160,310,options);
 World.add(world,tower);
}

function draw() {
  image(backgroundimg,0,0,1200,600);
  Engine.update(engine);
 
 rect(ground.position.x, ground.position.y,width*2,1);

 push();
 imageMode(CENTER);
 image(towerimg,tower.position.x, tower.position.y,160,310);
 pop();
 
 for(var i=0;i<balls.length;i++){
   showCannonBalls(balls[i]);
 }

 cannon.display();
}
function keyPressed() { 
  if(keyCode == DOWN_ARROW){
    var cannonBall = new CannonBall(cannon.x,cannon.y);
    cannonBall.trajectory = [];
    Matter.Body.setAngle(cannonBall.body,cannon.angle);
    balls.push(cannonBall);
  }
}
  function showCannonBalls(ball){
    if (ball){
      ball.display();
    }
  }
function keyReleased() {
  if(keyCode == DOWN_ARROW){
    balls[balls.length-1].shoot();
  }
}



  
