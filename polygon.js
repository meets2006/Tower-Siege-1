class Polygon{
    constructor(x,y,r)
    {
        var opt={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.circle(x,y,r,opt)
        this.r=r
        this.image=loadImage("polygon.png");
        World.add(world,this.body)
    }
    display()
    {
        var pos =this.body.position;

    push();
    translate(pos.x, pos.y);
    rotate(this.body.angle)
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop();
    }
}