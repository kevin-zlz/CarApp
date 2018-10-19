<template>
  <div>
    <div class="left1">
      <span>车型</span>
      <!--<img src="../../static/images/qc.png" alt="">-->
      <div class="left1-all" >
       <div class="left1-all1" v-for="(c,index) in car" :id="c.id" @click="change" >
         <img :src="src"  alt=""  :id="c.id">
         <span v-text="c.content" style='color: rgba(145,145,145,0.81);' :id="c.id"></span>
       </div>
      </div>
    </div>
    <div class="left2">
      <span>价格</span>
      <!--<img src="../assets/images/cx_new.png" alt="">-->
      <div class="left2-price">
        <ul class="ul1">
          <li @click="changePrice" v-for="i in [0,1,2,3,4]" :id="i"></li>
        </ul>

        <ul class="ul2">
          <li>不限</li>
          <li>0</li>
          <li>150</li>
          <li>300</li>
          <li>500</li>
          <li>500+</li>
        </ul>
      </div>
    </div>
    <div class="left3">
      <span>品牌</span>
      <div class="left3-all">
        <ul>
          <li v-for="(c,index) in carType" :key="index" :id="index" v-text="c" @click="changeLiColor"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "RevertLeft",
          data:function() {
          return {
            src:'../../static/images/suv.png',
            car:[{"id":1,"content":"不限型"},
              {"id":2,"content":"经济型"},
              {"id":3,"content":"商务型"},
              {"id":4,"content":"电动车"},
              {"id":5,"content":"SUV型"},
              {"id":6,"content":"豪华型"},
              {"id":7,"content":"舒适型"},
              {"id":8,"content":"MPV型"},
              {"id":9,"content":"面包车"}
            ],
            carType:['不限','奥迪','宝马','奔驰','本田','标致','别克','比亚迪','广汽', '长城','大众','丰田','福特','金杯','凯迪拉克','铃木','马自达','奇瑞','起亚', '斯柯达','现代','雪佛兰','雪铁龙','猎豹','日产','沃尔沃','依维柯','华泰','野马', '三菱','MINI','北京汽车','菲亚特','江淮','江铃','上汽大通','华颂','风行'],
            liBackgroundColor:'gray',
          }
        },
      methods:{
        change:function (event) {
          event.target.src = '../../static/images/cx_new.png';
          // alert(event.target.id)
        },
        changePrice:function (event) {
          event.target.style.backgroundColor='#fabe00';
          // alert(event.target.id)
        },
        changeLiColor:function (event) {
          event.target.style.color='#fabe00';
          // alert(event.target.id)
        },


      },
      mounted(){
      }
    }


</script>

<style scoped>

  .left1{
    width: 100%;
    height: 250px;
    background-color: white;
    margin-bottom: 5px;
  }
  .left1-all{
    width: 95%;
    height: 90%;
    /*background-color: rgba(0, 0, 0, 0.12);*/
    margin-left: 2.5%;
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
  }
  .left1-all1{
    width: 55px;
    height: 58px;
    /*background-color: black;*/
    margin-left: 15px;
    margin-right: 14px;
    margin-top: 5px;
  }
  .left2{
    width: 100%;
    height: 90px;
    background-color: white;
    margin-bottom: 5px;
  }
  .left2 .left2-price{
    width: 100%;
    height: 80px;
    /*background-color: blue;*/
  }
  .left2 .left2-price ul{
    display: flex;
    list-style: none;
    position: relative;
    left: -20px;
  }
  .left2 .left2-price .ul1,.left2 .left2-price .ul2{
    display: flex;
    list-style: none;
    padding-top: 10px;
    /*background-color: red;*/
    position: relative;
    left: -30px;
  }
  .left2 .left2-price .ul1 li{
    list-style: none;
    width: 55px;
    height: 5px;
    background-color: gray;
    margin-right: 5px;
    cursor: pointer;
  }
  .left2 .left2-price .ul2 li{
    position: relative;
    top: -10px;
    left: 5px;
    margin-right:  15px;
    color: gray;
  }

  .left3{
    width: 100%;
    height: 460px;
    background-color: white;
    margin-bottom: 5px;
  }

  .left3-all ul{
    width: 90%;
    height: 400px;
    /*background-color: red;*/
    display: flex;
    flex-wrap: wrap;
    padding-left: 40px;
    position: relative;
    left: -5px;
    top: 10px;
  }
  .left3-all li{
    list-style: none;
    width: 60px;
    height: 20px;
    margin-right: 6px;
    color: gray;
    /*background-color: black;*/
    cursor: pointer;
  }
</style>
