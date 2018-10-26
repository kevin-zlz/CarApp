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
    <div class="all_car" v-for="(car,index) in carlist" :data-id="index" v-bind:key="index">
      <table class="aa">
        <tr>
          <td class="aa1"><img src="../assets/images/car1.jpg" alt="" ></td>
          <td class="aa2">
            <p v-text="car.carname" class="bb1"></p>
            <p v-text="car.cartype" class="bb2"></p>
          </td>
          <td class="aa3">
            <div>门店支付</div>
          </td>
          <td class="aa4">
            <p v-text="car.price" style="font-size:30px;color:#fabe00;font-style: normal;"></p>
            <p class="bb3">总价:￥138</p>
            <span>/日均</span>
          </td>
          <td class="aa5">
            <button><span @click="clickDetail(car.id)" style="color: white;font-size: 20px">租车</span></button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        props:['carlist','condition'],
        name: "RevertRight",
        data:function () {
          return {
           allCar:[
              // {"carid":2,"carname":"雪佛兰科鲁", "cartype":"三厢|1.5自动|乘坐5人", "carprice":"￥69元","carimg":"./images/car2.jpg"},
          ],
            path:"/",
            carid:1,
            currentPage:1,
            pageCount:10,

          }
        },
        methods:{
          changeColor:function (event) {
            event.target.style.backgroundColor='white';
          },
          clickDetail:function (e) {
            console.log('--------------------------------')
            console.log(this.condition)
            this.$router.push({path: '/revert/car', query: {carid: e,condition:this.condition}});
          },
          prePage() {
            this.currentPage--;
            this.getallcondition()
          },
          nextPage() {
            this.currentPage++;
            // 重新渲染数据
            this.getallcondition()
          },
          jumpPage(pageIndex) {
            if (pageIndex > this.pageCount) {
              pageIndex = this.pageCount
            }
            if (!pageIndex || pageIndex < 1) {
              pageIndex = 1
            }
            this.currentPage = pageIndex;
          },
          getallcondition:function () {

          }
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
    height: 200px;
    border-bottom:solid 2px #e4e6e9;
    box-sizing: border-box;
    padding-left: 30px;
  }

  .all_car:hover{
    box-shadow:-5px -5px 5px #e4e6e9 inset;
  }
  button:hover {
    background-color: #ff8732;
  }
  .aa{
    /*background: green;*/
    position: absolute;
  }
  .aa1 {
    width: 350px;
    height: 200px;
  }
  .aa1 img{
    width: 100%;
    height: 180px;
  }
  .aa2{
    width: 200px;
    height: 200px;
    position: relative;
    left: 10px;
  }
  .bb1{
    font-size: 18px;
    color: #60606c;
  }
  .bb2{
    font-size: 12px;
    color: #93939e;
  }
  .aa3{
    position: relative;
    left: 20px;
  }
  .aa3 div{
    width: 15px;
    height: 77px;
    background: #dcdcdc;
    color: gray;
  }
  .aa4{
    position: relative;
    left: 35px;
  }
  .aa4 span{
    position: relative;
    left: 50px;
    top: -65px;
    color: #93939e;
  }
  .bb3{
    color:#93939e;
  }
  .aa5{
    position: relative;
    left: 50px;
  }
  .aa5 button{
    width: 80px;
    height: 40px;
    background: #eeb81a;
    color: white;
    border: 1px solid #eeb81a;
  }
</style>
