class Player{
    constructor(){
        var options={
            friction: 1,
            restitution: 1.5,
            density:1
        }
        this.body = Bodies.rectangle(800,750,50,50,options);
        World.add(world, this.body);
    }
        display(){
            createSprite(this.body.position.x,this.body.position.y,50,50);
        }
}