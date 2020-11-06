class Coin {
    constructor(x,y,width,height){
this.x=x
this.y=y
this.width=width
this.height=height
this.body=createSprite(this.x,this.y,this.width,this.height)
this.body.debug=true
this.body.velocityY=-1
this.body.addAnimation("coin",coinAnimation)
this.body.scale=0.1

    }
    display(){
        drawSprites()
    }
}