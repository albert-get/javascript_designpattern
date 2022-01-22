//抽象工厂模式

class Car {
    constructor() {
        this.type='car'
    }
    getPrice(){
        return new Error('抽象方法不能调用')
    }
    getSpeed(){
        return new Error('抽象方法不能调用')
    }
}
class Bus {
    constructor() {
        this.type='bus'
    }
    getPrice(){
        return new Error('抽象方法不能调用')
    }
    getPassengerNum(){
        return new Error('抽象方法不能调用')
    }
}
class Truck {
    constructor() {
        this.type='truck'
    }
    getPrice(){
        return new Error('抽象方法不能调用')
    }
    getTrainLoad(){
        return new Error('抽象方法不能调用')
    }
}

class BMW extends Car {
    constructor(price,speed) {
        super();
        this.price=price;
        this.speed=speed;
    }
    getPrice() {
        return this.price();
    }
    getSpeed() {
        return this.speed();
    }
}

class YUTONG extends Bus {
    constructor(price,passenger) {
        super();
        this.price=price;
        this.passenger=passenger;
    }
    getPrice() {
        return this.price();
    }
    getPassengerNum() {
        return this.passenger();
    }
}
