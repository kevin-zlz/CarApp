<template>
  <div>
    <div class="main">
      <div class="query">
        <div class="tpt-bar">
          <input type="radio" name="bar" id="tab-1" checked="">
          <label for="tab-1">到店取还</label>
          <div class="tpt-bar-con">
            <div class="service_body">
              <div class="city" id="city1">
                <div class="take">取车</div>
                <div id="city4" class="city-style">
                  <input type="text" class="s_city1" placeholder="选择城市" >
                </div>
                <div id="store-modle1" class="store-modle">
                  <input type="text" class="store-input">
                </div>
                <div class="taketime">取车时间</div>
                <div class="time">
                  <input id="mydatepicker4" type="text" class="s_city2" placeholder="请选择时间">
                </div>
                <div id="minute1" class="minute">
                  <input class="minute-input" type="text">
                </div>
                <div class="taketime taketime2">还车时间</div>
                <div class="time time2">
                  <input id="mydatepicker5" type="text" class="s_city2" placeholder="请选择时间">
                </div>
                <div id="minute2" class="minute minute2">
                  <input class="minute-input" type="text">
                </div>
                <div class="zuche">
                  <span>立即租车</span>
                </div>
                <!--<div id="calendar" class="calendar"></div>-->
              </div>
              <div class="city" id="city2">
                <div class="take">还车</div>
                <div id="city5" class="city-style">
                  <input type="text" class="s_city1" placeholder="选择城市" >
                </div>
                <div id="store-modle2" class="store-modle" >
                  <input type="text" class="store-input">
                </div>
              </div>
            </div>
          </div>
          <input type="radio" name="bar" id="tab-2">
          <label for="tab-2">长期租车</label>
          <div class="tpt-bar-con">
            <div class="longtime">
              <div class="item-title">取车城市</div>
              <div class="city" id="city">
                <div id="city3" class="city-style">
                  <input type="text" class="s_city3" placeholder="选择城市" >
                </div>
              </div>
              <div class="store" id="store">
                <div id="store-modle3" class="store-modle">
                  <input type="text" class="s_city4">
                </div>
              </div>
            </div>

            <div class="longtime">
              <div class="item-title">车&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp型</div>
            </div>
            <div class="longtime">
              <div class="apply">
                <a href="https://changzu.zuche.com/">去申请</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hot-car">
      <div class="describe"><p>热门车型</p><p>最火车型，您值得拥有</p></div>
      <div class="hot-city">
        <div>
          热门城市
        </div>
        <ul>
          <li><a href="#">北京</a></li>
          <li><a href="#">上海</a></li>
          <li><a href="#">武汉</a></li>
          <li><a href="#">广州</a></li>
          <li><a href="#">深圳</a></li>
        </ul>
      </div>
      <div class="show-car">
        <a class="car" href="#">
          <p class="car-name">别克君威</p>
          <p class="car-type">别克君威/三厢/1.6自动 乘坐5人</p>
        </a>
        <a class="car" href="#">
          <p class="car-name">别克君威</p>
          <p class="car-type">别克君威/三厢/1.6自动 乘坐5人</p>
        </a>
        <a class="car" href="#">
          <p class="car-name">别克君威</p>
          <p class="car-type">别克君威/三厢/1.6自动 乘坐5人</p>
        </a>
        <a class="car" href="#">
          <p class="car-name">别克君威</p>
          <p class="car-type">别克君威/三厢/1.6自动 乘坐5人</p>
        </a>
        <a class="car" href="#">
          <p class="car-name">别克君威</p>
          <p class="car-type">别克君威/三厢/1.6自动 乘坐5人</p>
        </a>
        <a class="car" href="#">
          <p class="car-name">别克君威</p>
          <p class="car-type">别克君威/三厢/1.6自动 乘坐5人</p>
        </a>
      </div>
    </div>
    <div class="main-adv">
      <div class="relex">
        轻松租车
      </div>
      <div class="display">
        <div class="content">
          <div class="img">
            <div class="line"></div>
            <p>简单租车</p>
            <p>轻松三步租车，目的地上门送车，专人等待取还，如专车般简单体验。</p>
          </div>
          <div class="icon">
            <div class="left"><a class="a5" href="#">短租服务</a></div>
            <div class="split-line"></div>
            <div class="right"><a class="a6" href="#">查看网点</a></div>
          </div>
        </div>
        <div class="content">
          <div class="img">
            <div class="line"></div>
            <p>全面线下服务</p>
            <p>全方位保险保护、全国百家悟空品牌服务门店标准化服务。</p>
          </div>
          <div class="icon">
            <div class="left"><a class="a1" href="#">取还车指南</a></div>
            <div class="split-line"></div>
            <div class="right"><a class="a2" href="#">预定指南</a></div>
          </div>
        </div>
        <div class="content">
          <div class="img">
            <div class="line"></div>
            <p>无忧服务</p>
            <p>官方全天候7*24小时客服支持，随时随地竭诚为您服务。</p>
          </div>
          <div class="icon">
            <div class="left"><a class="a3" href="#">短租服务</a></div>
            <div class="split-line"></div>
            <div class="right"><a class="a4" href="#">查看网点</a></div>
          </div>
        </div>
      </div>

    </div>
    <div class="footer">
      <div class="leg">
        <dl class="explain">
          <dt>
            <a href="http://zuche.com">租车</a>预订说明
          </dt>
          <dd>
            <a href="#">服务时间</a>
            <a href="#">代租车况</a>
            <a href="#">服务时间</a>
            <a href="#">服务时间</a>
            <a href="#">服务时间</a>
            <a href="#">服务时间</a>
          </dd>
        </dl>
        <dl class="explain">
          <dt>
            <a href="http://zuche.com">会员</a>管理
          </dt>
          <dd>
            <a href="#">服务时间</a>
            <a href="#">代租车况</a>
          </dd>
        </dl>
        <dl class="explain">
          <dt>
            <a href="http://zuche.com">租车</a>预订说明
          </dt>
          <dd>
            <a href="#">服务时间</a>
            <a href="#">代租车况</a>
            <a href="#">服务时间</a>
          </dd>
        </dl>
        <dl class="explain">
          <dt>
            <a href="http://zuche.com">租车</a>预订说明
          </dt>
          <dd>
            <a href="#">服务时间</a>
            <a href="#">代租车况</a>
            <a href="#">服务时间</a>
            <a href="#">服务时间</a>
            <a href="#">服务时间</a>
          </dd>
        </dl>
        <dl class="explain">
          <dt>
            <a href="http://zuche.com">租车</a>预订说明
          </dt>
          <dd>
            <a href="#">服务时间</a>
            <a href="#">代租车况</a>
            <a href="#">服务时间</a>
            <a href="#">服务时间</a>
          </dd>>
        </dl>
      </div>
      <div class="footer-hotcity">
        <div class="underline"></div>
        <div class="fast">城市快捷入口</div>
        <div class="underline"></div>
      </div>
      <div class="footer-code">
        <ul>
          <li class="rmtextcur"><a href="#">热门</a></li>
          <li><a href="#">A</a></li>
          <li><a href="#">B</a></li>
          <li><a href="#">C</a></li>
          <li><a href="#">D</a></li>
          <li><a href="#">E</a></li>
          <li><a href="#">F</a></li>
          <li><a href="#">G</a></li>
          <li><a href="#">H</a></li>
          <li><a href="#">I</a></li>
          <li><a href="#">J</a></li>
          <li><a href="#">K</a></li>
          <li><a href="#">L</a></li>
          <li><a href="#">M</a></li>
          <li><a href="#">N</a></li>
          <li><a href="#">O</a></li>
          <li><a href="#">P</a></li>
          <li><a href="#">Q</a></li>
          <li><a href="#">R</a></li>
          <li><a href="#">S</a></li>
          <li><a href="#">T</a></li>
          <li><a href="#">U</a></li>
          <li><a href="#">V</a></li>
          <li><a href="#">W</a></li>
          <li><a href="#">X</a></li>
          <li><a href="#">Y</a></li>
          <li><a href="#">Z</a></li>
          <div style="clear:both"></div>
        </ul>
      </div>
      <div class="cityname">
        <div class="city">
          <a href="https://beijing.zuche.com/" target="_blank">北京租车</a>
          <a href="https://shanghai.zuche.com/" target="_blank" class="">上海租车</a>
          <a href="https://guangzhou.zuche.com/" target="_blank">广州租车</a>
          <a href="https://shenzhen.zuche.com/" target="_blank">深圳租车</a>
          <a href="https://chengdu.zuche.com/" target="_blank">成都租车</a>
          <a href="https://wuhan.zuche.com/" target="_blank">武汉租车</a>
          <a href="https://xian.zuche.com/" target="_blank">西安租车</a>
          <a href="https://hangzhou.zuche.com/" target="_blank">杭州租车</a>
          <a href="https://changsha.zuche.com/" target="_blank">长沙租车</a>
          <a href="https://kunming.zuche.com/" target="_blank">昆明租车</a>
          <a href="https://chongqing.zuche.com/" target="_blank">重庆租车</a>
          <a href="https://nanjing.zuche.com/" target="_blank">南京租车</a>
          <a href="https://shenyang.zuche.com/" target="_blank">沈阳租车</a>
          <a href="https://qingdao.zuche.com/" target="_blank" class="">青岛租车</a>
          <a href="https://sanya.zuche.com/" target="_blank">三亚租车</a>
          <a href="https://dongguan.zuche.com/" target="_blank">东莞租车</a>
          <a href="https://xiamen.zuche.com/" target="_blank">厦门租车</a>
          <a href="https://dalian.zuche.com/" target="_blank">大连租车</a>
          <a href="https://tianjin.zuche.com/" target="_blank">天津租车</a>
          <a href="https://zhengzhou.zuche.com/" target="_blank">郑州租车</a>
          <a href="https://jinan.zuche.com" target="_blank">济南租车</a>
          <a href="https://guiyang.zuche.com/" target="_blank">贵阳租车</a>
          <a href="https://xining.zuche.com/" target="_blank">西宁租车</a>
          <a href="https://haerbin.zuche.com/" target="_blank">哈尔滨租车</a>
        </div>
      </div>
      <div class="link">
        <div class="foot">
          <div class="foot_total">
            <div class="foot_top">
              <a href="#">关于我们</a>
              <a href="#">投资者关系</a>
              <a href="#">新闻中心</a>
              <a href="#">加盟合作</a>
              <a href="#">隐私保护</a>
              <a href="#">网站导航</a>
              <a href="#">联系我们</a>
              <a href="#">招贤纳士</a>
              <a href="#" class="last_a">English<i class="eng_icon"></i></a>
            </div>
            <div class="foot_down">
              <p class="f1">Copyright2008-2018 www.zuche.com All Rights Reserved.　北京神州汽车租赁有限公司 京ICP备10005002号   京公网安备号 11010502026705</p>
              <p class="f2">如果您对神州租车网站有任何意见，欢迎发送邮件到 <a href="#">web@zuche.com</a></p>
              <a href="#" class="f3"><img src="../assets/images/left.png" ></a>
              <a href="#" class="f4"><img src="../assets/images/right.png"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: '这是首页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  /*-------------------------head--------------------*/
  .main{
    width: 100%;
    height: 500px;
    border-top: black solid 1px;
    background-position-x: -640px;
    background-repeat: no-repeat;
    object-fit: cover;
    /*background-image: url("../images/guoqing.jpg");*/
  }
  .main .query{
    width: 520px;
    height: 375px;
    /*border: red solid 1px;*/
    margin: 65px 0 0 80px;
  }
  /*-----------------------------------------------*/
  .tpt-bar {
    display:flex;
    border:1px solid  #e2e2e2;
    border-radius:2px;
    /*background: #f25f85;*/
    background:#f2f2f2;
    box-shadow:0 2px 5px 0 rgba(0,0,0,.1);
    flex-wrap:wrap;
  }
  .tpt-bar label {
    width: 50%;
    display:block;
    padding:0 20px;
    height:45px;
    text-align: center;
    line-height:45px;
    cursor:pointer;
    order:1;
  }
  .tpt-bar .tpt-bar-con {
    /*margin-top: 0px;*/
    z-index:0;
    display:none;
    margin-top:-1px;
    padding:10px;
    width:100%;
    min-height:120px;
    border-top:1px solid #e2e2e2;
    background:#fff;
    order:99;
    height: 315px;
  }
  .tpt-bar input[type=radio] {
    position:absolute;
    opacity:0;
  }
  .tpt-bar input[type=radio]:checked+label {
    z-index:1;
    margin-right:-1px;
    margin-left:-1px;
    border-right:1px solid #e2e2e2;
    border-left:1px solid #e2e2e2;
    background:#fff;
  }
  .tpt-bar input[type=radio]:checked+label+.tpt-bar-con {
    display:block;
  }
  /*-----------------------------service_body*/
  .tpt-bar-con  .service_body .city{
    position: relative;
    height: 60px;
    line-height: 34px;
    /*background-color: #ffa337;*/
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .service_body .city .store-modle{
    position: absolute;
    top:10px;
    left: 230px;
  }
  .service_body .city div.take{
    display: inline-block;
    box-sizing: border-box;
    height: 40px;
    text-align: center;
    color: #1e1e1e;
    width: 60px;
    /*border: red solid 1px;*/
    margin-top: 10px;
  }
  .service_body .city .minute{
    position: absolute;
    top: 135px;
    left: 280px;
  }
  .service_body .city .minute2{
    position: absolute;
    top: 185px;
    left: 280px;
  }
  .service_body .city div.taketime{
    position: absolute;
    top: 135px;
    left: 13px;
  }
  .service_body .city div.time{
    position: absolute;
    top: 135px;
    left: 103px;
  }
  .service_body .city div.taketime2{
    position: absolute;
    top: 185px;
    left: 13px;
  }
  .service_body .city div.time2{
    position: absolute;
    top: 185px;
    left: 103px;
  }

  .zuche{
    position: absolute;
    top: 250px;
    left: 26px;
    width: 450px;
    height: 40px;
    background-color: #ff9d00;
    text-align: center;
    line-height: 40px;
  }

  /*--------------------longtime---------------------------*/

  .longtime{
    height: 60px;
    /*line-height: 60px;*/
    width: 100%;
    position: relative;
  }
  .longtime div{

    display: inline-block;
  }
  .longtime .item-title{
    height: 30px;
    margin-top: 20px;
    box-sizing: border-box;
  }


  .longtime .apply{
    height: 40px;
    width: 450px;
    /*border: red solid 1px;*/
    background-color: #ff9d00;
    margin:10px 20px;
    box-sizing: border-box;
    text-align: center;
    line-height: 40px;
  }
  .longtime .store-modle{
    /*display: inline-block;*/
    /*margin-top: 0px;*/
    position: absolute;
    top:12px;
    left: 228px;
  }
  .longtime .apply a{
    text-decoration: none;
  }

  /*-------------------------------advantage---------------*/


  .main-foot .advantage div:nth-child(4){
    border-right: #e9ebee solid 1px;
    background-image: url("../../static/images/mile.svg");
  }
  .advantage .adv span{
    display: inline-block;
    margin-top: 70px;
    color: #b9bbbd;
    /*border: red solid 1px;*/
  }
  .main-foot .advantage div:nth-child(1){
    background-image: url("../../static/images/car.svg");
  }
  .main-foot .advantage div:nth-child(2){
    background-image: url("../../static/images/locate.svg");
  }
  .main-foot .advantage div:nth-child(3){
    background-image: url("../../static/images/baoxian.svg");
  }



  /*--------------------hot-car---------*/
  .hot-car{
    width: 100%;
    height: 900px;
    background-color: white;
    margin-top: 100px;
    padding: 80px;
    box-sizing: border-box;
  }
  .hot-car .describe{
    width: 100%;
    height: 150px;
    /*border: red solid 1px;*/
  }
  .hot-car .describe p{
    text-align: center;
  }
  .hot-car .describe p:nth-child(1)
  {
    font-size: 2em;
  }
  .hot-car .describe p:nth-child(2)
  {
    font-size: 1.2em;
    color: #93939e;
  }
  .hot-city{
    width: 100%;
    height: 30px;
    display: flex;
  }
  .hot-city>div{
    flex: 1;
    font-size: 1.1em;
    color: #2f2f39;
  }
  .hot-city>ul{
    flex: 8;
    list-style: none;
    display: flex;
  }
  .hot-city>ul li{
    width: 60px;
    height: 30px;
    line-height: 30px;
  }
  .hot-city>ul li a{
    text-decoration: none;
    color: #a7adb1;
  }
  .hot-car .show-car{
    margin-top: 20px;
    width: 100%;
    height: 550px;
    display: flex;
    /*border: red solid 1px;*/
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
  .show-car .car{
    text-decoration: none;
    width: 385px;
    height: 260px;
    /*border: red solid 1px;*/
    object-fit: fill;
    background-position: center;
    background-size:contain ;
    background-image: url("https://fimg.zuchecdn.com/upload/web/modepic/4.jpg");

  }
  .show-car .car:hover{
    background-position-x: -10px;
    /*box-shadow: 2px 3px 5px #e2e2e2;*/
  }
  .show-car .car p{
    margin-top: 0;
    /*border: red solid 1px;*/
    height: 10px;
    line-height: 10px;
  }
  .show-car .car p.car-name{
    color: #60606c;
    font-size: 16px;
  }
  .show-car .car p.car-type{
    color: #60606c;
    font-size: 14px;
  }
  /*------------------------------main-adv---------*/
  .main-adv{
    width: 100%;
    height: 700px;
    background-color: white;
    margin-top: 100px;
    padding: 80px;
    box-sizing: border-box;

  }
  .main-adv .relex{
    width: 100%;
    height: 150px;
    /*border: red solid 1px;*/
    text-align: center;
    line-height: 150px;
    font-size: 2em;
  }
  .main-adv .display{
    display: flex;
    justify-content: space-between;
    height: 350px;
    /*border: red solid 1px;*/
    box-sizing: border-box;
  }
  .display .content{
    /*flex: 1;*/
    border: #e2e2e2 solid 1px;
    width: 345px;
    height: 350px;
    box-sizing: border-box;
  }
  .display .content:hover{
    box-shadow: 5px 5px 5px #e2e2e2;
    transition: box-shadow 1s;
  }
  .display .content .img{
    /*border: red solid 1px;*/
    padding: 30px 0px 0px 30px;
    width: 100%;
    height: 220px;
    box-sizing: border-box;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("//static.wkzuche.com/www/images/index/img_1.png");
  }
  .content .img .line{
    width: 15px;
    height: 15px;
    border-left: 2px solid white;
    border-top: 2px solid white;
    box-sizing: border-box;
  }
  .content .img p{
    /*border: red solid 1px;*/
    margin: 0px 0 10px 0;
    padding-left: 12px;
    padding-right: 5px;
    box-sizing: border-box;
    color:white;
  }
  .content .img p:nth-child(2){
    font-size: 1.5em;
  }
  .content .icon{
    display: flex;
    width: 100%;
    height: 130px;
    align-items: center;
    box-sizing: border-box;
  }
  .content .icon .split-line{
    width: 0;
    height: 40px;
    border: #e4e6e9 solid 1px;
    box-sizing: border-box;
  }
  .content .icon .left,.right{
    width: 170px;
    height: 130px;
    text-align: center;
    box-sizing: border-box;
  }
  .content .icon a{
    text-decoration: none;
    color: #000;
    font-size: 1.2em;
    display: inline-block;
    width: 100%;
    height: 100%;
    /*background-image: url("//static.wkzuche.com/www/images/index/kefu.png");*/
    background-repeat: no-repeat;
    background-position: center 30px;
    line-height: 180px;
  }
  .display .content .icon a.a5{
    background-image: url("../../static/images/duanzu.png");
  }
  .display .content .icon a.a6{
    background-image: url("../../static/images/weizhi.png");
  }
  .display .content .icon a.a1{
    background-image: url("../../static/images/zhinan.png");
  }
  .display .content .icon a.a2{
    background-image: url("../../static/images/yuding.png");
  }
  .display .content .icon a.a3{
    background-image: url("../../static/images/kefu.png");
  }
  .display .content .icon a.a4{
    background-image: url("../../static/images/zuche.png");
  }
  .content .icon a:hover{
    color: #f77d7a;
  }
  /*---------------------------------introduce*/
  .footer{
    width: 100%;
    height: 609px;
    border-top: #e4e6e9 solid 1px;
    background-color: white;
    margin-bottom: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .leg{
    /*width: 1200px;*/
    width: 100%;
    height: 170px;
    margin: auto;
    position: relative;
    top: 45px;
    display: flex;
    padding-bottom: 60px;
    padding-left: 80px;
    box-sizing: border-box;
  }
  .leg .explain {
    width: 158px;
    height: 108px;
    margin: auto;
    padding-right: 80px;
    flex: 1;
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
  /*----------------------foot-hotcity*/
  .footer-hotcity{
    width: 100%;
    height: 100px;
    line-height: 100px;
    background-color: #1b2b3b;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 80px ;
    display: flex;
    align-items: center;
  }
  .footer-hotcity .fast{
    width: 16%;
    font-size: 1.5em;
    color:white;
    text-align: center;
  }
  .footer-hotcity .underline{
    width: 42%;
    height: 0;
    border: #66686b solid 0.5px;
  }
  .footer-code{
    width: 100%;
    height: 100px;
    line-height: 100px;
    background-color: #1b2b3b;
    text-align: center;
    box-sizing: border-box;
    padding: 0 80px ;
  }
  .footer-code ul{
    list-style:none;
    display: flex;

  }
  .footer-code ul li{
    flex: 1;
    height: 100%;
    text-align: center;
  }
  .footer-code ul li a{
    text-decoration: none;
    color: white;
  }
  .footer-code ul li.rmtextcur a{
    color: #fabe00;
    border-bottom:#fabe00 solid 2px ;
  }
  .footer-code ul li a:hover{
    color: #fabe00;
    border-bottom:#fabe00 solid 2px ;
  }
  .cityname{
    width: 100%;
    height: 145px;
    background-color: #1b2b3b;
    box-sizing: border-box;
    padding: 0 80px ;
    /*border-bottom: #66686b solid 1px;*/
  }
  .cityname .city{

    width: 100%;
    height: 140px;
    border-bottom: #66686b solid 1px;
  }
  .service_body .city .store-modle{
    /*margin-top: 40px;*/
    display: inline-block;
  }
  .cityname .city a{
    /*display: block;*/
    font-size: 0.8em;
    text-align: left;
    display: inline-block;
    text-decoration: none;
    color: white;
    width: 90px;
    height: 30px;
  }
  /*-----------------------------link------------*/
  .foot{
    width: 100%;
    height: 186px;
    background-color: #1b2b3b;
    color: #6d8aab;
    padding-bottom: 40px;
    padding-right: 80px;
    padding-left: 80px;
    box-sizing: border-box;
    position: relative;
    /*top: 60px;*/
  }
  .foot .foot_total{
    width: 100%;
    height: 140px;
  }
  .foot .foot_total .foot_top{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #32414f;
    box-sizing: border-box;
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
  .foot .foot_total .foot_top .last_a{
    width: 70px;
    height: 50px;
    float: right;
    margin-right: 0;
    text-align: right;
  }
  .foot .foot_total .foot_top .last_a .eng_icon{
    width: 4px;
    height: 5px;
    background: url("../../static/images/icon11.png") ;
    background-position: -594px -3px;
    margin-left: 5px;
    display: inline-block;

  }
  .foot .foot_total .foot_top a:hover{
    text-decoration: underline;
  }
  .foot .foot_total .foot_down{
    width: 100%;
    height: 90px;
    padding-top: 27px;
    box-sizing: border-box;

  }
  .foot .foot_total .foot_down p{
    padding: 0;
    margin: 0;
    font-size: 12px;
    color: #6d8aab;
  }
  .f1{
    float: left;
  }
  .f2{
    float: right;
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
  }
  .foot .foot_total .foot_down .f4 img{
    padding-top: 10px;
    width: 90px;
    height: 36px;
    object-fit: cover;
    margin-left: 10px;
  }
  .s_city1{
    position: absolute;
    left: 50px;
    top: 10px;
    margin-right:5px ;
  }
  .s_city2{
    position: absolute;
    left: -10px;
  }
  .s_city3{
    position: absolute;
    top: 17px;
  }
  .s_city4{
    position: absolute;
    top: 5px;
    left: 15px;
  }
</style>
