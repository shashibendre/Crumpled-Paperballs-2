class Paperball {
    constructor(x, y,width,height ) {
      var options = {
          isStatic : false,
          'restitution':0.9,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, 20, 20, options);
      this.width = 20;
      this.height = 20;
      
      this.paperballImg = loadImage("paperball.png") ;

      World.add(world, this.body);
      World.add(world,this.paperballImg);

    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      image(this.paperballImg,paperball.body.positionX,paperball.body.positionY);
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("grey");
      fill('white');
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
  