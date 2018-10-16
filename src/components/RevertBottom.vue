<template>
  <div>
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
        </dd>
      </dl>
    </div>
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
          <a href="#" class="f4"><img src="../assets/images/right.png" ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "RevertBottom"
    }
</script>

<style scoped>
  .leg{
    width: 80%;
    height: 110px;
    margin: auto;
    position: relative;
    top: 55px;
    display: flex;
    padding-bottom: 30px;
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
  .foot{
    width: 100%;
    height: 186px;
    background-color: #1b2b3b;
    color: #6d8aab;
    padding-bottom: 40px;
    padding-right: 150px;
    padding-left: 150px;
    box-sizing: border-box;
    position: relative;
    top: 60px;
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
    /*background: url("images/icon.png") ;*/
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
</style>
