//策略模式

function PriceStrategy(){
    let strategy={
        return30:function (price){
            return +price+parseInt(price/100)*30
        },
        return50:function (price){
            return +price+parseInt(price/100)*50
        },
        percent90:function (price){
            return price*100*90/10000
        },
        percent80:function (price){
            return price*100*80/10000
        },
        percent50:function (price){
            return price*100*50/10000
        }
    }
    return function (algorithm,price){
        return strategy[algorithm]&&strategy[algorithm](price)
    }
}
