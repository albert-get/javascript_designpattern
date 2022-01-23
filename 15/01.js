//享元模式

let FlyWeight={
    moveX(x){
        this.x=x
    },
    moveY(y){
        this.y=y
    }
}

function Player(x,y,c){
    this.x=x
    this.y=y
    this.color=c
}
Player.prototype=FlyWeight
Player.prototype.changeC=function (c){
    this.color=c
}
function Spirit(x,y,r){
    this.x=x
    this.y=y
    this.r=r
}
Spirit.prototype=FlyWeight
Spirit.prototype.changeR=function (r){
    this.r=r
}
