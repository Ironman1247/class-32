class Sling{

    constructor(bodyA,pointB){

        var options={

            bodyA : bodyA,
            pointB: pointB,
            stiffness : 0.04,
            length : 20,
        }
       this.pointB = pointB
        this.sling=Matter.Constraint.create(options);

        this.image1 = loadImage("sprites/sling1.png")
        this.image2 = loadImage("sprites/sling2.png")
        this.image3 = loadImage("sprites/sling3.png")

        World.add(world,this.sling)
    }
     fly(){
     
        this.sling.bodyA = null;
     }
     attach(body){
      this.sling.bodyA = body
     }

     
    display(){
        image(this.image1,225,230)
        image(this.image2,200,230)
        if(this.sling.bodyA){

        
        var pA = this.sling.bodyA.position
        var pB=  this.pointB
       push();
        stroke(70,35,15)
        strokeWeight(4)
        if(pA.x < 240){
        
        line(pA.x-20,pA.y,pB.x-10,pB.y)
        line(pA.x-20,pA.y,pB.x+30,pB.y)
        image(this.image3,pA.x-30,pA.y-15,15,30)
        pop();
        }
        else {

            
            line(pA.x+25,pA.y,pB.x-10,pB.y)
            line(pA.x+25,pA.y,pB.x+30,pB.y)
            image(this.image3,pA.x+25,pA.y-15,15,30)
            
        }
        pop();
        }
         
    }

}