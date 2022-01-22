//原型模式

class LoopImages{
    constructor(imgArr,container) {
        this.imagesArr=imgArr;
        this.container=container;
    }
    createImage(){

    }
    changeImage(){

    }
}
class SlideLoopImage extends LoopImages{
    constructor(imgArr,container) {
        super(imgArr,container);
    }
    createImage() {
        super.createImage();
        console.log('slide')
    }
    changeImage() {
        super.changeImage();
        console.log('change')
    }
}
class FadeLoopImage extends LoopImages{
    constructor(imgArr,container) {
        super(imgArr,container);
    }
    createImage() {
        super.createImage();
        console.log('fade')
    }
    changeImage() {
        super.changeImage();
        console.log('change')
    }
}
