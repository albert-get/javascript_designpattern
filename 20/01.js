//职责链模式

function sendData(data,dealType,dom){
    let xhr=new XMLHttpRequest(),url='getData.php?mod=userInfo'
    xhr.onload=function (event){
        if((xhr.status>=200&&xhr.status<300)||xhr.status===304){
            dealData(xhr.responseText,dealType,dom)
        }else {

        }
    }
    for(let i in data){
        url+='&'+i+'='+data[i]
    }
    xhr.open('get',url,true)
    xhr.send(null)
}
function dealData(data,dealType,dom){
    let dataType=Object.prototype.toString.call(data)
    switch (dealType){
        case 'sug':
            if(dataType==='[object Array]'){
                return createSug(data,dom)
            }
            if(dataType==='[object Object]'){
                let newData=[]
                for(let i in data){
                    newData.push(data[i])
                }
                return createSug(newData,dom)
            }
            return createSug([data],dom)
        case 'validate':
            return createValidataResult(data,dom)
    }
}
function createSug(data,dom){
    let i=0,len=data.length,html='';
    for(;i<len;i++){
        html+='<li>'+data[i]+'</li>'
    }
    dom.parentNode.getElementsByClassName('ul')[0].innerHTML=html
}
function createValidataResult(data,dom){
    dom.parentNode.getElementsByTagName('span')[0].innerHTML=data
}
