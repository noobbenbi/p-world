<template>
  <div class="NoMetaphysics">
      <div class="gm-box">
          <p>选择起始套装：</p>
          <RadioGroup v-model="chosenOrder" @on-change="changeModel1">
            <!-- <Radio v-for="item in gongmingList" :lable="item.value" :key="item.value">
                <span>{{item.label}}</span></Radio> -->
            <Radio :label="gongmingList[0].value">    
                <span>{{gongmingList[0].label}}</span>
            </Radio>  
            <Radio :label="gongmingList[1].value">    
                <span>{{gongmingList[1].label}}</span>
            </Radio>
            <Radio :label="gongmingList[2].value">         
                <span>{{gongmingList[2].label}}</span>
            </Radio>
            <Radio :label="gongmingList[3].value">         
                <span>{{gongmingList[3].label}}</span>
            </Radio>
          </RadioGroup>
      </div>
      <div class="stone-box">
          <p>选择精炼材料：</p>
          <RadioGroup v-model="stone" @on-change="changeModel2">
            <Radio label="1" >
                <span>无</span>
            </Radio>
            <Radio label="2">    
                <span>乾坤</span>
            </Radio>
            <Radio label="3">         
                <span>天罡</span>
            </Radio>
            <Radio label="4">         
                <span>地煞</span>
            </Radio>
          </RadioGroup>
      </div>
      <div class="zb-box">
          <p>选择要精炼的部位：</p>
        <RadioGroup v-model="vertical" vertical @on-change="changeModel3">
            <Radio label="1">
                <span>{{this.equipmentList[0].name}}:+{{this.equipmentList[0].level}}---({{this.equipmentList[0].strengthenVal}}/{{this.getFullVal(this.equipmentList[0].level)}})</span>
            </Radio>
            <Radio label="2">
                <span>{{this.equipmentList[1].name}}:+{{this.equipmentList[1].level}}---({{this.equipmentList[1].strengthenVal}}/{{this.getFullVal(this.equipmentList[1].level)}})</span>
            </Radio>
            <Radio label="3">
                <span>{{this.equipmentList[2].name}}:+{{this.equipmentList[2].level}}</span>
            </Radio>
            <Radio label="4">
                <span>{{this.equipmentList[3].name}}:+{{this.equipmentList[3].level}}</span>
            </Radio>
            <Radio label="5">
                <span>{{this.equipmentList[4].name}}:+{{this.equipmentList[4].level}}</span>
            </Radio>
            <Radio label="6">
                <span>{{this.equipmentList[5].name}}:+{{this.equipmentList[5].level}}</span>
            </Radio>
            <Radio label="7">
                <span>{{this.equipmentList[6].name}}:+{{this.equipmentList[6].level}}</span>
            </Radio>
            <Radio label="8">
                <span>{{this.equipmentList[7].name}}:+{{this.equipmentList[7].level}}</span>
            </Radio>
            <Radio label="9">
                <span>{{this.equipmentList[8].name}}:+{{this.equipmentList[8].level}}</span>
            </Radio>
            <Radio label="10">
                <span>{{this.equipmentList[9].name}}:+{{this.equipmentList[9].level}}</span>
            </Radio>
            <Radio label="11">
                <span>{{this.equipmentList[10].name}}:+{{this.equipmentList[10].level}}</span>
            </Radio>
            <Radio label="12">
                <span>{{this.equipmentList[11].name}}:+{{this.equipmentList[11].level}}</span>
            </Radio>
            <Radio label="13">
                <span>{{this.equipmentList[12].name}}:+{{this.equipmentList[12].level}}</span>
            </Radio>
        </RadioGroup>
      </div>
      <div class="btn-box">
          <Button type="primary" @click="toDo">精炼</Button>
          <Button type="warning">重置</Button>
          <span>元宝消耗：{{this.consume}}</span>
      </div>
  </div>
</template>

<script>
// import { fun } from '../common/fun.js'
import Data from '../common/data.json'
import Equipment from '../common/newequipment.json'
export default {
  name: 'NoMetaphysics',
  data() {
      return {
          chosenOrder:'',
          stone:'',
          stoneType:2,//石头类型
          vertical: 1,
          level:'',//当前强化等级
          theKey:'',
          probabilityValue:0,//成功率
          strengthenVal:0,//精炼度
          stoneNum:0,//
          consume:0,//消耗元宝
          qkLevel:1,//乾坤石头等级
          dsLevel:1,//地煞石头等级
          equipmentList:Equipment,
          id:'',
          gongmingList:[
              {
                  label:'12套',
                  value:12
              },
              {
                  label:'15套',
                  value:15
              },
              {
                  label:'17套',
                  value:17
              },
              {
                  label:'20套',
                  value:20
              },
          ],
          
          
      }
  },
  methods:{
      changeModel1(val) {//选择初始套装
          for(var i=0;i<this.equipmentList.length;i++){
              this.equipmentList[i].level = val;
          }
      },
      changeModel2(val) {//选择强化石头
          this.stoneType = val;
      },
      changeModel3(val){
          this.id = val-1;
        //   console.log(this.id);
      },
      getFullVal(val){//获取满精炼度
          for (let i = 0; i < Data.length; i++) {
              if (val == Data[i].level) {
                  return Data[i].fullVal;
              }
              
          } 
      },
      custOfStone(type,level){//选择不同的石头强化一次所消耗的元宝
          if (type == 2&&level < 9) {
              this.consume = this.consume + 72;
              return this.consume;
          } else if(type == 2&&level > 8&&level<15){
              this.consume = this.consume +432;
              return this.consume;
          } else if(type == 2&&level >14){
              this.consume = this.consume +2160;
          } else if(type == 3){
              this.consume = this.consume + 132;
          }else if(type == 4&&level > 14){
              this.consume = this.consume + 60;
          }
      },
      
      toDo() {
          
        //   this.level = this.equipmentList[this.id].level;
        //   this.strengthenVal = this.equipmentList[this.id].strengthenVal;
          console.log('目前精炼度为：'+this.equipmentList[this.id].strengthenVal);
          console.log('免费上所需精炼度为：'+Data[this.equipmentList[this.id].level-3].fullVal)
          console.log('上次精炼等级：'+this.equipmentList[this.id].level);
          this.probabilityValue = this.strengthenProbability(this.equipmentList[this.id].level,this.stoneType);
          this.theKey = this.strengthenGo(this.equipmentList[this.id].level,this.probabilityValue);
          if(this.equipmentList[this.id].strengthenVal >= Data[this.equipmentList[this.id].level-3].fullVal){//满精炼度情况
              this.equipmentList[this.id].level++;
              this.equipmentList[this.id].strengthenVal = 0;
              console.log('满精炼度，免费上');
          } else if (this.theKey) {//成功
              this.equipmentList[this.id].level++;
              this.equipmentList[this.id].strengthenVal = 0;
              this.custOfStone(this.stoneType,this.equipmentList[this.id].level);
          } else if(!this.theKey&&this.stoneType == 1) {//石头1失败
              this.equipmentList[this.id].level--;
              this.equipmentList[this.id].strengthenVal = this.equipmentList[this.id].strengthenVal+this.ifFail(this.equipmentList[this.id].level,1);
              this.custOfStone(this.stoneType,this.equipmentList[this.id].level);
          }else if(!this.theKey&&this.stoneType == 2){//石头2失败
              this.equipmentList[this.id].strengthenVal = this.equipmentList[this.id].strengthenVal+this.ifFail(this.equipmentList[this.id].level,2);
              this.custOfStone(this.stoneType,this.equipmentList[this.id].level);
          }else if(!this.theKey&&this.stoneType == 3){//石头3失败
              this.equipmentList[this.id].level--;
              this.equipmentList[this.id].strengthenVal = this.equipmentList[this.id].strengthenVal+this.ifFail(this.equipmentList[this.id].level,3);
              this.custOfStone(this.stoneType,this.equipmentList[this.id].level);
              console.log('天罡失败，精炼度+：'+this.equipmentList[this.id].strengthenVal)
          }else if(!this.theKey&&this.stoneType == 4) {//石头4失败
              this.equipmentList[this.id].strengthenVal = this.equipmentList[this.id].strengthenVal+this.ifFail(this.equipmentList[this.id].level,4);
              this.custOfStone(this.stoneType,this.equipmentList[this.id].level);
          }
        //   console.log(this.level,this.probabilityValue,this.strengthenVal);
        //   console.log(this.equipmentList[0].lable);
        //   console.log(this.strengthenProbability(this.level,this.stoneType));
      },
      strengthenProbability(lev,stoneType) {//计算不同等级不同强化石头的概率
            for(var i = 0;i < Data.length; i++){
                if (lev == Data[i].level) {
                    if (stoneType == 1||stoneType == 2) {
                        return Data[i].Probability;
                    } else if(stoneType == 3){
                        return Data[i].Probability +15;
                    }else if(stoneType == 4){
                        return  3;
                    }
                } 
            }
        },
        strengthenGo(lev,val){ //强化以及返回结果
                     if (val > Math.floor(100*Math.random())) {
                        return true;
                    } else {
                        return false;
            }
        },
        ifFail(lev,stoneType) { //不同石头强化失败返回的精炼度
                for(var i = 0;i < Data.length; i++) {
                    if(lev == Data[i].level-1){
                        if(stoneType == 1){
                            return Data[i].valOfNone;
                        }else if (stoneType == 2) {
                            return Data[i].valOfQK;
                        } else if(stoneType == 3){
                            return Data[i].valOfTG;
                        }else if(stoneType == 4) {
                            return Data[i].valOfDS;
                        }
                    }
                }
            }
  },
  components: {
  }
}
</script>

<style scoped>

</style>