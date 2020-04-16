<template>
  <div class="NoMetaphysics">
      <div class="gm-box">
          <p>选择起始套装：</p>
          <RadioGroup v-model="chosenOrder" @on-change="changeModel">
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
        <RadioGroup v-model="vertical" vertical>
            <Radio label="1">
                <span>武器+{{level}}</span>
            </Radio>
            <Radio label="2">
                <span>手套+{{level}}</span>
            </Radio>
            <Radio label="3">
                <span>戒子+{{level}}</span>
            </Radio>
            <Radio label="4">
                <span>戒子+{{level}}</span>
            </Radio>
            <Radio label="5">
                <span>头盔+{{level}}</span>
            </Radio>
            <Radio label="6">
                <span>衣服+{{level}}</span>
            </Radio>
            <Radio label="7">
                <span>披风+{{level}}</span>
            </Radio>
            <Radio label="8">
                <span>裤子+{{level}}</span>
            </Radio>
            <Radio label="9">
                <span>鞋子+{{level}}</span>
            </Radio>
            <Radio label="10">
                <span>项链+{{level}}</span>
            </Radio>
            <Radio label="11">
                <span>腰佩+{{level}}</span>
            </Radio>
            <Radio label="12">
                <span>同心镜+{{level}}</span>
            </Radio>
            <Radio label="13">
                <span>印记+{{level}}</span>
            </Radio>
        </RadioGroup>
      </div>
      <div class="btn-box">
          <Button type="primary" @click="toDo">精炼</Button>
          <Button type="warning">重置</Button>
      </div>
  </div>
</template>

<script>

export default {
  name: 'NoMetaphysics',
  data() {
      return {
          chosenOrder:'',
          stone:'',
          stoneval:0,
          vertical: 1,
          level:'',
          val:100,
          strengthenVal:0,
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
      changeModel(val) {
          console.log(val);
          this.level = val;
      },
      changeModel2(val){
          console.log(val);
          console.log(this.level);
      },
      toDo(){
        //   let num = Math.floor(100*Math.random());
          if (this.level == 1||this.level == 2) {
              this.level++;
          } else if (this.level == 3){
              this.val = 70;//
          }else if(this.level == 4) {
              this.val = 65;
          } else if(this.level == 5) {
              this.val = 50;
          } else if(this.level == 6) {
              this.val = 42;
          } else if(this.level == 7) {
              this.val = 36;
          } else if(this.level > 7&&this.level <=12){
              this.val = 36-(this.level - 7);
          } else if(this.level == 13){
              this.val = 27;
          } else if(this.level > 13&&this.level <17) {
              this.val = 27-3*(this.level - 13);
          } else if(this.level >= 17&& this.level<24) {
              this.val = 17-(this.level-17);
          } else if(this.level == 24) {
              this.val = 11;
          } else if (this.level == 25) {
              this.val = 10;
          }


          console.log(this.val);
          console.log(this.level);

      },
      stonetype(key){
          switch (key) {
              //不使用
              case 1:
                  this.val = this.val + 0;
                  
                  break;
              //使用乾坤
              case 2:
                  this.val = this.val + 0;
                  break;
              //使用天罡
              case 3:
                  this.val = this.val + 15;
                  break;
              case 4:
              //使用地煞
                  this.val = 3;
              break;
              default:
                  break;
          }
      },
  },
  components: {
  }
}
</script>

<style scoped>

</style>