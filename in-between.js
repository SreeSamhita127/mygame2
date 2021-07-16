class LevelPage{
    constructor(){
        this.level1 = createButton("Click To Play");
        this.back = createButton("Level Page");
    }
    display(){
        this.level1.position(775,600);
        this.back.position(30,30);

        this.back.mousePressed(()=>{
            gameState = 10;
            this.display();
        })
        this.back.mousePressed(()=>{
            gameState = 10;
            this.display();
        })
        this.level1.mousePressed(()=>{
            gameState = 1;
            this.hideAll();
        })
    }
  
   
    hideAll(){
        this.level1.hide();
    }
}