//状态模式

class MarryState{
    currentState={}
    states={
        jump(){
            console.log('jump')
        },
        move(){
            console.log('move')
        },
        shoot(){
            console.log('shoot')
        },
        squat(){
            console.log('squat')
        }
    }
    changeState(){
        let arg=arguments
        if(arg.length){
            for(let i=0,len=arg.length;i<len;i++){
                this.currentState[arg[i]]=true
            }
        }
        return this
    }
    goes(){
        console.log('触发一次动作')
        for(let i in this.currentState){
            this.states[i]&&this.states[i]()
        }
        return this
    }
}
