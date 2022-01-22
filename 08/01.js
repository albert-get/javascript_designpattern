//单例模式



class MyMethod{
    Util(){
        console.log('util')
    }
    Ajax(){
        console.log('ajax')
    }
}

//1

export default new MyMethod()

//2


export function getTool(){
    let MyTool
    if(!MyTool){
        MyTool=new MyMethod()
    }
    return MyTool
}
