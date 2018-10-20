<template>
  <div class="myall">

    <!--<div class="data-body">-->
        <!--<div class="nav">-->
          <!--<nav>-->
            <!--<ol class="breadcrumb">-->
              <!--<li><router-link to="/">租车查询</router-link></li>-->
              <!--<li><router-link to="/revert">租车查询</router-link></li>-->
              <!--<li class="active">丰田</li>-->
            <!--</ol>-->
          <!--</nav>-->
        <!--</div>-->
        <!--<div class="car-info">-->
          <!--<div class="car-head">-->
            <!--<div class="car-img">-->
              <!--<div class="container">-->
                <!--<img class='photo' src="images/detail_image_0.png" alt=""/>-->
                <!--<img class='photo' src="images/detail_image_2.png" alt=""/>-->
                <!--<img class='photo' src="images/detail_image_3.png" alt=""/>-->
                <!--<img class='photo' src="images/detail_image_0.png" alt=""/>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="base-info">-->
              <!--<div class="car-brand">-->
                <!--<span>丰田花冠</span>-->
              <!--</div>-->
              <!--<ul>-->
                <!--<li>品 牌：<span>雪佛兰</span></li>-->
                <!--<li>车 系：<span>科鲁兹</span></li>-->
                <!--<li>年代款：<span>2010</span></li>-->
                <!--<li>配置款：<span>天地版</span></li>-->
              <!--</ul>-->
              <!--<div class="order-now">-->
                <!--<span class="price">￥180元/天</span>-->
                <!--<div class="car-order">立即预定</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</div>-->
          <!--<div class="car-body">-->
            <!--<div class="car-left">-->
              <!--<div class="title-head"><p>基本配置信息</p></div>-->
              <!--<div class="data-param">-->
                <!--<p class="vibs">-->
                  <!--<a class="ico" style="background: url('../../static/images/座位.svg'); background-repeat: no-repeat"></a>-->
                  <!--<span class="car-des">座位数：</span>-->
                  <!--<span class="car-data">5</span>-->
                <!--</p>-->
                <!--<p class="vibs">-->
                  <!--<a class="ico" style="background: url('../../static/images/车门.svg'); background-repeat: no-repeat"></a>-->
                  <!--<span class="car-des">车门数：</span>-->
                  <!--<span class="car-data">5</span>-->
                <!--</p>-->
                <!--<p class="vibs">-->
                  <!--<a class="ico" style="background: url('../../static/images/汽油_gasoline.svg'); background-repeat: no-repeat"></a>-->
                  <!--<span class="car-des">燃油类型：</span>-->
                  <!--<span class="car-data">汽油</span>-->
                <!--</p>-->
                <!--<p class="vibs">-->
                  <!--<a class="ico" style="background: url('images/车巴巴-变速箱.svg'); background-repeat: no-repeat"></a>-->
                  <!--<span class="car-des">变速箱类型：</span>-->
                  <!--<span class="car-data">自动挡</span>-->
                <!--</p>-->
                <!--<p class="vibs">-->
                  <!--<a class="ico" style="background: url('images/座位.svg'); background-repeat: no-repeat"></a>-->
                  <!--<span class="car-des" >排量：</span>-->
                  <!--<span class="car-data">1.6</span>-->
                <!--</p>-->
                <!--<p class="vibs">-->
                  <!--<a class="ico" style="background: url('images/燃油.svg'); background-repeat: no-repeat"></a>-->
                  <!--<span class="car-des">汽油标号：</span>-->
                  <!--<span class="car-data">92</span>-->
                <!--</p>-->
                <!--<p class="vibs">-->
                  <!--<a class="ico" style="background: url('images/车巴巴-变速箱.svg'); background-repeat: no-repeat"></a>-->
                  <!--<span class="car-des">驱动方式：</span>-->
                  <!--<span class="car-data">前驱</span>-->
                <!--</p>-->
                <!--<p class="vibs">-->
                  <!--<a class="ico" style="background: url('images/燃油.svg'); background-repeat: no-repeat"></a>-->
                  <!--<span class="car-des">油箱容量：</span>-->
                  <!--<span class="car-data">50</span>-->
                <!--</p>-->
                <!--<p class="vibs">-->
                  <!--<a class="ico" style="background: url('images/座位.svg'); background-repeat: no-repeat"></a>-->
                  <!--<span class="car-des">天窗：</span>-->
                  <!--<span class="car-data">有</span>-->
                <!--</p>-->
                <!--<p class="vibs">-->
                  <!--<a class="ico" style="background: url('images/车巴巴-座椅配置.svg'); background-repeat: no-repeat"></a>-->
                  <!--<span class="car-des">座椅：</span>-->
                  <!--<span class="car-data">织物座椅</span>-->
                <!--</p>-->
                <!--<p class="vibs">-->
                  <!--<a class="ico" style="background: url('images/喇叭.svg'); background-repeat: no-repeat"></a>-->
                  <!--<span class="car-des">音箱：</span>-->
                  <!--<span class="car-data">4-5喇叭</span>-->
                <!--</p>-->
                <!--<p class="vibs">-->
                  <!--<a class="ico" style="background: url('images/气囊.svg'); background-repeat: no-repeat"></a>-->
                  <!--<span class="car-des">气囊：</span>-->
                  <!--<span class="car-data">2</span>-->
                <!--</p>-->
                <!--<p class="vibs">-->
                  <!--<a class="ico" style="background: url('images/雷达.svg'); background-repeat: no-repeat"></a>-->
                  <!--<span class="car-des">倒车雷达：</span>-->
                  <!--<span class="car-data">无</span>-->
                <!--</p>-->
                <!--<p class="vibs">-->
                  <!--<a class="ico" style="background: url('images/LC_icon_gps_line_2.svg'); background-repeat: no-repeat"></a>-->
                  <!--<span class="car-des">GPS导航：</span>-->
                  <!--<span class="car-data">无</span>-->
                <!--</p>-->
                <!--<p class="vibs">-->
                  <!--<a class="ico" style="background: url('images/cd-dvd-rom.svg'); background-repeat: no-repeat"></a>-->
                  <!--<span class="car-des">DVD/CD：</span>-->
                  <!--<span class="car-data">无</span>-->
                <!--</p>-->
                <!--<p class="vibs">-->
                  <!--<a class="ico" style="background: url('images/进气.svg'); background-repeat: no-repeat"></a>-->
                  <!--<span class="car-des">进气形式：</span>-->
                  <!--<span class="car-data">自然吸气</span>-->
                <!--</p>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="car-right">-->
              <!--<div class="title-head"><p>其他车型</p></div>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <div class="mybottom"></div>
  </div>
</template>

<script>
    export default {
        name: "CarDetail",
        data:function(){
          return{
            cid:this.$route.query.name,
          }
        },
    }
</script>

<style scoped>
  body,ul,li,a{
    padding: 0;
    margin: 0;
  }
  .myall{
    height: 1500px;
  }
  ul{
    list-style: none;
  }
  input{
    outline: none;
  }
  body {
    background-color: #f2f2f5 !important;
  }
  a{
    text-decoration: none;
  }
  .data-body{
    width: 1200px;
    height: 800px;
    /*background-color: ghostwhite;*/
    margin: 0px auto;
  }
  .data-body .nav{

    height: 50px;
    line-height: 50px;
  }
  .data-body .car-info{
    position: relative;
  }
  .car-info .car-head{
    position: relative;
    height: 470px;
    width: 100%;
    background-color: white;
  }
  .car-info .car-head .car-img{
    position: absolute;
    width: 680px;
    height: 100%;
    /*background-color: #dbff38;*/
  }
  .car-head .car-img .container{
    width: 95%;
    height: 100%;
  }

  .car-info .car-head .base-info{
    position: absolute;
    left: 780px;
    width: 350px;
    height: 100%;
  }
  .car-head .base-info .car-brand{
    margin-top: 50px;
    height: 60px;
    line-height: 60px;
    color: #555555;
    box-sizing: border-box;
    border-bottom: #cccccc solid 1px;
  }
  .car-head .base-info .car-brand span{
    font-size: 2em;

  }
  .car-head .base-info ul li{
    height: 50px;
    width: 100%;
    line-height: 50px;
    font-size: 20px;
  }
  .order-now .car-order{
    box-sizing: border-box;
    margin-top: 60px;
    margin-left: 100px;
    width: 100px;
    height: 40px;
    font-size: 16px;
    color: white;
    text-align: center;
    line-height: 40px;
    display: inline-block;
    background-color: blue;
  }
  .order-now .price{
    color:red;
    font-size: 24px;
  }
  .car-info .car-left{
    top: 490px;
    width: 760px;
    height: 700px;
    background-color: white;
    position: absolute;
    padding: 0 40px;
    box-sizing: border-box;
  }
  .car-left .title-head{
    font-size: 24px;
    height: 100px;
    line-height: 100px;
    border-bottom: #cccccc solid 1px;
  }
  .car-left .data-param{
    padding-top: 50px;
  }
  .car-left .data-param p{
    font-size: 18px;
    line-height: 40px;
    display: inline-block;
    width: 335px;
    height: 40px;
    /*background-color: #ff4254;*/
  }
  .car-left .data-param p .ico{
    /*margin-top: 10px;*/
    display: inline-block;
    width: 50px;
    height: 25px;
    background-color: #dbff38;
  }
  .mybottom{
    width: 100%;
    height: 200px;
    background-color: red;
    position: relative;
    top: 270px;
  }
</style>
