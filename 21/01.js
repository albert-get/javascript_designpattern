//命令模式

let viewCommand=(function (){
    let tpl={
        product:`
        <div>
            <img src="{#src#}"/>
            <p>{#text#}</p>
        </div>
        `,
        title:`
        <div class="title">
            <div class="main">
                <h2>{#title#}</h2>
                <p>{#tips#}</p>
            </div>
        </div>
        `
    },
    html='';
    function formateString(str,obj){
        return str.replace(/\{#(\w+)#\}/g,function (match,key){
            return obj[key]
        })
    }
    let Action={
        create(data,view){
            if(data.length){
                for(let i=0,len=data.length;i<len;i++){
                    html+=formateString(tpl[view],data[i])
                }
            }else{
                html+=formateString(tpl[view],data)
            }
        },
        display(container,data,view){
            if(data){
                this.create(data,view)
            }
            document.getElementById(container).innerHTML=html
            html=''
        }
    }
    return function excute (msg){
        msg.param=Object.prototype.toString.call(msg.param)==='[object Array]'?msg.param:[msg.param]
        Action[msg.command].apply(Action,msg.param)
    }

})