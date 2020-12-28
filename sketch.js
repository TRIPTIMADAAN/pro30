
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = 	Matter.Constraint;
var mango1,mango2,mango3,mango4,mango4,sling,stone,boy,tree,ground
function preload(){
	boy=loadImage("boy.png")
	tree=loadImage("tree.png")
}
function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    mango1=new Mango(790,510)
	mango2=new Mango(775,560)
	mango3=new Mango(730,580)
	mango4=new Mango(685,470)
	mango5=new Mango(700,555)
	stone=new Stone(135,603)
	sling=new SlingShot(stone.body,{x:135,y:603})
	ground=new Ground()
	Engine.run(engine);
  
}


function draw() {
  
  background("white");
 image(boy,120,560,90,170)
 image(tree,630,430,230,300)
  detectollision(stone,mango1)
  detectollision(stone,mango2)
  detectollision(stone,mango3)
  detectollision(stone,mango4)
  detectollision(stone,mango5)
  mango1.display()
  mango2.display()
  mango4.display()
  mango3.display()
  mango5.display()
  stone.display()
  sling.display()
  ground.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:235,y:420})
		launcherObject.attach(stone.body)
	}
}
function detectollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPositioon=lstone.body.position
	var distance=dist(stoneBodyPositioon.x,stoneBodyPositioon.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
       Matter.Body.setStatic(lmango.body,false)
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	console.log("yes")
    sling.fly()
}

