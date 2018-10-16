<template>
  <div class="container">
    <div class="top"></div>
    <div class="main">
      <div class="left-main">
        <img src="../../static/images/index.png" alt="">
        <div class="city">
          <div>
            <img src="../../static/images/city_left.png" alt="">
            <span>云南</span>
            <img src="../../static/images/city_right.png" alt="">
          </div>
          <div>
            <ul>
            </ul>
          </div>
        </div>
        <div class="left-main-bottom">
          <!--<a href="" style="text-decoration: none;color: white;">下一步</a>-->
          <router-link style="text-decoration: none;color: white;" to="/drive/drive2">下一步</router-link>
        </div>
      </div>
      <div class="right-main">
        <div>
          <p>-------定制服务流程--------</p>
          <img src="../../static/images/step.png" alt="">
          <p style="font-size: 20px">----------咨询电话-----------</p>
          <p>13955415175</p>
          <p style="font-size: 20px">----------服务时段---------</p>
          <span style="position: relative;top: 130px;font-weight:500;font-size:15px">工作日：9:00-18:00 <br>
                    非工作日：10:00-17:00</span>
        </div>
      </div>
    </div>
    <div id="modal" class="modal">
      <div class="modal-content">
        <header class="modal-header">
          <h4>错误提示</h4>
          <span class="close">×</span>
        </header>
        <div class="modal-body">
          <p>您没有选择地点,请点击"确定"继续选择地点</p>
        </div>
        <footer class="modal-footer">
          <button id="cancel">确定</button>
        </footer>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "drive"
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
  /*--------------------主体--------------------------------------*/
  .main{
    width: 80%;
    height: auto;
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
    /*left: 40px;*/
  }
  .left-main .city{
    width: 100%;
    height: 600px;
    background-color: white;
    position: relative;
    top: 38px;
    /*border: solid 1px black;*/
    /*box-sizing: border-box;*/

  }
  .left-main .city div:first-child{
    width: 100%;
    height: 70px;
    /*background-color: red;*/
    line-height: 80px;
    text-indent: 20px;
  }
  .left-main .city div:first-child span{
    width: 100px;
    height: 46px;
    font-weight: 400;
    text-align: center;
    color: white;
    font-size: 20px;
    line-height: 46px;
    background-color: #e40000;
    border: none;
    text-indent: -8px;
    display: inline-block;
    position: relative;
    left: 25px;
  }
  .left-main .city div img{
    width: 30px;
    height: 30px;
    cursor:pointer;
  }
  .left-main .city div img:last-child{
    position: relative;
    left: 550px;
  }
  .left-main .city div:first-child span:hover{
    cursor: pointer;
  }
  .left-main .city div:last-child{
    width: 100%;
    height: 350px;
    display: flex;
  }
  .left-main .city div:last-child ul{
    position: relative;
    left: 20px;
    width: 900px;
    height: 320px;
    top: 10px;
    list-style-type: none;
    /*background-color: red;*/
  }
  .left-main .city div:last-child li{
    width: 80px;
    height: 44px;
    background-color: white;
    margin-top: 10px;
    margin-right: 20px;
    border: solid 1px #cccccc;
    box-sizing: border-box;
    color: #666666;
    float: left;
    text-align: center;
    line-height: 44px;
    font-size: 15px;
    cursor: pointer;
  }
  .left-main-bottom{
    width: 180px;
    height: 50px;
    background-color: #e40000;
    position: relative;
    top: -40px;
    left: 300px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    border-radius: 5px;
  }
  /*------------------右边-----------------------------*/
  .main .right-main{
    width: 25%;
    height: 100%;
    /*background-color: #ffa627;*/
    text-align: center;
    font-weight: 900;
    font-size: 20px;
    color: #666666;
  }
  .right-main p:first-child{
    position: relative;
    top: 45px;
  }

  .right-main img{
    width: 100%;
    height: 150px;
    position: relative;
    top: 70px;
  }
  .right-main p:first-child~p{
    position: relative;
    top: 125px;
  }

</style>
