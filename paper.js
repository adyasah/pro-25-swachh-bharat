class Paper{
    constructor(x,y,r){
        var options ={
            restitution:1,
            density:1,
            friction:1,
        
        }

    this.body = Matter.Bodies.circle(x,y,r,options)
    this.image =loadImage("images/paper.png");
    Matter.World.add(wld,this.body);
    this.r =r;
    }



    show(){

        push ();
       // fill ("white");
       // ellipseMode(CENTER);
        //ellipse(this.body.position.x,this.body.position.y,this.r*2,this.r*2)
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,50,50)
        pop ();
    }
}
