//建造者模式

/**
 * 将很多小的功能划分为一类，然后将这些类组合起来
 */

class Human{
    constructor(param) {
        this.skill = param && param.skill || '保密';
        this.hobby = param && param.hobby || '保密';
    }
    getSkill(){
        return this.skill
    }
    getHobby(){
        return this.hobby
    }
}

class Name{
    constructor(name) {
        this.wholeName=name;
        if(name.indexOf(' ')>-1){
            this.firstName=name.slice(0,name.indexOf(' '))
            this.laseName=name.slice(name.indexOf(' '))
        }
    }
}

class Work{
    constructor(work) {
        switch (work){
            case 'code':
                this.work='工程师';
                this.workDescript='每天沉醉于编程';
                break;
            case 'UE':
                this.work='设计师';
                this.workDescript='设计更似一种艺术';
                break;
            case 'teach':
                this.work='教师';
                this.workDescript='分享也是一种快乐';
                break;
            default :
                this.work=work;
                this.workDescript='对不起，我们还不清楚你所选职位的描述';
        }
    }
    changeWork(work){
        this.work=work;
    }
    changeDescript(setence){
        this.workDescript=setence;
    }
}

function person(name,work){
    let _person=new Human();
    _person.name=new Name(name);
    _person.work=new Work(work);
    return _person
}
