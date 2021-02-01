class Dustbin{
    constructor(x,y,w,h){

    this.body = Matter.Bodies.rectangle(x,y,w,h,{isStatic:true})
    Matter.World.add(wld,this.body);
    this.width = w;
    this.hight = h;
    this.image=loadImage("images/dustbingreen.png")
    }



    show(){

        push ();
        //fill ("green");
        imageMode(CENTER);
        image(this.image,575,520,140,130)
        pop ();
    }
}