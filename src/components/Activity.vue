<template>
  <div>
    <div class="head">
      <div class="head-content">
        <City class="aaa"></City>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Calenlar class="aaa"></Calenlar>&nbsp;&nbsp;&nbsp;
        <div>  ➤   </div>&nbsp;&nbsp;&nbsp;
        <Calenlar class="aaa"></Calenlar>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>搜素</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>重置</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <div class="aa1"><img src="../assets/images/fav_icon_weibo.png" alt=""><span>+关注</span></div>&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="aa1"><img src="../assets/images/fav_icon_weixin.png" alt=""><span>扫一扫</span></div>&nbsp;&nbsp;&nbsp;&nbsp;
        <div class="aa1"><img src="../assets/images/fav_icon_email.png" alt=""><span>邮件订阅</span></div>
      </div>
    </div>
    <div class="main">
      <div class="main-content">
        <ul>
          <li class="bb1">
            <div class="aa2"><img src="../assets/images/寒山寺.jpg" alt=""></div>

            <div class="bb">
              <ul>
                <li><h3 style="color: #eeb81a">寒山寺，一日游。</h3></li>
                <li>
                  <span>简介：寒山寺位于苏州市姑苏区，始建于南朝萧梁代天监年间（公元502～519年），初名“妙利普明塔院”。寒山寺占地面积约1.3万平方米，建筑面积三千四百余平方米。</span>
                </li>
                <li>
                  <p>目标人数：10人</p>
                  <p>已参人数：5人</p>
                  <p>日期：2018-11-11</p>
                  <p>联系人：王文成</p>
                  <p style="color: red">联系电话：15776540858</p>
                </li>
                <li>
                  <input class="input" type="button" value="立即加入">
                  <span id="eeee">全国</span>
                </li>
              </ul>

              <!--<h3 class="aa3">寒山寺。一日游！</h3>-->
              <!--<span class="aa4">简介： 寺楼直与众山邻，鱼米东南此要津。独惜牙郎趋利市， </span>-->
              <!---->
            </div>

          </li>
          <br>
          <li class="bb1">111111111</li>
          <br>
          <li class="bb1">11111111</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Activity",
    methods: {},
    data() {
      return {}
    },
  }

</script>

<style scoped>
  body, ul, li, p, h1, h2 {
    margin: 0; /*外边距*/
    padding: 0; /*内边距*/
  }
  .head{
    width: 100%;
    height: 80px;
    /*background: red;*/
  }
  .head-content{
    width: 1200px;
    margin: auto;
    height: 100%;
    /*background: green;*/
    display: flex;
    line-height:80px;
    /*vertical-align:middle;*/
    /*position: absolute;*/
  }
  .main{
    width: 100%;
    height: 1200px;
    background: #bababa;
  }
  .main-content{
    width: 1200px;
    height: 100%;
    /*background: yellow;*/
    margin: auto;

  }
  .head-content button{
    height: 38px;
    line-height: 38px;
    position: relative;
    top: 21px;
    width: 60px;
    background: rgba(238, 184, 26, 0.35);
    color: #eeb81a;
    border: solid 1px #eeb81a;
  }
  .head-content .aa1{
    width: 100px;
    height: 30px;
    border: solid 1px gray;
    margin: auto;
  }
  .head-content .aa1 img{
    position: relative;
    top: -27px;
    left: 5px;
  }
  .head-content .aa1 span{
    position: relative;
    top: -27px;
    left: 5px;
  }
  .main-content ul .bb1 {
    /*padding-top:30px ;*/
    width: 100%;
    height: 320px;
    background: white;
    list-style: none;
    display: flex;
    position: relative;
    top: 30px;
  }
 .aa2{
    width: 680px;
   height: 100%;
   background: #22A7F0;
  }
  .aa2 img{
    width: 100%;
    height: 100%;
    /*图片中心对其*/
    /*object-fit: cover;*/
  }
  .aa3{
    position: relative;
    left: 100px;
  }
  .aa4{
    width: 200px;
    position: relative;
    top: 10px;
    left: 100px;
  }
 .main-content ul li button{
   height: 38px;
   line-height: 38px;
   /*position: relative;*/
   /*top: 21px;*/
   /*width: 60px;*/
   background: rgba(238, 184, 26, 0.35);
   color: #eeb81a;
   border: solid 1px #eeb81a;
   position: relative;
   top: 100px;
   left: -150px;
 }
  .bb{
    width: 520px;
    height: 100%;
    /*background: red!important;*/
  }
  .bb ul li{
    list-style: none;
    margin-top: 20px;
    margin-left: 50px;
  }
  .input{
    width: 100px;
    height: 45px;
    background: rgb(238, 184, 26);
    color: white;
    border: solid 1px #eeb81a;
    font-size: 14px;
  }
  #eeee{
    margin-left: 20px;
    background: #fd966c;
    color: white;
  }
</style>
