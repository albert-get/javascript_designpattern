//简单工厂

class Basketball {
    constructor() {
        this.intro="篮球盛行于美国"
    }
    getMember(){
        console.log('每个对需要五名队员')
    }
    getBallSize(){
        console.log('篮球很大')
    }
}

class Football {
    constructor() {
        this.intro='足球在世界范围内很流行'
    }
    getMember(){
        console.log('每个队需要十一名队员')
    }
    getBallSize(){
        console.log('足球很大')
    }
}
class Tennis {
    constructor() {
        this.intro='每年有很多网球系列赛'
    }
    getMember(){
        console.log('每个队需要一名队员')
    }
    getBallSize(){
        console.log('网球很小')
    }
}

function SportsFactory(name){
    switch (name){
        case 'NBA':return new Basketball();
        case 'wordCup':return new Football();
        case 'FrenchOpen':return new Tennis();
    }
}
