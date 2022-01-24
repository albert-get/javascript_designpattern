//数据访问对象模式

class BaseLocalStorage{
    status={
        SUCCESS:0,
        FAILURE:1,
        OVERFLOW:2,
        TIMEOUT:3
    }
    storage=localStorage||window.localStorage
    constructor(preId,timeSign) {
        this.preId=preId
        this.timeSign=timeSign||'|-|'
    }
    getKey (key){
        return this.preId+key
    }
    set(key1,value,callback,time){
        let status=this.status.SUCCESS,
            key=this.getKey(key1)
        try{
            time=new Date(time).getTime()||time.getTime()
        }catch (e){
            time=new Date().getTime()+1000*60*60*24*31
        }
        try{
            this.storage.setItem(key,time+this.timeSign+value)
        }catch (e){
            status=this.status.OVERFLOW
        }
        callback&&callback.call(this,status,key,value)
    }
    get(key1,callback){
        let status=this.status.SUCCESS,
            key=this.getKey(key1),
            value=null,
            timeSignLength=this.timeSign.length,
            that=this,
            index,
            time,
            result;
        try{
            value=that.storage.getItem(key)
        }catch (e) {
            result={
                status: that.status.FAILURE,
                value:null
            }
            callback&&callback.call(this,result.status,result.value)
            return result
        }
        if(value){
            index=value.indexOf(that.timeSign)
            time=+value.slice(0,index)
            if(new Date(time).getTime()>new Date().getTime()||time===0){
                value=value.slice(index+timeSignLength)
            }else{
                value=null
                status=that.status.TIMEOUT
                that.remove(key)
            }
        }else{
            status=that.status.FAILURE
        }
        result={
            status: status,
            value: value
        }
        callback&&callback.call(this,result.status,result.value)
        return result
    }
    remove(key1,callback){
        let status=this.status.FAILURE,
            key=this.getKey(key1),
            value=null
        try{
            value=this.storage.getItem(key)
        }catch (e) {
            
        }
        if(value){
            try{
                this.storage.removeItem(key)
                status=this.status.SUCCESS
            }catch (e) {
                
            }
        }
        callback&&callback.call(this,status,status>0?null:value.slice(value.indexOf(this.timeSign)+this.timeSign.length))
    }
}