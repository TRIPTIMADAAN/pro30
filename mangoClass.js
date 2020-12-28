class Mango{
constructor(x,y){
    var options ={
        isStatic:true
    }  
    this.body=Bodies.circle(x,y,20,options)
    World.add(world,this.body)
    this.image=loadImage("mango.png")
    this.r=20
}
     display(){
         imageMode(CENTER)
         image(this.image,this.body.position.x,this.body.position.y,40,40)
     }
}