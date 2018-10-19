<template>
  <div class="width:95%">
    <div class="banner">
      <img src="../../static/images/sz_banner3.jpg" alt="#" class="img1">
      <div class="service">
        <div class="service_head">
          长租服务
        </div>
        <div class="service_body">
          <label for="city" id="label_city">取车城市</label>
          <div class="city" id="city">
            <!--<input type="text" class="s_city" placeholder="选择城市">-->
            <CityNew></CityNew>
          </div>
          <label for="store" id="label_store">取车门店</label>
          <div class="store" id="store">
            <input type="text" class="s_city" placeholder="请选择门店">
          </div>
          <label for="lease" id="label_lease">租&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期</label>
          <div class="lease" id="lease">
            <!--<input type="text" class="s_lease" placeholder="请选择">-->
            <div class="select_days" style="top:0px">
              <!--<input type="text" id="lend_days" placeholder="请选择" readonly="">-->
              <SelectDay></SelectDay>
            </div>
          </div>
          <label for="time" id="label_time">取车时间</label>
          <div class="time" id="time">
            <!--<input id='mydatepicker1' type="text" class="s_time" placeholder="请选择时间">-->
            <TimeNew></TimeNew>
          </div>

          <label for="carModel" id="label_carModel">车&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型</label>
          <div class="carModel" id="carModel">

            <div class="select_carStyle" style="top:0px;left: 0px">
              <!--<input type="text" id="select_style" placeholder="请选择" readonly>-->
              <SelectCarStyle></SelectCarStyle>
            </div>
          </div>
        </div>

        <div class="service_foot">
          <div class="apply">
            <a href="https://changzu.zuche.com/">去申请</a>
          </div>
        </div>
      </div>
    </div>
    <div class="main" style="margin-bottom: 70px">
      <div class="main_left">
        <div class="left_head">
          <label for="head_a">推荐车型</label>
          <a class="head_a" id="head_a" href="https://changzu.zuche.com/insurance.html">长租标准产品保险服务说明</a>
        </div>
        <div class="left_body">
          <ul>
            <li class="l_00">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016款 昂科拉 18T 自动两驱都市领先型</span>
              <span>2015款 昂科拉 1.4T 自动两驱都市精英型</span>
            </li>
            <li class="l_01">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016款 昂科拉 18T 自动两驱都市领先型</span>
              <span>2015款 昂科拉 1.4T 自动两驱都市精英型</span>
            </li>
            <li class="l_02">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016款 昂科拉 18T 自动两驱都市领先型</span>
              <span>2015款 昂科拉 1.4T 自动两驱都市精英型</span>
            </li>
            <li class="l_03">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016款 昂科拉 18T 自动两驱都市领先型</span>
              <span>2015款 昂科拉 1.4T 自动两驱都市精英型</span>
            </li>
            <li class="l_04">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016款 昂科拉 18T 自动两驱都市领先型</span>
              <span>2015款 昂科拉 1.4T 自动两驱都市精英型</span>
            </li>
            <li class="l_05">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016款 昂科拉 18T 自动两驱都市领先型</span>
              <span>2015款 昂科拉 1.4T 自动两驱都市精英型</span>
            </li>
            <li class="l_06">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016款 昂科拉 18T 自动两驱都市领先型</span>
              <span>2015款 昂科拉 1.4T 自动两驱都市精英型</span>
            </li>
            <li class="l_07">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016款 昂科拉 18T 自动两驱都市领先型</span>
              <span>2015款 昂科拉 1.4T 自动两驱都市精英型</span>
            </li>
            <li class="l_08">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016款 昂科拉 18T 自动两驱都市领先型</span>
              <span>2015款 昂科拉 1.4T 自动两驱都市精英型</span>
            </li>
            <li class="l_09">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016款 昂科拉 18T 自动两驱都市领先型</span>
              <span>2015款 昂科拉 1.4T 自动两驱都市精英型</span>
            </li>
          </ul>
        </div>

      </div>
      <div class="main_right">
        <div class="right_head">
          <label>服务优势</label>
        </div>
        <div class="right_body" style="position: relative;left: -30px">
          <div class="bo">
            <b id="b" style="display: block">价格更低</b>
            <label for="b"><br>网上直销，即刻报价，快捷透明。</label>
          </div>
          <div class="bo" >
            <b id="c" style="display: block">租车更灵活</b>
            <label for="c"><br>3 个月以上，尽享长租优惠。</label>
          </div>
          <div class="bo" >
            <b id="d" style="display: block">服务更优</b>
            <label for="d"><br>专业化团队，强大系统支持，
              全国<br>化网络，24小时服务。</label>
          </div>
        </div>
      </div>

    </div>
    <RevertBottom style="width: auto"></RevertBottom>
  </div>
</template>

<script>
    export default {
        name: "LongLoad"
    }
</script>

<style scoped>
  body,ul,li,a{
    padding: 0;
    margin: 0;
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
    /*width: 80px;*/
    text-align: center;
    /*border: red solid 1px;*/
    margin-right: 20px;
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
    /*width: 300px;*/
  }
  .headItems li.li5 a{
    font-size: 14px;
    color: #fabe00;
  }
  .headItems li.li1 a:hover{
    color: #fabe00;
  }
  .headItems li:nth-child(7){
    text-align: left;
    flex: 1.5;
  }
  .banner img {
    height: 300px;
    width: 100%;
    position: absolute;
    overflow: hidden;
    object-fit: cover;
    text-align: center;
  }
  .banner .service{
    width: 425px;
    height: 260px;
    background-color: white;
    position: relative;
    left: 85px;
    top: 20px;
  }
  .banner .service .service_head{
    width: 100%;
    height: 42px;
    line-height: 42px;
    text-align: center;
    font-size: 1.2em;
    color: #333333;
    border-bottom: solid 1px #d7d7d7;
    box-sizing: border-box;
  }
  .banner .service .service_head:after{
    content: '(90天以上)';
    color: #848484;
    font-size: small;

  }
  .banner .service .service_body{
    width: 100%;
    height: 156px;
  }
  .banner .service .service_body .city{
    width: 90px;
    height: 30px;
    position: absolute;
    left: 76px;
    top: 66px;
  }
  .banner .service .service_body input::placeholder{
    font-size: 0.9em;
  }
  #label_city{
    position: absolute;
    top: 71px;
    left: 15px;
    font-size: small;
    color: #2a2a2a;
  }
  #label_store{
    position: absolute;
    top: 71px;
    left: 170px;
    font-size: small;
    color: #2a2a2a;

  }
  .banner .service .service_body .city input{
    width: 90px;
    height: 30px;
    outline: none;
    border: solid 1px #d7d7d7;
    box-sizing: border-box;
  }
  .banner .service .service_body .store{
    width: 160px;
    height: 30px;
    background-color: #4c5cff;
    position: absolute;
    left: 231px;
    top: 66px;
  }
  .banner .service .service_body .store input {
    width: 160px;
    height: 30px;
    outline: none;
    border: solid 1px #d7d7d7;
    box-sizing: border-box;
  }
  .banner .service .service_body .lease{
    width: 90px;
    height: 30px;
    background-color: #7eef72;
    position: absolute;
    left: 76px;
    top: 114px;
  }
  #label_lease{
    position: absolute;
    top: 119px;
    left: 15px;
    font-size: small;
    color: #2a2a2a;
  }
  .banner .service .service_body .lease input{
    width: 90px;
    height: 30px;
    outline: none;
    border: solid 1px #d7d7d7;
    box-sizing: border-box;
  }
  .banner .service .service_body .time{
    width: 160px;
    height: 30px;
    background-color: #4c5cff;
    position: absolute;
    left: 231px;
    top: 114px;
  }
  .banner .service .service_body .time input {
    width: 160px;
    height: 30px;
    outline: none;
    border: solid 1px #d7d7d7;
    box-sizing: border-box;
  }
  #label_time{
    position: absolute;
    top: 119px;
    left: 170px;
    font-size: small;
    color: #2a2a2a;

  }
  .banner .service .service_body .carModel{
    width: 317px;
    height: 30px;
    /*background-color: #4c5cff;*/
    position: absolute;
    left: 76px;
    top: 162px;
  }
  .banner .service .service_body .carModel input {
    width: 317px;
    height: 30px;
    outline: none;
    border: solid 1px #d7d7d7;
    box-sizing: border-box;
  }
  #label_carModel{
    position: absolute;
    top: 167px;
    left: 15px;
    font-size: small;
    color: #2a2a2a;
  }
  .banner .service .service_foot{
    width: 100%;
    height: 62px;
    padding: 11px 0 ;
    box-sizing: border-box;
  }
  .banner .service .service_foot .apply {
    width: 380px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #67a7e1;
    margin: auto;

  }
  .banner .service .service_foot .apply a{
    display: inline-block;
    width: 380px;
    height: 40px;
    text-decoration: none;
    color: white;
    font-size: 1.3em;
  }
  .main{
    width: 85%;
    height: 615px;
    padding-top: 60px ;
    margin: auto;
    display: flex;
    /*align-items: center;*/
    justify-content: space-between;

  }
  .main .main_left{
    width: 778px;
    height: 612px;
    border: solid 1px #e1e1e1;
    border-bottom: solid 2px #d1dae1;
    margin-right: 40px;

  }
  .main .main_left .left_head{
    width: 100%;
    height: 44px;
    border-bottom: solid 1px #e1e1e1;
  }
  .main .main_left .left_head label{
    position: relative;
    left: 20px;
    top:10px;
    font-size: 1.2em;
    color: #333333;
  }
  .main .main_left .left_head a{
    position: relative;
    left:480px;
    top: 10px;
    text-decoration: none;
    color: #7aa1df;
  }

  .main .main_left .left_body{
    width: 100%;
    height: 570px;
  }
  .main .main_left .left_body ul li{
    width: 760px;
    height: 57px;
    list-style: none;
    display: flex;
    align-items: start;
    justify-content: left;
  }
  .main .main_left .left_body ul li span{
    width: 370px;
    height: 57px;
    display: block;
    line-height: 57px;
    font-size: 0.8em;
    color: #343434;
    border-bottom: dashed 1px #e3e7eb;
  }
  .main .main_left .left_body ul li:nth-last-child(1) span{
    border-bottom: none;

  }
  .main .main_right{
    width: 388px;
    height: 500px;
    border: solid 1px #e1e1e1;
    border-bottom: solid 2px #d1dae1;
  }
  .main .main_right .right_head {
    width: 100%;
    height: 44px;
    border-bottom: solid 1px #e1e1e1;
    box-sizing: border-box;

  }
  .main .main_right .right_head label{
    position: relative;
    left: 20px;
    top:10px;
    font-size: 1.2em;
    color: #333333;
  }
  .main .main_right .right_body{
    width: 100%;
    height: 456px;
    /*background-image: url("../../static/images/bg_ys.png");*/
    background-repeat: no-repeat;
    background-position-y: center;
    background-position-x: 30px;

  }
  .main .main_right .right_body .bo{
    width: 100%;
    height: 152px;
    border-bottom: dashed 1px #e3e7eb;
    box-sizing: border-box;
  }
  .main .main_right .right_body .bo b{
    font-size: 20px;
    font-weight: 700;
    color: #3b3b3b;
    position: relative;
    top:50px;
    left: 120px;
  }
  .main .main_right .right_body .bo label{
    position: relative;
    top:50px;
    left: 120px;
  }

  .leg .explain dt{
    font-size: 16px;
    color: #60606c;
    padding-bottom: 15px;
  }
  .leg .explain dt a{
    text-decoration: none;
    color: #60606c;
    outline: 0;
  }
  .leg .explain dt a:hover{
    text-decoration: underline;
  }
  .leg .explain dd{
    width: 158px;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .leg .explain dd a{
    float: left;
    width: 70px;
    font-size: 12px;
    color: #93939e;
    line-height: 14px;
    padding-bottom: 10px;
    text-decoration: none;
    outline: 0;
  }
  .leg .explain dd a:hover{
    text-decoration: underline;
  }

  .foot .foot_total .foot_top a{
    font-size: 12px;
    line-height: 50px;
    color: #6d8aab;
    margin-right: 30px;
    float: left;
    outline: none;
    text-decoration: none;
  }


  .foot .foot_total .foot_top a:hover{
    text-decoration: underline;
  }

  .foot .foot_total .foot_down p{
    padding: 0;
    margin: 0;
    font-size: 12px;
    color: #6d8aab;
  }

  .f2 a{
    color: #eeb819;
    outline: none;
    text-decoration: none;
  }
  .f2 a:hover{
    text-decoration: underline;
  }
  .foot .foot_total .foot_down .f3 img{
    padding-top: 10px;
    width: 90px;
    height: 36px;
    object-fit: cover;
    float: left;
  }
  .foot .foot_total .foot_down .f4 img{
    padding-top: 10px;
    width: 90px;
    height: 36px;
    object-fit: cover;
    margin-left: 10px;
    float: left;
  }
  .img1{
    width: 80%;
  }
</style>
