class DustbinP2 {
    constructor(x, y,width,height ) {
      var options = {
          isStatic : false,
          'restitution':0.3,
          'friction':10.5,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, 70, 10, options);
      this.width = 70;
      this.height = 10;
      
      this.dustbinImg = loadImage("dustbingreen.png") ;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      image(this.dustbinImg,dustbinP2.body.positionX,dustbinP2.body.positionY);
      stroke("green");
      fill('green');
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  