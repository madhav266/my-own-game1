class Player {
    constructor(x,y,width,height){
this.x=x
this.y=y
this.width=width
this.height=height
this.body=createSprite(this.x,this.y,this.width,this.height)
this.body.addImage("player",playerImage)
this.body.scale=0.15
    }
    display(){
        drawSprites()
    }
}