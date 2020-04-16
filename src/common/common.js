
export function strengthenProbability(lev,stoneType) {//不同等级不同强化石头的概率
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
export function strengthenGo(lev,val,strengthenVal,stoneNum){ //强化以及返回结果
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
export  function ifFail(lev,stoneType) { //不同石头强化失败返回的精炼度
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
const data = [
    {
        level:3,
        Probability:65,
        fullVal:18,
        valOfNone:0,
        valOfQK:0,
        valOfTG:0,
        valOfDS:0
    },
    {
        level:4,
        Probability:50,
        fullVal:18,
        valOfNone:3,
        valOfQK:0,
        valOfTG:0,
        valOfDS:0
    },
    {
        level:5,
        Probability:42,
        fullVal:20,
        valOfNone:5,
        valOfQK:0,
        valOfTG:0,
        valOfDS:0
    },
    {
        level:6,
        Probability:36,
        fullVal:32,
        valOfNone:5,
        valOfQK:0,
        valOfTG:0,
        valOfDS:0
    },
    {
        level:7,
        Probability:35,
        fullVal:42,
        valOfNone:8,
        valOfQK:10,
        valOfTG:0,
        valOfDS:0
    },
    {
        level:8,
        Probability:34,
        fullVal:62,
        valOfNone:10,
        valOfQK:10,
        valOfTG:0,
        valOfDS:0
    },
    {
        level:9,
        Probability:33,
        fullVal:336,
        valOfNone:0,
        valOfQK:0,
        valOfTG:0,
        valOfDS:0
    },
    {
        level:10,
        Probability:32,
        fullVal:347,
        valOfNone:0,
        valOfQK:0,
        valOfTG:0,
        valOfDS:0
    },
    {
        level:11,
        Probability:31,
        fullVal:358,
        valOfNone:0,
        valOfQK:0,
        valOfTG:0,
        valOfDS:0
    },
    {
        level:12,
        Probability:27,
        fullVal:411,
        valOfNone:0,
        valOfQK:0,
        valOfTG:0,
        valOfDS:0
    },
    {
        level:13,
        Probability:24,
        fullVal:463,
        valOfNone:0,
        valOfQK:0,
        valOfTG:0,
        valOfDS:0
    },
    {
        level:14,
        Probability:21,
        fullVal:529,
        valOfNone:0,
        valOfQK:0,
        valOfTG:0,
        valOfDS:0
    },
    {
        level:15,
        Probability:18,
        fullVal:3017,
        valOfNone:0,
        valOfQK:0,
        valOfTG:0,
        valOfDS:0
    },
    // {
    //     level:1,
    //     valOfNone:0,
    //     valOfQK:0,
    //     valOfTG:0,
    //     valOfDS:0
    // },
    // {
    //     level:1,
    //     valOfNone:0,
    //     valOfQK:0,
    //     valOfTG:0,
    //     valOfDS:0
    // },
    // {
    //     level:1,
    //     valOfNone:0,
    //     valOfQK:0,
    //     valOfTG:0,
    //     valOfDS:0
    // },
    // {
    //     level:1,
    //     valOfNone:0,
    //     valOfQK:0,
    //     valOfTG:0,
    //     valOfDS:0
    // },
    // {
    //     level:1,
    //     valOfNone:0,
    //     valOfQK:0,
    //     valOfTG:0,
    //     valOfDS:0
    // },
    // {
    //     level:1,
    //     valOfNone:0,
    //     valOfQK:0,
    //     valOfTG:0,
    //     valOfDS:0
    // },
    // {
    //     level:1,
    //     valOfNone:0,
    //     valOfQK:0,
    //     valOfTG:0,
    //     valOfDS:0
    // },
    // {
    //     level:1,
    //     valOfNone:0,
    //     valOfQK:0,
    //     valOfTG:0,
    //     valOfDS:0
    // },
    // {
    //     level:1,
    //     valOfNone:0,
    //     valOfQK:0,
    //     valOfTG:0,
    //     valOfDS:0
    // },
    // {
    //     level:1,
    //     valOfNone:0,
    //     valOfQK:0,
    //     valOfTG:0,
    //     valOfDS:0
    // },
    // {
    //     level:1,
    //     valOfNone:0,
    //     valOfQK:0,
    //     valOfTG:0,
    //     valOfDS:0
    // },
]

