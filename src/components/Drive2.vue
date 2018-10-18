<template>
  <div class="container">
    <div class="top"></div>
    <div class="main">
      <div class="left-main" v-if="false">
        <!--<img src="../../static/images/index2.png" alt="">-->
        <div>
          <span>出行时间:</span>
          <select class="year">
            <option selected>2018</option>
            <option>2019</option>
          </select> &nbsp;&nbsp;年
          <select class="month">
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select> &nbsp;&nbsp;月
        </div>
        <div>
          <span>游玩天数:</span>
          <select id="play_time">
            <option>1~3天</option>
            <option>4~7天</option>
            <option>8~15天</option>
            <option>16~20天</option>
            <option selected>20天以上</option>
          </select>
        </div>
        <div id="button">
          <router-link style="text-decoration: none;color: white;" to="/drive/drive3">下一步</router-link>
        </div>
      </div>
      <div class="left-main" v-if="true" >
        <!--<img src="../../static/images/index.png" alt="">-->
        <!--<div class="city">-->
        <!--<div>-->
        <!--<img src="../../static/images/city_left.png" alt="">-->
        <!--<span>云南</span>-->
        <!--<img src="../../static/images/city_right.png" alt="">-->
        <!--</div>-->
        <!--<div>-->
        <!--<ul>-->
        <!--</ul>-->
        <!--</div>-->
        <!--</div>-->
        <div class="city">
          <Province></Province>
        </div>
        <div class="left-main-bottom">
          <!--<a href="" style="text-decoration: none;color: white;">下一步</a>-->
          <router-link style="text-decoration: none;color: white;" to="/drive/drive2">下一步</router-link>
        </div>
      </div>
      <div class="right-main">
        <div>
          <p>----------您的出行信息-------</p>
          <div style="width: 100%;height: 100px;position: relative;top: 50px;">
            <span style="position: relative;top: -10px;left: -100px;font-size: 17px;font-weight: 600">目的地:</span>
            <ul>

            </ul>

          </div>
          <p>----------咨询电话--------------</p>
          <p>13955415175</p>
          <p>----------服务时段--------------</p>
          <span>工作日：9:00-18:00
                    </span>
          <span>
                    非工作日：10:00-17:00</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "Drive2"
    }
</script>

<style scoped>
  body{
    padding: 0;
    margin: 0;
  }
  .container{
    width: 100%;
    height: auto;
    background-color: #f2f2f2;
  }
  .top{
    width: 100%;
    height: 500px;
    background-image: url("../../static/images/drive_self.png");
    background-position: center center;
  }

  .main{
    width: 80%;
    height: 630px;
    background-color: white;
    margin: auto;
    position: relative;
    top: -40px;
    display: flex;
  }

  .main .left-main{
    width: 75%;
    height: 100%;
    /*background-color: yellow;*/
  }

  .main .left-main>img{
    width: 100%;
    height: 100px;
    position: relative;
    top: 70px;
  }
  .main .left-main div{
    width: 90%;
    height: 150px;
    /*background-color: red;*/
    position: relative;
    top: 70px;
    left: 40px;
    font-weight: 500;
    font-size: 18px;
    line-height: 90px;
  }

  .main .left-main select{
    margin-left: 40px;
    width: 200px ;
    height: 60px;
    font-weight: 400;
    font-size: 18px;
    text-align: center;
  }
  .main .left-main select option{
    font-size: 18px;
  }

  .main .right-main{
    width: 25%;
    height: 100%;
    /*background-color: #ffa627;*/
    color: #666666;
  }
  .right-main p:first-child{
    position: relative;
    top: 45px;
    text-align: center;
    font-weight: 900;
    font-size: 20px;
  }
  .main .left-main div:last-child{
    width: 180px;
    height: 50px;
    background-color: #e40000;
    position: relative;
    left: 460px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
  .right-main p:first-child~p{
    position: relative;
    top: 70px;
    text-align: center;
    font-weight: 900;
    font-size: 20px;
  }
  .right-main span{
    text-align: center;
    display: block;
    position: relative;
    top: 70px;
    font-weight:500;
    font-size: 20px
  }
  .right-main ul{
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    top: -45px;
    left: 40px;
  }

  .right-main ul li{
    width: 38%;
    height: 30px;
    /*background-color: black;*/
    margin-right: 5px;
    margin-top: 5px;
    text-align: center;
    border: solid 1px grey;
    line-height: 30px;
  }





</style>
