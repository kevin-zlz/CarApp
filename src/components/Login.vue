<template>
  <div class="container">
    <div class="main">
      <div class="main_background">
        <div class="main_content">
          <div class="login_header"  style="position: relative;left:-20%; ">
            <div class="tpt-bar" >
              <input type="radio" name="bar" id="tab-1" checked="">
              <label for="tab-1" style="width: 50%;">登录</label>
              <div class="tpt-bar-con">
                <div class="login1" >
                  <ul >
                    <li class="li-1" style="position: relative"><img class="img1" src="../assets/images/用户.svg" alt="">
                      <input class="input1" type="text" placeholder="请输入用户名" id="wq2" v-model="userInfo.telephone" v-on:blur="a">
                      <span class="fff" v-text="tiShi.tishi1"></span>
                    </li>
                    <br/>
                    <li class="li-2"><img class="img2" src="../assets/images/密码.svg" alt="">
                      <input class="input2" type="text" placeholder="请输入密码" id="wq3" v-model="userInfo.password" v-on:blur="b">
                      <span class="fff2" v-text="tiShi.tishi2"></span>
                    </li>
                    <p class="eee">用户名或密码错误</p>
                    <br/>
                    <li class="li-3">
                      <input class="input3" type="checkbox" id="cb">
                      <label class="label1" for="cb">30天内自动登录</label>
                      <router-link to="/retrieve" class="a1">忘记密码?</router-link>
                    </li>
                  </ul>
                </div>
                <div class="login2"><input type="submit" class="input4" value="登录"></div>
                <div class="login3">
                  <span class="sp">还不是会员？</span>
                  <router-link to="/regist" class="a2">立即注册?</router-link>
                </div>
              </div>
              <input type="radio" name="bar" id="tab-2">
              <label for="tab-2" style="width: 50%">手机动态登录</label>
              <div class="tpt-bar-con">
                <div class="login1">
                  <ul>
                    <li class="li-1"><img class="img1" src="../assets/images/用户.svg" alt="">
                      <input class="input1" type="text" placeholder="请输入用户名" id="wq4"  v-model="userInfo.telephone1" v-on:blur="c">
                      <span class="fff4" v-text="tiShi.tishi3"></span>
                    </li>
                    <br/>
                    <li class="li-4"><img class="img2" src="../assets/images/信封.svg" alt="">
                      <input class="input5" type="text" placeholder="请输入验证码">
                      <input class="message" type="button" value="点击发送验证码"  v-on:click="sendCode($event.target)"/>
                      <!--<p class="message"><a href="#" class="a3" onclick="sendCode(this)">获取验证码</a></p>-->
                    </li>
                    <br/>
                    <li class="li-3">
                      <input class="input3" type="checkbox" id="cbx">
                      <label class="label1" for="cbx">30天内自动登录</label>
                      <router-link to="/retrieve" class="a1">忘记密码?</router-link>
                      <!--<a href="#" class="a1">忘记密码?</a>-->

                    </li>
                  </ul>
                </div>
                <div class="login2"><input type="button" class="input4" value="登录"></div>
                <div class="login3">
                  <span class="sp">还不是会员？</span>
                  <router-link to="/regist" class="a2">立即注册?</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main_footer">
          <ul class="ul2">
            <li class="li-5">
              <div class="li-5-1"></div>
              <p>100+车型</p>
            </li>
            <li class="li-6">
              <div class="li-6-1"></div>
              <p>1000+网点</p>
            </li>
            <li class="li-7">
              <div class="li-7-1"></div>
              <p>100%车险</p>
            </li>
            <li class="li-8">
              <div class="li-8-1"></div>
              <p>无限里程</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer_introduce">
      <div class="footer_introduce_content">
        <div class="introduce1">
          <p class="introduce_header">租车预定说明</p>
          <p><a href="#">服务时间</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">待租车况</a></p>
          <p><a href="#">服务预定</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">短租产品</a></p>
          <p><a href="#">租车资格</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">取还车说明</a></p>
        </div>
        <div>
          <p class="introduce_header">会员管理</p>
          <p><a href="#">会员章程</a></p>
          <p><a href="#">会员细则</a></p>
          <p><a href="#">定级积分</a></p>
        </div>
        <div>
          <p class="introduce_header">紧急事务处理</p>
          <p><a href="#">保险责任</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">理赔说明</a></p>
          <p><a href="#">事故处理</a></p>
          <p><a href="#">救援及备用车</a></p>
        </div>
        <div>
          <p class="introduce_header">租车费用及结算</p>
          <p><a href="#">价格说明</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">结算流程</a></p>
          <p><a href="#">储蓄卡</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">积分</a></p>

        </div>
        <div>
          <p class="introduce_header">租车预定说明</p>
          <p><a href="#">常见问题</a></p>
          <p><a href="#">新手上路</a></p>
          <p><a href="#">服务规则</a></p>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer_1">
        <div class="footer_2">
          <a href="#">关于我们</a>
          <a href="#">投资者关系</a>
          <a href="#">新闻中心</a>
          <a href="#">加盟合作</a>
          <a href="#">隐私保护</a>
          <a href="#">网站导航</a>
          <a href="#">联系我们</a>
          <a href="#">招贤纳士</a>
        </div>
        <div class="footer_3">
          <a href="#" id="aa">English></a>
        </div>
      </div>
    </div>
    <div class="footer_4">
      <div class="footer_5">
        <p id="p1">Copyright©2008-2018 www.zuche.com All Rights Reserved.　北京神州汽车租赁有限公司 京ICP备10005002号 京公网安备号
          11010502026705</p>
        <p id="p2">如果您对神州租车网站有任何意见，欢迎发送邮件到<a href="#" >517291777@qq.com</a></p>
      </div>
    </div>
    <div class="footer_6">
      <div class="div1"></div>
      <div class="div2"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        clock: '',
        nums: 10,
        btn: '',
        tiShi:{
          tishi1:'',
          tishi2:'',
          tishi3:'',
        },
        userInfo:{
          telephone:'',
          password:'',
          telephone1:'',
        },
      }
    },
    methods: {
      sendCode:function (thisBtn) {
          this.btn = thisBtn;
          console.log(this.btn);
          this.btn.disabled = true; //将按钮置为不可点击
          this.btn.value = this.nums + '秒后可重新获取';
          this.clock = setInterval(this.doLoop, 1000); //一秒执行一次
      },
      doLoop:function () {
        this.nums--;
          if (this.nums > 0) {
            this.btn.value = this.nums + '秒后可重新获取';
          } else {
            clearInterval(this.clock); //清除js定时器
            this.btn.disabled = false;
            this.btn.value = '点击发送验证码';
            this.nums = 10; //重置时间
          }
      },
      // 用户名
      a(){
        this.tiShi.tishi1= '';
        var p=/^1[34578]\d{9}$/;
        if (!this.userInfo.telephone) {
          this.tiShi.tishi1='用户名不能为空';
          console.log( this.tiShi.tishi1)
        }
        else if(!p.test(this.userInfo.telephone)){
          this.tiShi.tishi1="请输入11位手机号"
        }
      },
      // 密码
      b(){
        this.tiShi.tishi2= '';
        var p=/[a-zA-Z]\w[z0-9]/;
        if (!this.userInfo.password) {
          this.tiShi.tishi2='密码不能为空';
        }
        else if(!p.test(this.userInfo.password)){
          this.tiShi.tishi2="由字母开头+数字"
        }
      },
      // 手机号
      c(){
        this.tiShi.tishi3= '';
        var p=/^1[34578]\d{9}$/;
        if (!this.userInfo.telephone1) {
          this.tiShi.tishi3='用户名不能为空';
          console.log( this.tiShi.tishi3)
        }
        else if(!p.test(this.userInfo.telephone1)){
          this.tiShi.tishi3="请输入11位手机号"
        }
      },
  }
  }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body, ul, li, p, h1, h2 {
    margin: 0; /*外边距*/
    padding: 0; /*内边距*/
  }

  .container {
    width: 100%;
    /*background: grey;*/
  }



  .main {
    width: 100%;
    margin: auto;
    /*height: 900px;*/
    /*background: #dbff54;*/
  }

  .main .main_background {
    width: 100%;
    height: 601px;
    /*no-repeat 不重复  top center向上居中*/
    background: url("../assets/images/login_bg.jpg") no-repeat top center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  .main_background .main_content {
    width: 356px;
    height: 373px;
    /*background: #f3f4f6;*/
    position: absolute;
    left: 1000px;
    top: 70px;
  }

  /*------------------------------------------*/
  .tpt-bar {
    display: flex;
    border: 1px solid #e2e2e2;
    border-radius: 2px;
    /*background: #f25f85;*/
    background: #f2f2f2;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .1);
    flex-wrap: wrap;

  }

  .tpt-bar label {
    width: 50%;
    display: block;
    padding: 0 20px;
    height: 38px;
    text-align: center;
    line-height: 38px;
    cursor: pointer;
    order: 1;
  }

  .tpt-bar .tpt-bar-con {
    /*margin-top: 0px;*/
    z-index: 0;
    display: none;
    /*margin-top: 1px;*/
    padding: 10px;
    width: 100%;
    min-height: 114px;
    border-top: 1px solid #e2e2e2;
    background: #fff;
    order: 99;
    height: 315px;
    position: relative;
    top: -6px;
  }

  .tpt-bar input[type=radio] {
    position: absolute;
    opacity: 0;
  }

  .tpt-bar input[type=radio]:checked + label {
    z-index: 1;
    margin-right: -1px;
    margin-left: -1px;
    border-right: 1px solid #e2e2e2;
    border-left: 1px solid #e2e2e2;
    background: #fff;
  }

  .tpt-bar input[type=radio]:checked + label + .tpt-bar-con {
    display: block;
  }

  .main .login1 ul li {
    list-style: none;
    width: 100%;
    height: 40px;
    /*background: #dbff54;*/
    position: relative;
  }

  .img1, .img2 {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  .input1, .input2 {
    position: absolute;
    width: 290px;
    height: 33px;
    left: 40px;
    top: 1px;
    /*去掉input边框*/
    border: none;
    /*去掉点击时input的边框*/
    outline: none;
  }

  .li-1, .li-2 {
    border: 1px solid rgb(233, 235, 238);
    box-sizing: border-box;
  }

  .input1:focus {
    border: 2px solid #eeb81a;
  }

  .input2:focus {
    border: 2px solid #eeb81a;
  }

  .input3 {
    position: absolute;
    top: 12px;
  }

  .li-3 {
    position: relative;
  }

  .label1 {
    position: absolute;
    top: 1px;
    left: -20px;
    font-size: 13px;
  }

  .a1 {
    position: absolute;
    font-size: 13px;
    top: 10px;
    left: 270px;
    /*去超链接下划线*/
    text-decoration: none;
    color: #2a36ff;
  }

  .a1:hover {
    text-decoration: underline;
  }

  .input4 {
    width: 100%;
    height: 50px;
    background: #fabe00;
    color: #fff;
    font-size: 18px;
  }

  .login2 {
    width: 100%;
    height: 50px;
    margin-top: 20px;
  }

  .login3 {
    width: 100%;
    height: 50px;
    margin-top: 20px;
    position: relative;
    border: 1px solid rgb(233, 235, 238);
  }

  .sp {
    position: absolute;
    top: 13px;
    left: 80px;
  }

  .a2 {
    position: absolute;
    top: 13px;
    left: 180px;
    text-decoration: none;
    color: #2a36ff;
  }

  .input5 {
    position: absolute;
    width: 128px;
    height: 33px;
    left: 40px;
    top: 1px;
    /*去掉input边框*/
    border: none;
    /*去掉点击时input的边框*/
    outline: none;
  }

  .main .login1 .li-4 {
    width: 170px;
    height: 40px;
    /*background: #dbff54;*/
    position: relative;
    border: 1px solid rgb(233, 235, 238);
    box-sizing: border-box;
  }

  .input5:focus {
    border: 2px solid #eeb81a;
  }

  .message {
    width: 100px;
    height: 40px;
    background: #fffaea;
    margin-left: 200px;
    border: 1px solid #ffde74;
    font-size: 12px;
    color: #fabe00

  }

  .a3 {
    font-size: 12px;
    color: #fabe00;
    line-height: 40px;
    padding-left: 30px;
    box-sizing: border-box;
    text-decoration: none;
  }

  .ul2 {
    width: 100%;
    height: 100px;
    background: rgba(255, 255, 255, 0.94);
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content: center;
  }

  .main_footer .ul2 > li {
    width: 300px;
    height: 100px;
    border-left: 1px solid #e9ebee;
    list-style: none;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .li-8 {
    border-right: 1px solid #e9ebee;
  }

  .main_footer .ul2 li > div {
    width: 42px;
    height: 34px;
    position: absolute;
    top: 20px;
  }

  .li-5-1 {
    background: url("../assets/images/icon_new.png") no-repeat;
    background-position-x: -200px;
  }

  .li-6-1 {
    background: url("../assets/images/icon_new.png") no-repeat;
    background-position-x: -250px;
  }

  .li-7-1 {
    background: url("../assets/images/icon_new.png") no-repeat;
    background-position-x: -310px;
  }

  .li-8-1 {
    background: url("../assets/images/icon_new.png") no-repeat;
    background-position-x: -375px;
  }

  .main_footer .ul2 li > p {
    position: relative;
    top: 60px;
    font-size: 16px;
    color: #71767a;
  }

  /*-------------------------------------------*/
  .footer_introduce {
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .footer_introduce .footer_introduce_content {
    width: 1200px;
    height: 110px;
    display: flex;
  }

  .footer_introduce_content > div {
    flex: 1;
    height: 110px;
    box-sizing: border-box;
  }

  .introduce_header {
    font-size: 16px;
    color: #60606c;
  }

  .footer_introduce_content p a {
    font-size: 12px;
    color: #93939e;
    text-decoration: none;
  }

  .footer_introduce_content p a:hover {
    text-decoration: underline;
  }

  /*----------------------------------------------------*/
  .footer {
    width: 100%;
    /*height: 185px;*/
    /*background: #dbff54;*/
    display: flex;
    justify-content: center;
  }

  .footer_1 {
    width: 1200px;
    height: 52px;
    border-top: 1px solid #e9ebee;
    border-bottom: 1px solid #e9ebee;
    display: flex;
  }

  .footer_2 {
    width: 600px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    line-height: 52px;
  }

  .footer_2 > a {
    font-size: 12px;
    color: #93939e;
    text-decoration: none;
  }

  .footer_2 > a:hover {
    text-decoration: underline;
  }

  .footer_3 {
    width: 50px;
    height: 100%;
    line-height: 52px;

    margin-left: 570px;
  }

  .footer_3:hover {
    text-decoration: underline;
  }

  #aa {
    font-size: 12px;
    color: #93939e;
    text-decoration: none;
  }

  .footer_4 {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .footer_5 {
    width: 1200px;
    height: 20px;
    display: flex;
  }

  #p1 {
    font-size: 12px;
    color: #93939e;
  }

  #p2 {
    font-size: 12px;
    color: #93939e;
    margin-left: 30px;
  }

  #p2 a {
    color: #eeb819;
    font-size: 10px;
    text-decoration: none;
  }

  .footer_6 {
    width: 1200px;
    height: 50px;

    margin: auto;
    display: flex;
  }

  .footer_6 .div1 {
    width: 89px;
    height: 32px;
    background: url("../assets/images/icon_new.png");
    background-position-y: -153px;
  }

  .footer_6 .div2 {
    width: 89px;
    height: 32px;
    background: url("../assets/images/icon_new.png");
    background-position-y: -192px;
    margin-left: 10px;
  }

  .eee {
    font-size: 12px;
    color: red;
    display: none;
    position: relative;
    left: 40px;
  }

  .fff {
    position: absolute;
    left: 230px;
    line-height: 38px;
    color: red;
    font-size: 12px;
  }

  .fff2 {
    position: absolute;
    left: 230px;
    line-height: 38px;
    color: red;
    font-size: 12px;
  }

  .fff4 {
    position: absolute;
    left: 230px;
    line-height: 38px;
    color: red;
    font-size: 12px;
  }
</style>
