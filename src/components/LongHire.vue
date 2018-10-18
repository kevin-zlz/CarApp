<template>
  <div class="container" >
    <div class="order-head">
      <div>长期租车订单</div>
      <div class="date"><input id='mydatepicker1' type='text'/></div>
      <div class="lines"></div>
      <div class="date"><input id='mydatepicker2' type='text'/></div>
      <div class="btns" id="query">查询</div>
      <div class="btns">清除</div>
    </div>
    <div class="order-state">
      <div class="order-btn long-order">
        <div class="state">全部</div>
        <div class="state">处理中</div>
        <div class="state">等待付款</div>
        <div class="state">预订成功</div>
        <div class="state">租赁中</div>
        <div class="state">已完成</div>
        <div class="state">已取消</div>
      </div>
      <div class="order-container">
        <div class="table-head">
          <div class="order-info">订单信息</div>
          <div class="order-car">取还车信息</div>
          <div class="order-all">总计</div>
          <div class="order-states">订单状态</div>
        </div>
        <div id="long-content" class="table-content"><div class="table-data">
            <!--<div class="info-car">-->
            <!--<img src="images/87.jpg" alt="">-->
            <!--<div class="car-info">-->
            <!--<p>雪佛兰科瑞兹</p>-->
            <!--<div>-->
            <!--<p>三厢/1.5L/乘坐5人</p>-->
            <!--<p>订单号：<span>1340521000</span></p>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--<div class="split"></div>-->
            <!--<div class="info-place"></div>-->
            <!--<div class="info-all">-->
            <!--<p><span class="little">取</span><span>&nbsp;&nbsp;苏州</span>-<span>莫邪路店</span></p>-->
            <!--<p>2018-08-01 10:00</p>-->
            <!--<p><span class="little">还</span><span>&nbsp;&nbsp;苏州</span>-<span>莫邪路店</span></p>-->
            <!--<p>2018-08-03 10:00</p>-->
            <!--</div>-->
            <!--<div class="split" style="left:620px;"></div>-->
            <!--<div class="info-place" >-->
            <!--<span>￥278.0</span>-->
            <!--</div>-->
            <!--<div class="split" style="left:740px;"></div>-->
            <!--<div class="info-state">-->
            <!--<p>预定成功</p>-->
            <!--<p><a href="#">查看订单</a></p>-->
            <!--</div>-->
        </div></div>

        <div class="page">
          <nav aria-label="Page navigation">
            <ul class="pagination">
              <li>
                <a href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li>
                <a href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="order-statement">
      <div>订单状态说明</div>
      <div class="state-7">
        <div class="every-state">
          <p>预订成功</p>
          <p>订单已确认，尚未提车</p>
        </div>
        <div class="every-state">
          <p>预订成功</p>
          <p>订单已确认，尚未提车</p>
        </div>
        <div class="every-state">
          <p>预订成功</p>
          <p>订单已确认，尚未提车</p>
        </div>
        <div class="every-state">
          <p>预订成功</p>
          <p>订单已确认，尚未提车</p>
        </div>
        <div class="every-state">
          <p>预订成功</p>
          <p>订单已确认，尚未提车,订单尚未付款，请在1小时内完成支付</p>
        </div>
        <div class="every-state">
          <p>预订成功</p>
          <p>订单已确认，尚未提车</p>
        </div>
        <div class="every-state">
          <p>预订成功</p>
          <p>订单已确认，尚未提车</p>
        </div>
      </div>
    </div>
    <div class="order-attention">
      <div>订单状态说明</div>
      <div>
        <p>1. 修改或取消订单，请您尽早致电400 616 6666申请，送车上门或服务点订单请至少在我们的工作时间内（08:00-20:00）提前2小时修改；</p>
        <p>2. 预付订单，逾时不履行或取消的，退还您预付款中的基础服务费、车辆整备费及可选服务费款项，已付费用将作为违约金恕不退还；</p>
        <p>3. 系统将为您保留一年之内的订单，如需查询更早的订单，请致电24小时热线。</p>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: 'LongHire',

  data () {
    return {
      msg: '我是谁我在哪？？？？',

      flag:false,
    }
  },
  methods:{
    show:function () {

    },
    getday:function (e) {

      }

    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*.container{*/
    /*position: relative;*/
    /*left: 10px;*/
  /*}*/
  .container{
    position: relative;
    left: -15px;
  }
  body,ul,li,a{
    padding: 0;
    margin: 0;
  }
  ul{
    list-style: none;
  }
  input{
    outline: none;
  }

  body{
    background-color: #f2f3f5;
  }

  .head ul{
    flex:3;
    display: flex;
  }
  .head .headItems li{
    flex:1;
    display: inline-block;
    height: 45px;
    min-width: 80px;
    text-align: center;
    /*margin-right: 20px;*/
  }
  .headItems li a{
    text-decoration: none;
    text-align: center;
    font-size:15px;
    color: white;
  }
  .headItems li:nth-child(4){
    text-align: left;
    flex: 2;
  }
  .headItems li:nth-child(7){
    text-align: left;
    flex: 1.5;
  }
  .headItems li.li5 a{
    font-size: 14px;
    color: #fabe00;
  }
  .headItems li.li1 a:hover{
    color: #fabe00;
  }
  /*----------------------head-info--------------------*/

  .head-info div{
    width: 200px;
    height: 100px;
    /*border-left: red solid 1px;*/
  }
  .head-icon div:nth-child(1){
    width: 100px;
    text-align: center;
    margin-top: 20px;
    box-sizing: border-box;
  }
  .head-icon img{
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: darkgray;
  }
  .head-icon div:nth-child(2){
    width: 300px;
    color: #93939e;
  }
  .head-icon div:nth-child(2) p:nth-child(2){
    font-size: 14px;
  }
  .head-score p{
    height: 10px;
    line-height: 10px;
    font-size: 14px;
    color: #60606c;
  }
  .head-score p:first-child{
    margin-top: 30px;
    box-sizing: border-box;
  }
  .head-score p span{
    font-size: 20px;
    color: #ffbb00;
  }
  /*----------------------------------body-main-----------*/
  .order-head{
    display: flex;
    border: #d4d5d8 solid 1px;
    width: 924px;
    height: 60px;
    padding-left: 20px;
    box-sizing: border-box;
    background-color: white;
    /*line-height: 60px;*/
  }
  .order-head div:first-child{
    width: 300px;
    height: 100%;
    font-size: 18px;
    margin-top: 13px;
    /*margin-left: 10px;*/
    color: #60606c;
    box-sizing: border-box;
  }
  .order-head .date{
    margin-top:0px ;
    width: 180px;
    font-size: 14px;
    color: #60606c;
  }
  .order-head .lines{
    width: 15px;
    height: 0px;
    margin-top: 30px;
    margin-right: 5px;
    border: #d4d5d8 solid 1px;
    box-sizing: border-box;
  }
  .order-head .date input{
    height: 30px;
    width: 173px;
    color: #60606c;
  }
  .order-head .btns{
    height: 30px;
    width: 85px;
    line-height: 30px;
    border: #d4d5d8 solid 1px;
    margin-top: 15px;
    box-sizing: border-box;
    margin-left: 15px;
    text-align: center;
    line-height: 30px;
  }

  .order-head div#query:hover{
    background-color:#fabe00 ;
  }
  .order-head div#query:hover{
    cursor: pointer;
    background-color:#fabe00 ;
  }

  .order-state{
    background-color: white;
    border: #d4d5d8 solid 1px;
    width: 924px;
    height: 566px;
    padding: 20px;
    box-sizing: border-box;
  }
  .order-state .order-btn{
    width: 100%;
    height: 50px;
    display: flex;
    border-bottom: #e9ebee solid 1px;
  }
  .order-state .order-btn .state{
    height: 40px;
    width: 90px;
    border: #d4d4d6 solid 1px;
    border-right: none;
    margin-left: 0;
    padding-left: 0;
    line-height: 40px;
    text-align: center;
    color: #60606c;
  }
  .order-state .order-btn .state:nth-last-child(1){
    border-right: #d4d4d6 solid 1px;
  }
  .order-state .order-btn .state:hover{
    cursor: pointer;
    background-color: #fabe00;
  }
  .order-statement{
    background-color: white;
    padding: 20px;
    width: 924px;
    height: 265px;
    border: #d4d5d8 solid 1px;
    box-sizing: border-box;
    margin-top: 10px;
  }
  .order-statement div:first-child{
    width: 100%;
    height: 30px;
    /*line-height: 10px;*/
    color: #888888;
    border-bottom: #d4d5d8 solid 1px;
  }
  .order-statement .state-7{
    width: 100%;
    height:230px;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    /*align-items: center;*/
    padding-top: 10px;
    padding-bottom: 0;
  }
  .order-statement .state-7 .every-state{
    width: 200px;
    height: 80px;
    background-color: #f8f8fa;
    margin-left: 10px;
    margin-right: 10px;
    box-sizing: border-box;
  }
  .order-statement .every-state p:nth-child(1){
    margin-top: 0px;
    display: inline-block;
    height: 20px;
    width: 100%;
    font-size: 15px;
    color: #a7a7a7;
  }
  .order-statement div.every-state:nth-child(1){
    border-bottom: none;
  }
  .order-statement div.every-state:nth-child(1) p:nth-child(1){
    color: #8cc152;
  }
  .order-statement div.every-state:nth-child(2) p:nth-child(1){
    color: #fd9450;
  }
  .order-statement div.every-state:nth-child(3) p:nth-child(1){
    color: #50dee3;
  }
  .order-statement div.every-state:nth-child(4) p:nth-child(1){
    color: #50dee3;
  }
  .order-statement div.every-state:nth-child(5) p:nth-child(1){
    color: #fca550;
  }
  .order-statement div.every-state:nth-child(6) p:nth-child(1){
    color: #fabe00;
  }
  .order-statement .every-state p:nth-child(2){
    display: inline-block;
    margin-top: 0px;
    margin-bottom: 0px;
    height: 15px;
    font-size: 14px;
    color: #a7a7a7;
  }
  .order-attention{
    background-color: white;
    padding: 20px;
    width: 924px;
    height: 175px;
    border: #d4d5d8 solid 1px;
    box-sizing: border-box;
    margin-top: 10px;
  }
  .order-attention div:first-child{
    width: 100%;
    height: 30px;
    color: #888888;
    /*line-height: 10px;*/
    border-bottom: #d4d5d8 solid 1px;
  }
  .order-attention div:nth-child(2) p{
    font-size: 12px;
    color: #cecece;
  }
  .order-container{
    position: relative;
  }
  .order-container .table-head{
    position: relative;
    background-color: #f8f8fa;
    height: 30px;
    line-height: 30px;
  }
  .order-container .table-head div{
    font-size: 14px;
    color: #bdbdbd;
    display: inline-block;
  }
  .order-container .table-head .order-info{
    position: absolute;
    width: 80px;
    left: 10px;
  }
  .order-container .table-head .order-car{
    position: absolute;
    width: 80px;
    left: 380px;
  }
  .order-container .table-head .order-all{
    position: absolute;
    width: 80px;
    left: 665px;
  }
  .order-container .table-head .order-states{
    position: absolute;
    width: 80px;
    left: 780px;
  }
  .order-container .table-data{
    border-bottom: #d6d6d6 solid 1px;
    border-top: #d6d6d6 solid 1px;
    height: 160px;
    width: 100%;
    position: relative;
  }


  .table-data .info-car img{
    position: absolute;
    top: 30px;
    width: 170px;
    height: 100px;
  }

  .info-car .car-info>p{
    font-size: 16px;
    font-weight: bold;
  }
  .info-car .car-info div p{
    height: 15px;
    color: #d3d3d3;
    font-size: 14px;
  }

  .info-all p{
    padding-bottom: 5px;
    margin:0px;
    font-size: 15px;
    color: #b4b4b4;

  }
  .info-state p:first-child{
    font-size: 15px;
    color: rgba(0, 255, 0, 0.48);
  }
  .info-state p a{
    text-decoration: none;
    font-size: 15px;
    color: #7292a0;
    text-align: center;
  }
  .page{
    /*position: absolute;*/
    /*top: 400px;*/
    /*left: 300px;*/
    text-align: center;
  }

  .calendar th,
  .calendar td {
    text-align: center;
    -webki-ttransition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .calendar th:first-child,
  .calendar td:first-child {
    margin-left: 5px;
  }
  .calendar span {
    padding: 6px 4px;
    display: block;
  }

  .calendar tr:first-child th {
    background-color: #FFF;
    padding: 4px;
    padding-top: 8px;
    font-size: 14px;
  }
  .calendar tr:first-child th { cursor: pointer; color:#000; }
  .calendar tr:first-child th:hover { color:#22A7F0; }
  .calendar tr:first-child th:active { color: #22A7F0; }
  .calendar thead tr:nth-child(2) th { color: #555; padding: 8px 3px; }





</style>
