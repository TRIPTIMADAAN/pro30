class Ground{
    constructor(){
         var options={
             isStatic:true
         }
         this.body=Bodies.rectangle(width/2,height,width,40,options)
         World.add(world,this.body)
          this.w=width;
          this.h=40;
    }
    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
    }
}