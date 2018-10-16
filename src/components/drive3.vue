<template>
  <div class="container">
    <div class="top"></div>
    <div class="main">
      <div class="left-main">
        <form action="">
          <img src="../../static/images/index3.png">
          <div>出行人数:
            <select>
              <option>1人</option>
              <option>2人</option>
              <option>3人</option>
              <option>4人</option>
              <option>5人</option>
              <option>6人</option>
              <option>7人</option>
              <option>8人</option>
              <option>9人</option>
            </select>
          </div>
          <div>出行成员:
            <input type="checkbox">儿童（2-12岁）
            <input type="checkbox">老人（60岁以上）
          </div>
          <div>联 系 人 :
            <input type="text" required>
          </div>
          <div>手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机 :
            <input type="text" required>
          </div>
          <div>
            <span style="position: relative;top: -185px;">其他需求:</span>
            <textarea style="width: 350px;height: 200px;resize:none "></textarea>

          </div>
          <input type="submit" value="提交">
        </form>
      </div>
      <div class="right-main">
        <div>
          <p>--------您的出行信息-------</p>
          <div style="width: 100%;height: 100px;position: relative;top: 50px;">
            <span style="position: relative;top: -10px;left: -120px;font-size: 18px;font-weight: 400">目的地:</span>
            <ul id="ul">

            </ul>
            <span id="span1" style="position: relative;top: -10px;left: -120px;font-size: 18px;font-weight: 400;margin-top: 20px">出行时间:</span>
            <span id="span3" style="position: relative;top: -35px;margin-bottom: 40px;">2018年9月</span>
            <span id="span2" style="position: relative;top: -40px;left: -120px;font-size: 18px;font-weight: 400">天数:</span>
            <span id="span4" style="position: relative;top: -65px;left: -30px;">1~3天</span>

          </div>
          <p>-----------咨询电话----------</p>
          <p>13955415175</p>
          <p>-----------服务时段----------</p>
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
        name: "drive3"
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
    height:850px;
    background-color: white;
    margin: auto;
    position: relative;
    top: -40px;
    display: flex;
  }

  .main .left-main{
    width: 75%;
    height: 100%;
  }

  .main .left-main img{
    width: 100%;
    height: 100px;
    position: relative;
    top: 70px;
  }
  .main .left-main div{
    width: 100%;
    height: 80px;
    position: relative;
    top: 70px;
    left: 40px;
    font-size: 18px;
    font-weight: 400;
  }
  .main .left-main div input[type="text"]{
    width: 300px;
    height: 40px;
  }

  .main .left-main div select{
    width: 300px;
    height: 50px;
    font-size: 20px;
  }
  .main .left-main input[type="submit"]{
    width: 180px;
    height: 50px;
    background-color: #e40000;
    position: relative;
    top: 250px;
    left: 350px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }

  .main .right-main{
    width: 25%;
    height: 100%;
    /*background-color: #ffa627;*/
    text-align: center;
    font-weight: 600;
    font-size: 20px;
    color: #666666;
  }
  .right-main p:first-child{
    position: relative;
    top: 45px;
  }

  .right-main img{
    width: 70%;
    height: 200px;
    position: relative;
    top: 105px;
  }
  .right-main p:first-child~p{
    position: relative;
    top: 125px;
  }

  .right-main span{
    text-align: center;
    display: block;
    position: relative;
    top: 110px;
    font-weight:500;
    font-size: 18px
  }

  .right-main ul{
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    top: -55px;
    left: 40px;
  }

  .right-main ul li{
    width: 30%;
    height: 30px;
    /*background-color: black;*/
    margin-right: 5px;
    text-align: center;
    border: solid 1px grey;
    line-height: 30px;
    font-size: 14px;
  }
</style>
