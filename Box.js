class Box{
    constructor(x,y,width,height){
        var options ={
            restitution: 0.2
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width
        this.height = height
    }

    display(){

        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rectMode(CENTER);
        fill (255)

        rect(0,0,this.width,this.height);
        pop()
    }


}
