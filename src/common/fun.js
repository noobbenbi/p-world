function strengthenProbability(lev,stoneType) {//不同等级不同强化石头的概率
    for(var i = 0;i < data.length; i++){
        if (lev == data[i].level) {
            if (stoneType == 1||stoneType == 2) {
                return data[i].Probability;
            } else if(stoneType == 3){
                return data[i].Probability +15;
            }else if(stoneType == 4){
                return  3;
            }
        } 
    }
}

function strengthenGo(lev,val,strengthenVal,stoneNum){ //强化以及返回结果
    if(strengthenVal >= data[lev-1].fullVal){
        return true ;
    }else if (val > Math.floor(100*Math.random())) {
        stoneNum = stoneNum+1;
        return true;
    } else {
        stoneNum = stoneNum + 1;
        return false;
}
}

function ifFail(lev,stoneType) { //不同石头强化失败返回的精炼度
    for(var i = 0;i < data.length; i++) {
        if(lev == data[i].level){
            if(stoneType == 1){
                return data[i].valOfNone;
            }else if (stoneType == 2) {
                return data[i].valOfQK;
            } else if(stoneType == 3){
                return data[i].valOfTG;
            }else if(stoneType == 4) {
                return data[i].valOfDS;
            }
        }
    }
}
