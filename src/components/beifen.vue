<template>
  <div>
    <!--<div class="main-right-head">-->
      <!--<ul @click = 'changeColor'>-->
        <!--<li>短租自驾</li>-->
        <!--<li>工作日套餐(4天)</li>-->
        <!--<li>周租套餐(7-27天)</li>-->
        <!--<li>月租套餐(28天+)</li>-->
        <!--<li>年租套餐(365天)</li>-->
      <!--</ul>-->
    <!--</div>-->
    <div class="all_car" v-for="(car,index) in allCar" :data-id="index" v-bind:key="index">
      <table>
        <tr style="position: relative;top: 25px;">
          <td><img src="../assets/images/car1.jpg" alt="" style="width:175px;height: 130px;padding-top:30px;padding-left: 20px "></td>
          <td style="padding-left: 70px">
            <span style="font-size: 18px;display: block;color: #60606c" v-text="car.carname"></span>
            <span style="color: #93939e;font-size: 10px;display: block;padding-top: 8px" v-text="car.cartype"></span>
          </td>
          <td>
            <div style="width: 15px;height: 62px;margin-left: 100px;background-color: #f2f3f5;color:grey;font-size: 6px">门店支付</div>
          </td>
          <td>
            <p style="position: relative;top: 5px;"><span style="color: #fabe00;font-size: 24px;padding-top: -10px" v-text="car.carprice"></span><span style="color: #93939e;font-size: 15px">/日均</span></p>
            <p style="position: relative;top: -10px;left: 23px;color: #93939e">总价:￥138</p>
          </td>
          <td>
            <button style="cursor:pointer;width: 80px;height: 40px;background-color: #fabe00;border: none;border-radius: 5px;position: relative;left: 80px"><span style="color: white;font-size: 20px"><router-link :to="{path:'/revert/car',query: {name: car.carid}}" class="revert">租车</router-link></span></button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "beifen",
        data:function () {
          return {
           allCar:[
              // {"carid":2,"carname":"雪佛兰科鲁", "cartype":"三厢|1.5自动|乘坐5人", "carprice":"￥69元","carimg":"./images/car2.jpg"},
          {"carid":2,"carname":"别克昂科拉", "cartype":"三厢|1.5自动|乘坐5人", "carprice":"￥79元","carimg":"./images/car3.jpg"},
          {"carid":3,"carname":"大众朗逸", "cartype":"两厢|1.3自动|乘坐5人", "carprice":"￥89元","carimg":"./images/car1.jpg"},
          {"carid":4,"carname":"宝马", "cartype":"三厢|1.6自动|乘坐5人", "carprice":"￥89元","carimg":"./images/car4.jpg"},
          {"carid":5,"carname":"上海大众", "cartype":"三厢|1.5自动|乘坐6人", "carprice":"￥69元","carimg":"./images/car5.jpg"},
          {"carid":6,"carname":"奔驰", "cartype":"三厢|1.6自动|乘坐5人", "carprice":"￥99元","carimg":"./images/car6.jpg"},
          {"carid":7,"carname":"江铃", "cartype":"7座|2.0T自动|乘坐7人", "carprice":"￥89元","carimg":"./images/car7.jpg"},
          {"carid":8,"carname":"凯迪拉克", "cartype":"三厢|1.6自动|乘坐5人", "carprice":"￥79元","carimg":"./images/car8.jpg"},
          {"carid":9,"carname":"雪铁龙", "cartype":"三厢|1.6自动|乘坐5人", "carprice":"￥99元","carimg":"./images/car9.jpg"},
          {"carid":10,"carname":"福特", "cartype":"7座|2.0T自动|乘坐7人", "carprice":"￥99元","carimg":"./images/car10.jpg"},
          {"carid":11,"carname":"福特", "cartype":"7座|2.0T自动|乘坐7人", "carprice":"￥99元","carimg":"./images/car10.jpg"},
          ],
            path:"/",
            carid:1,
          }
        },
        methods:{
          changeColor:function (event) {
            event.target.style.backgroundColor='white';
          },
        },

    }
</script>

<style scoped>
  .main-right-head{
    width:100%;
    height: 70px;
  }
  .revert{
    font-size: 19px;
    color: white;
    text-decoration:none;
    font-weight: 500
  }
  .main-right-head ul{
    list-style-type: none;
    width: 870px;
    height: 70px;
    position: relative;
    left: -39px;
    display: flex;
    cursor: pointer;
  }
  .main-right-head ul li{
    width: 100%;
    height: 70px;
    background-color: #f0f0f0;
    border-right: solid 1px rgba(221, 221, 221, 0.46);
    border-top:solid 3px #f7f7f7;
    text-align: center;
    font-size: 15px;
    line-height: 65px;
    font-weight: 400;
    color: grey;
    box-sizing: border-box;
  }

  .all_car{
    width: 100%;
    height: 160px;
    border-bottom:solid 2px #e4e6e9;
    box-sizing: border-box;
    padding-left: 80px;
  }

  .all_car:hover{
    box-shadow:-5px -5px 5px #e4e6e9 inset;
  }
  button:hover {
    background-color: #ff8732;
  }
</style>
