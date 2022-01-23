//桥接模式

/**
 * 提供一个中间的接口函数，抽离复用
 * 在真正的操作和对象之间架一座桥梁
 */

class Speed{
    constructor(x,y) {
        this.x=x
        this.y=y
    }
    run(){
        console.log('运动起来')
    }
}

class Color{
    constructor(cl) {
        this.color=cl
    }
    draw(){
        console.log('绘制色彩')
    }
}

class Shape{
    constructor(sp) {
        this.shape=sp
    }
    change(){
        console.log('改变形状')
    }
}

class Ball {
    constructor(x,y,c) {
        this.speed=new Speed(x,y)
        this.color=new Color(c)
    }
    init(){
        this.speed.run()
        this.color.draw()
    }
    
}
