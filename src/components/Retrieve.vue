<template>
  <div>
    <div class="zc-inbox">
      <ul class="zc-findbox">
        <li :class="{'passed':isPassed0}">
          <span class="e-place"></span>
          <span class="zc-blcir">1</span>
          <p class="find-proce">填写用户名</p>
        </li>
        <li :class="{'passed':isPassed1}">
          <span class="e-place"></span>
          <span class="zc-blcir">2</span>
          <p class="find-proce">验证身份</p>
        </li>
        <li :class="{'passed':isPassed2}">
          <span class="e-place"></span>
          <span class="zc-blcir">3</span>
          <p class="find-proce">设置新密码</p>
        </li>
        <li :class="{'passed':isPassed3}">
          <span class="e-place"></span>
          <span class="zc-blcir">4<i class="zc-oryes"></i></span>

          <p class="find-proce">完成</p>
        </li>
      </ul>
      <div class="zc-findpro">
        <div class="zc-findpro1" v-show="flag==0">
          <div class="c_tip" v-show="Tips==1">
            <span>◆</span>
            <span class="ts-warning"></span>
            <span v-text="tiShi.tishi1"></span>
            <span class="ts-close" @click="Tips=0"></span>
          </div>
          <input class="zc-ipt t_val img1" type="text" id="userinput" v-model="telephone" placeholder="请输入手机号密码"  v-on:blur="f" maxlength="33" style="border: 1px solid rgb(233, 235, 238); color: rgb(147, 147, 158);">
          <p><a class="zc-btn btn-findpsw" id="findbackBt" @click="a">找回</a></p>
        </div>
        <div class="zc-findpro2" v-show="flag==1">
          <p id="phoneConfirm">请确认您的手机号为：<span id="user-tel" v-text="telephone"></span><router-link to="/retrieve" class="aaa">修改</router-link></p>
          <p id="sendSuccess" style="display:none;">我们已经向您的手机发送了验证码，请注意查收！(如果2分钟后仍未收到短信，请重新发送)</p>
          <div class="c_tip2" v-show="flag1==5">
            <span>◆</span>
            <span class="ts-warning"></span>
            <span>验证码过期或已失效</span>
            <span class="ts-close" @click="flag1=0"></span>
          </div>
          <p>
            <input id="mobileVrf" class="zc-ipt t_val img2" type="text" placeholder="请输入动态验证码"  maxlength="6" v-model="code">
            <input class="message" type="button" value="点击发送验证码" v-on:click="sendCode($event.target)"/>
            <!--<span class=" btn-getdtm">获取手机动态码</span>-->
          </p>
          <a class="zc-btn btn-findsubmit" id="phoneSbmBt" @click="b">提交</a>
        </div>
        <!--<div class="zc-findpro3" >-->
          <!--<ul class="zc-findipt">-->
            <!--<li class="find-text">-->
              <!--<p>找回密码的邮件已发送至<span id="user-email"></span>，请注意查收！(请收取邮件并按邮件提示重新设置密码。)</p>-->
            <!--</li>-->
          <!--</ul>-->
          <!--<a class="zc-btn btn-fcheckemail" id="emailVryBt">马上验证</a>-->
          <!--<a class="zc-btn btn-fsendagain" id="sendEmailAgain">再次发送</a>-->
        <!--</div>-->
        <div class="zc-findpro4"  v-show="flag==2">
          <div class="zc-safepsw" id="pwdLevel" >
            <span class="safe_1" v-show="flag2!==1" :id="flag2">弱</span>
            <span class="safe_1 ccc" v-show="flag2==1">弱</span>
            <span class="safe_2" v-show="flag2!==2">中</span>
            <span class="safe_2 ccc2" v-show="flag2==2">中</span>
            <span class="safe_3" v-show="flag2!==3">强</span>
            <span class="safe_3 ccc3" v-show="flag2==3">强</span>
          </div>
          <div class="c_tip3" v-show="Tips==2">
            <span>◆</span>
            <span class="ts-warning"></span>
            <span v-text="tiShi.tishi2"></span>
            <span class="ts-close" @click="Tips=0"></span>
          </div>
          <p><input class="zc-ipt ipt-passwordS img3" type="text" id="pswd1S" placeholder="请输入新密码" v-model="userInfo.password2" v-on:blur="d"></p>
          <div class="c_tip4" v-show="Tips==3">
            <span>◆</span>
            <span class="ts-warning"></span>
            <span v-text="tiShi.tishi3"></span>
            <span class="ts-close" @click="Tips=0"></span>
          </div>
          <p><input class="zc-ipt ipt-passwordS img4" type="text" id="pswd2S" placeholder="再次输入密码" v-model="userInfo.password3" v-on:blur="e"></p>
          <a class="zc-btn btn-findsave" id="saveNewpwdBt" @click="c">保存</a>
        </div>
        <div class="zc-findresult" v-show="flag==3">
          <p class="rok-lcongra"><span class="zc-gryes"></span>恭喜您，密码重置成功！请牢记您新设置的密码。</p>
          <div class="zc-findsuebtn">
            <a class="zc-btn btn-fzuche" href="https://order.zuche.com">马上租车</a>
            <a class="zc-btn btn-findex" href="https://www.zuche.com">返回首页</a>
          </div>
        </div>
        <p class="zc-findn-tel">如果上述方法无法找回，请致电<span class="tel">400 616 6666</span>电话找回。</p>
      </div>
    </div>
    <div class="footer">
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
import axios from 'axios'
export default {
  name: 'Retrieve',
  data () {
    return {
      nums: 120,
      btn: '',
      clock: '',
      flag:0,
      flag1:0,
      flag2:0,
      Tips:0,
      isPassed0:true,
      isPassed1:false,
      isPassed2:false,
      isPassed3:false,
      telephone:"",
      code:"",
      userInfo:{
        password1:'',
        password2:'',
        password3:'',
      },
      tiShi:{
        tishi1:'',
        tishi2:'',
        tishi3:'11111',
      },
    }
  },
  methods:{
    sendCode:function (thisBtn) {
      //--------------------倒计时---------------------------
      this.btn = thisBtn;
      console.log(this.btn);
      this.btn.disabled = true; //将按钮置为不可点击
      this.btn.value = this.nums + '秒后可重新获取';
      this.clock = setInterval(this.doLoop, 1000); //一秒执行一次
    //  --------------------------------------------------
      axios.post('http://127.0.0.1:8000/user/sendcode/',
        {
          "telephone":this.telephone,
        },
        )
        .then(response => {
          // if (response.data.code === 0) {
          //   vm.ImgUrl = 'http://127.0.0.1:8000/media/pic/'+response.data.url;
          //   console.log(vm.ImgUrl);
          // }
          console.log(response.data)
        });
    },
    doLoop:function () {
      this.nums--;
      if (this.nums > 0) {
        this.btn.value = this.nums + '秒后可重新获取';
      } else {
        clearInterval(this.clock); //清除js定时器
        this.btn.disabled = false;
        this.btn.value = '点击发送验证码';
        this.nums = 120; //重置时间
      }
    },
    f(){
      this.Tips=0;
      this.tiShi.tishi1= '';
      var p=/^1[34578]\d{9}$/;
      if (!this.telephone) {
        this.Tips=1;
        this.tiShi.tishi1='用户名不能为空';
        console.log( this.tiShi.tishi1)
      }
      else if(!p.test(this.telephone)){
        this.Tips=1;
        this.tiShi.tishi1="请输入11位手机号"
      }
    },

    a:function(){
      this.flag=1;
      this.isPassed1=true
    },
    b:function () {
      // this.flag=2;
      // this.isPassed2=true
      axios.post('http://127.0.0.1:8000/user/verification/',
        {
          "telephone":this.telephone,
          "code":this.code,
        },
      )
        .then(response => {
          if (response.data.code === 0) {
            this.flag=2;
            this.isPassed2=true

          }else {
            this.flag1 = 5;
            console.log(response.data)
          }
        });

    },
    c:function () {
      axios.post('http://127.0.0.1:8000/user/updatapwd/',
        {
          "telephone":this.telephone,
          "password3":this.userInfo.password3,
        },
      )
        .then(response => {
          if (response.data.code === 0) {
            this.flag=3;
            this.isPassed3=true
          }
          console.log(response.data)
        });

    },
    d(){
      this.Tips=0;
      this.tiShi.tishi2= '';
      var p=/[a-zA-Z]\w[z0-9]/;
      // this.flag=0;
      // console.log(this.userInfo.password1)
      // console.log(this.userInfo.password2)
      if (!this.userInfo.password2){
        this.Tips=2;
        this.tiShi.tishi2='密码不能为空';
      }
      else if(!p.test(this.userInfo.password2)){
        this.Tips=2;
        this.tiShi.tishi2="字母开头+数字组成"
      }
      if (this.userInfo.password2.length>0&&this.userInfo.password2.length<6){
        this.flag2=1;
      }
      else if (this.userInfo.password2.length>=6&&this.userInfo.password2.length<10){
        this.flag2=2;
      }
      //注意比较大小写法
      else if (this.userInfo.password2.length>=10&&this.userInfo.password2.length<15){
        this.flag2=3;
      }
    },
    e(){
      this.Tips=0;
      this.tiShi.tishi3= '';
      var p=/[a-zA-Z]\w[z0-9]/;
      // console.log(this.userInfo.password1)
      // console.log(this.userInfo.password2)
      if (this.userInfo.password2 !== this.userInfo.password3){
        this.Tips=3;
        this.tiShi.tishi3='两次密码不一致';
      }
      else if(!this.userInfo.password3) {
        this.Tips=3;
        this.tiShi.tishi3='密码不能为空';
      }
      else if(!p.test(this.userInfo.password3)){
        this.Tips=3;
        this.tiShi.tishi3="字母开头+数字组成"
      }
    },
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

  /*-----------------------------------------------*/

  .tpt-bar label {
    width: 42%;
    display:block;
    padding:0 20px;
    height:38px;
    text-align: center;
    line-height:38px;
    cursor:pointer;
    order:1;
  }
  .tpt-bar .tpt-bar-con {
    margin-top: 0px;
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

  /*--------------------longtime---------------------------*/


  .longtime div{

    display: inline-block;
  }

  .longtime .apply a{
    text-decoration: none;
  }

  /*-----------------------------------------------*/

  /*-------------------------------advantage---------------*/

  .main-foot .advantage div:nth-child(4){
    border-right: #e9ebee solid 1px;
    background-image: url("../assets/images/mile.svg");
  }
  .advantage .adv span{
    display: inline-block;
    margin-top: 70px;
    color: #b9bbbd;
    /*border: red solid 1px;*/
  }
  .main-foot .advantage div:nth-child(1){
    background-image: url("../assets/images/car.svg");
  }
  .main-foot .advantage div:nth-child(2){
    background-image: url("../assets/images/locate.svg");
  }
  .main-foot .advantage div:nth-child(3){
    background-image: url("../assets/images/baoxian.svg");
  }



  /*--------------------hot-car---------*/

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

  .show-car .car p{
    margin-top: 0;
    /*border: red solid 1px;*/
    height: 10px;
    line-height: 10px;
  }

  /*------------------------------main-adv---------*/




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
    background: url("../assets/images/icon11.png") ;
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
  .zc-inbox{
    width: 1198px;
    height: 558px;
    margin: 40px auto;
    background-color: #fff;
    border: 1px solid #eceef0;
  }
  ul.zc-findbox{
    width: 620px;
    height: 200px;
    margin: 0 auto;
    list-style: none;
    display: flex;
    align-items: center;

  }
  ul.zc-findbox li{
    position: relative;
    flex:1;
    text-align: center;
  }
  ul.zc-findbox li span.e-place{
    position: absolute;
    left: 0px;
    top: 12px;
    width: 154px;
    height: 0px;
    border:  #cacaca solid 1px;
  }
  ul.zc-findbox li span.zc-blcir{
    text-align: center;
    line-height: 25px;
    position: absolute;
    left: 65px;
    z-index:30;
    display: inline-block;
    width: 25px;
    height: 25px;
    background-color: #cacaca;
    border-radius:25px;
    color:white;
  }
  ul.zc-findbox li .find-proce{
    margin-top: 35px;
    font-size: 14px;
    color: #b4b4b4;
  }
  .zc-findpro{
    text-align: center;
  }
  .zc-findpro .bhide{
    display: none;
  }
  .zc-findpro>div{
    margin: 0 auto;
    text-align: center;
    width: 800px;
    height: 200px;
  }
  input.zc-ipt{
    width: 320px;
    height: 40px;
    padding-left: 40px;
    box-sizing: border-box;
    color: #9e9e9e;
    font-size: 14px;
    /*background-image: url("../assets/images/用户.svg");*/
    background-repeat:no-repeat;
    background-position-y:5px;
    background-position-x:10px ;

  }
  input.img1{
    background-image: url("../assets/images/手机.svg");
  }
  input.img2{
    background-image: url("../assets/images/手机.svg");
  }
  input.img3{
    background-image: url("../assets/images/密码.svg");
  }
  input.img4{
    background-image: url("../assets/images/密码.svg");
  }
  .zc-findpro .zc-btn{
    margin-top: 5px;
    display: inline-block;
    line-height: 50px;
    width: 320px;
    height: 50px;
    text-decoration: none;
    color: white;
    background-color: #fabe00;
    text-align: center;
    border-radius: 5px;
  }
  .zc-findpro .zc-btn:hover{
    cursor: pointer;
  }
  .zc-findn-tel{
    margin: 0 auto;
    color: #aeaeae;
    font-size: 14px;
  }

  .zc-findpro2 p{
    line-height: 40px;
    margin-bottom: 10px;
    color: #aeaeae;
    font-size: 14px;
  }
  .zc-findpro2 p a{
    text-decoration: none;
    color: #1596ff;
  }
  .btn-getdtm{
    display: inline-block;
    line-height: 40px;
    width: 120px;
    height: 40px;
    color: white;
    font-size: 14px;
    background-color: #fabe00;
    text-align: center;
    border-radius: 5px;
  }
  .btn-getdtm:hover{
    cursor: pointer;
  }
  .zc-findpro4{
    position: relative;
  }
  .zc-findpro4 .zc-safepsw{
    position: absolute;
    left: 600px;
    top: 10px;
  }
  .zc-findpro4 .zc-safepsw span{
    margin-right: -5px;
    display: inline-block;
    width: 55px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    background-color: #dce4eb;
    color: #888888;
  }
  .zc-findresult .rok-lcongra{
    color: #aeaeae;
    font-size: 14px;
  }
  .zc-findbox .passed span.zc-blcir{
    background-color: #5ab0ff;
  }
  .zc-findbox .passed .e-place{
    border-color:#5ab0ff;
  }
  .message{
    width: 120px;
    height: 40px;
    background: #fabe00;
    /*margin-left: 200px;*/
    border: 1px solid #ffde74;
    font-size: 12px;
    color: white;
  }
  .tiShi{
    position: absolute;
    /*top: px;*/
    color: red;
    font-size: 12px;
    box-sizing: border-box;
  }
  .ccc{
    /*color: green!important;*/
    background: #fabe00 !important;
    color: white!important;
  }
  .ccc2{
    /*color: yellow!important;*/
    background: #fabe00!important;
    color: white!important;
  }
  .ccc3{
    /*color: red!important;*/
    background: #fabe00 !important;
    color: white!important;
  }
  /*-------------------------------------------------------------------*/
  .c_tip{
    position: absolute;
    /*top: -45px;*/
    /*left: 30px;*/
    width: 300px;
    height: 38px;
    line-height: 38px;
    border: 1px solid #dadadf;
    border-radius: 5px;
    padding-left: 10px;
    background-color: #fff;
    z-index: 999;
    box-shadow: 0 0 15px #B7B7B7;
    top:250px;
    left:610px;
  }
  .c_tip2{
    position: absolute;
    /*top: -45px;*/
    /*left: 30px;*/
    width: 300px;
    height: 38px;
    line-height: 38px;
    border: 1px solid #dadadf;
    border-radius: 5px;
    padding-left: 10px;
    background-color: #fff;
    z-index: 999;
    box-shadow: 0 0 15px #B7B7B7;
    top:308px;
    left:543px;
  }
  .c_tip2 span:first-child{
    width: 18px;
    position: absolute;
    left: 50%;
    margin-top: 19px;
    /*height: 25px;*/
    color: white;
    /*line-height: 38px;*/
    font-size: 20px;
    margin-left: -24px;

  }
  .c_tip3{
    position: absolute;
    /*top: -45px;*/
    /*left: 30px;*/
    width: 300px;
    height: 38px;
    line-height: 38px;
    border: 1px solid #dadadf;
    border-radius: 5px;
    padding-left: 10px;
    background-color: #fff;
    z-index: 999;
    box-shadow: 0 0 15px #B7B7B7;
    top: -41px;
    left:240px;
  }
  .c_tip3 span:first-child{
    width: 18px;
    position: absolute;
    left: 50%;
    margin-top: 19px;
    /*height: 25px;*/
    color: white;
    /*line-height: 38px;*/
    font-size: 20px;
    margin-left: -24px;

  }
  .c_tip4{
    position: absolute;
    /*top: -45px;*/
    /*left: 30px;*/
    width: 300px;
    height: 38px;
    line-height: 38px;
    border: 1px solid #dadadf;
    border-radius: 5px;
    padding-left: 10px;
    background-color: #fff;
    z-index: 999;
    box-shadow: 0 0 15px #B7B7B7;
    top: 6px;
    left:240px;
  }
  .c_tip4 span:first-child{
    width: 18px;
    position: absolute;
    left: 50%;
    margin-top: 19px;
    /*height: 25px;*/
    color: white;
    /*line-height: 38px;*/
    font-size: 20px;
    margin-left: -24px;

  }
  .c_tip span:first-child{
    width: 18px;
    position: absolute;
    left: 50%;
    margin-top: 19px;
    /*height: 25px;*/
    color: white;
    /*line-height: 38px;*/
    font-size: 20px;
    margin-left: -24px;

  }
  /*移❗*/
  .ts-warning{
    display: inline-block;
    background: url(https://image.zuchecdn.com/newversion/news/common/icon.png) no-repeat;
    width: 17px;
    height: 17px;
    background-position: -440px 0;
    vertical-align: middle;
    line-height: 38px;
    position: absolute;
    left: 10px;
    top:10px

  }
  /*移×*/
  .ts-close{
    display: inline-block;
    background: url(https://image.zuchecdn.com/newversion/news/common/icon.png) no-repeat;
    position: absolute;
    top: 14px;
    right: 10px;
    cursor: pointer;
    width: 12px;
    height: 12px;
    background-position: -480px 0;
  }
/*-------------------------------------------------------------------------------------*/

</style>
