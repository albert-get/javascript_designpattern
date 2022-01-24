//备忘录模式

class Page{
    static cache={}
    static get(page,fn){
        if(this.cache[page]){
            showPage(page,this.cache[page])
            fn&&fn()
        }else{
            $.post('./data/getNewsData.php',{
                page:page
            },function (res){
                if(res.errNo==0){
                    showPage(page,res.data)
                    this.cache[page]=res.data
                    fn&&fn()
                }else{
                    
                }
            })
        }
    }
}