<template>
  <div class="container">
    <div class="main">
      <div class="main_background">
        <div class="main_content">
          <div class="content1">
            <ul>
              <li> <h1>注册新用户</h1></li>
              <br/>
              <li>
                <img class="img1" src="../assets/images/用户.svg" alt="">
                <input class="input2" type="text" placeholder="请输入您的真实姓名" v-model="userInfo.name" v-on:blur="a">
                <span class="fff" v-text="tiShi.tishi1"></span>
              </li>
              <br/>
              <li class="li-2"><img class="img2" src="../assets/images/邮箱.svg" alt="">
                <input class="input2" type="text" placeholder="请输入您的邮箱" v-model="userInfo.email" v-on:blur="e">
                <span class="fff" v-text="tiShi.tishi5"></span>
              </li>
              <br/>
              <li class="li-2"><img class="img2" src="../assets/images/手机.svg" alt="">
                <input class="input2" type="text" placeholder="请输入您的手机号" v-model="userInfo.telephone" v-on:blur="b">
                <span class="fff" v-text="tiShi.tishi2"></span>
              </li>
              <br/>
              <div class="c_tip" v-show="Tips==1">
                <span>◆</span>
                <span class="ts-warning"></span>
                <span>验证码过期或已失效</span>
                <span class="ts-close" @click="Tips=0"></span>
              </div>
              <li class="li-2">
                <img class="img2" src="../assets/images/信封.svg" alt="">
                <input class="input5" type="text" placeholder="请输入动态码" v-model="code">
                <input class="message" type="button" value="点击发送验证码" v-on:click="sendCode($event.target)"/>
                <!--<p class="message"><a href="#" class="a3">获取验证码</a></p>-->
              </li>
              <br/>
              <li class="li-2"><img class="img2" src="../assets/images/密码.svg" alt="">
                <input class="input2" type="password" placeholder="请输入密码" v-model="userInfo.password" v-on:blur="c">
                <span class="fff" v-text="tiShi.tishi3"></span>
              </li>
              <br/>
              <li class="li-2"><img class="img2" src="../assets/images/密码.svg" alt="">
                <input class="input2" type="password" placeholder="请再次确认密码" v-model="userInfo.password1" v-on:blur="d">
                <span class="fff" v-text="tiShi.tishi4"></span>
              </li>
              <br/>
              <li class="li-3">
                <input class="input3"  type="checkbox" id="cb">
                <label class="label1" for="cb" >我已阅读并同意</label>
                <a href="#" class="a1">《神州租车会员服务条款》</a>
              </li>
              <div class="login2"><input type="submit" class="input4" value="注册" @click="reg"></div>
            </ul>
          </div>
          <div class="content2">
            <p><span class="sp">已有账号？</span><router-link to="/login" class="a2">立即登陆</router-link></p>
            <div><img src="../assets/images/tipsregist.png" alt=""></div>
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
        <p id="p1">Copyright©2008-2018 www.zuche.com All Rights Reserved.　北京神州汽车租赁有限公司 京ICP备10005002号 京公网安备号 11010502026705</p>
        <p id="p2">如果您对神州租车网站有任何意见，欢迎发送邮件到<a href="#">517291777@qq.com</a></p>
      </div>
    </div>
    <div class="footer_6">
      <div class="div1"></div>
      <div class="div2"></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Regist',
    data () {
      return {
        nums: 120,
        Tips:0,
        code:'',
        tiShi:{
          tishi1:'',
          tishi2:'',
          tishi3:'',
          tishi4:'',
          tishi5:'',

        },
        userInfo:{
          name:'',
          telephone:'',
          password:'',
          password1:'',
          email:'',
        },
      }
    },
    methods:{
      reg:function () {
        axios.post('http://127.0.0.1:8000/user/verification/',
          {
            "telephone":this.userInfo.telephone,
            "code":this.code,
          },
        )
          .then(response => {
            if (response.data.code === 0) {
              sessionStorage.setItem("url","regist");
              // alert(this.userInfo.name);
              // alert(this.userInfo.telephone);
              // alert(this.userInfo.password);
              // alert(this.userInfo.email);
              var vm = this;
              axios.post("http://127.0.0.1:8000/user/regist/",
                {"uname":vm.userInfo.name,"telephone":vm.userInfo.telephone,
                  "password":vm.userInfo.password,"email":vm.userInfo.email
                },{
                  // headers: {
                  //   'Content-Type': 'application/json',
                  // }
                })
                .then(function (res) {
                  if(res.data.code==='808'){
                    sessionStorage.setItem('telephone',vm.userInfo.telephone)
                    this.$router.push('Login');
                  }
                }.bind(this))
                .catch(function (err) {
                  if (err.response) {
                    console.log(err.response)
                  }
                }.bind(this))

            }else {
              this.Tips = 1;
              console.log(response.data)
            }
          });

      },
      sendCode:function (thisBtn) {
        this.btn = thisBtn;
        console.log(this.btn);
        this.btn.disabled = true; //将按钮置为不可点击
        this.btn.value = this.nums + '秒后可重新获取';
        this.clock = setInterval(this.doLoop, 1000); //一秒执行一次
        axios.post('http://127.0.0.1:8000/user/sendcode/',
          {
            "telephone":this.userInfo.telephone,
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
      // 真实姓名
      a(){
        this.tiShi.tishi1= '';
        var p=/^(([a-zA-Z+\.?\·?a-zA-Z+]{2,30}$)|([\u4e00-\u9fa5+\·?\u4e00-\u9fa5+]{2,30}$))/;
        if (!this.userInfo.name) {
          this.tiShi.tishi1='姓名不能为空';
        }
        else if(!p.test(this.userInfo.name)){
          this.tiShi.tishi1="姓名格式错误"
        }
      },
      b(){
        this.tiShi.tishi2= '';
        var p=/^1[34578]\d{9}$/;
        if (!this.userInfo.telephone) {
          this.tiShi.tishi2='用户名不能为空';
        }
        else if(!p.test(this.userInfo.telephone)){
          this.tiShi.tishi2="请输入11位手机号"
        }
      },
      c(){
        this.tiShi.tishi3= '';
        var p=/[a-zA-Z]\w[z0-9]/;
        if (!this.userInfo.password) {
          this.tiShi.tishi3='密码不能为空';
        }
        else if(!p.test(this.userInfo.password)){
          this.tiShi.tishi3="由字母开头+数字"
        }
      },
      d(){
        if (this.userInfo.password !== this.userInfo.password1){
          this.tiShi.tishi4='两次密码不一致';
        }
      },
      e:function () {
        this.tiShi.tishi5= '';
        var p=/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
        if (!this.userInfo.email) {
          this.tiShi.tishi5='邮箱不能为空';
        }
        else if(!p.test(this.userInfo.email)){
          this.tiShi.tishi5="邮箱格式不正确"
        }
      },
      f:function () {
        var username=this.userInfo.user;
        var email=this.userInfo.email;
        var telephone=this.userInfo.telephone;
        var password=this.userInfo.password;
        var data={
          "uname":username,
          "email":email,
          "telephone":telephone,
          "password":password,
        };
        axios.post('http://127.0.0.1:8000/user/regist/',data)
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body,ul,li,p,h1,h2{
    margin: 0;/*外边距*/
    padding: 0;/*内边距*/
  }
  .container{
    width: 100%;
    /*background: grey;*/
  }
  .main{
    width: 100%;
    /*height: 900px;*/
    /*background: #dbff54;*/
  }
  .header .header_content{
    width: 1200px;
    height: 58px;
    /*background: #ff3d0c;*/
    /*父类相对定位*/
    position: relative;
    display: flex;

  }

  .main .main_background{
    width: 100%;
    height: 790px;
    /*no-repeat 不重复  top center向上居中*/
    background: #f2f3f5;
    display: flex;
    position:relative;
  }
  .main_background .main_content{
    width: 1200px;
    height: 560px;
    background: #f3f4f6;
    position: absolute;
    top: 65px;
    left: 155px;
    display: flex;
  }
  .main_content .content1{
    width: 685px;
    height: 100%;
    border-right:dashed 1px grey;
    box-sizing: border-box;
  }
  p{
    margin-left: 50px;
  }
  .main_content .content1 ul{
    width: 600px;

    margin-left: 50px;
    margin-top: 40px;
  }
  .main_content .content1 ul li{
    list-style: none;
    width: 400px;
    height: 40px;

    position: relative;
    border:1px solid rgb(233, 235, 238);
    box-sizing:border-box;
  }
  .main_content .content1 .input2{
    width: 361px;
    height: 35px;
    position: absolute;
    left: 35px;
    /*去掉input边框*/
    border: none;
    /*去掉点击时input的边框*/
    outline:none;
  }
  .input5{
    position: absolute;
    width: 128px;
    height: 35px;
    left: 40px;
    top: 1px;
    /*去掉input边框*/
    border: none;
    /*去掉点击时input的边框*/
    outline:none;
  }
  .main_content .content1 .input2:focus{
    border:2px solid #eeb81a;
  }
  .main_content .content1 img{
    position: absolute;
    top: 7px;
  }
  .input5:focus{
    border:2px solid #eeb81a;
  }
  .message{
    width: 140px;
    height: 36px;
    background: #fffaea;
    margin-left: 200px;
    border: 1px solid #ffde74;
    text-align: center;
    line-height: 36px;
    color: #eeb81a;
  }
  .message a{
    text-decoration: none;
    color: #eeb81a;
  }
  .li-3 a{
    text-decoration: none;
  }
  .input4{
    width:400px ;
    height: 50px;
    background: #fabe00;
    color:  #fff;
    font-size: 18px;
    border: none;
    border-radius: 5px;

  }
  .login2{
    width: 100%;
    height: 50px;
    margin-top: 20px;
  }
  .main_content .content2{
    width: 814px;
    height: 100%;
  }
  .content2 p .sp,.a2{
    font-size: 20px;
    text-decoration: none;
    position: relative;
    top: 47px;
    left: 50px;
  }
  .content2 div>img{
    position: relative;
    top: 100px;
    left: 102px;

  }
  /*------------------------------------------*/


  .ul2{
    width: 100%;
    height: 100px;
    background: rgba(255, 255, 255, 0.94);
    position: absolute;
    bottom: 0px;
    display: flex;
    justify-content: center;
  }
  .main_footer .ul2>li{
    width: 300px;
    height: 100px;
    border-left: 1px solid #e9ebee;
    list-style: none;
    display: flex;
    justify-content: center;
    position: relative;
  }
  .li-8{
    border-right:  1px solid #e9ebee;
  }
  .main_footer .ul2 li>div{
    width: 42px;
    height: 34px;
    position: absolute;
    top: 20px;
  }
  .li-5-1{
    background:url("../assets/images/icon_new.png") no-repeat;
    background-position-x:-200px;
  }
  .li-6-1{
    background:url("../assets/images/icon_new.png") no-repeat;
    background-position-x:-250px;
  }
  .li-7-1{
    background:url("../assets/images/icon_new.png") no-repeat;
    background-position-x:-310px;
  }
  .li-8-1{
    background:url("../assets/images/icon_new.png") no-repeat;
    background-position-x:-375px;
  }
  .main_footer .ul2 li>p{
    position: relative;
    top: 60px;
    font-size: 16px;
    color: #71767a;
  }

  /*-------------------------------------------*/
  .footer_introduce{
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .footer_introduce .footer_introduce_content{
    width: 1200px;
    height: 110px;
    display: flex;
  }
  .footer_introduce_content>div{
    flex: 1;
    height: 110px;
    box-sizing: border-box;
  }
  .introduce_header{
    font-size: 16px;
    color: #60606c;
  }
  .footer_introduce_content  p a {
    font-size: 12px;
    color: #93939e;
    text-decoration: none;
  }
  .footer_introduce_content  p a:hover{
    text-decoration: underline;
  }
  /*----------------------------------------------------*/
  .footer{
    width: 100%;
    /*height: 185px;*/
    /*background: #dbff54;*/
    display: flex;
    justify-content: center;
  }
  .footer_1{
    width: 1200px;
    height: 52px;
    border-top: 1px solid #e9ebee;
    border-bottom: 1px solid #e9ebee;
    display: flex;
  }
  .footer_2{
    width: 600px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    line-height: 52px;
  }
  .footer_2>a{
    font-size: 12px;
    color:  #93939e;
    text-decoration: none;
  }
  .footer_2>a:hover{
    text-decoration: underline;
  }
  .footer_3{
    width: 50px;
    height: 100%;
    line-height: 52px;

    margin-left:570px;
  }
  .footer_3:hover{
    text-decoration: underline;
  }
  #aa{
    font-size: 12px;
    color:  #93939e;
    text-decoration: none;
  }
  .footer_4{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .footer_5{
    width: 1200px;
    height: 20px;
    display: flex;
  }
  #p1{
    font-size: 12px;
    color: #93939e;
  }
  #p2{
    font-size: 12px;
    color: #93939e;
    margin-left: 30px;
  }
  #p2 a{
    color:#eeb819;
    font-size: 10px;
    text-decoration: none;
  }
  .footer_6{
    width: 1200px;
    height: 50px;

    margin: auto;
    display: flex;
  }
  .footer_6 .div1{
    width: 89px;
    height: 32px;
    background: url("../assets/images/icon_new.png");
    background-position-y:-153px ;
  }.footer_6 .div2{
     width: 89px;
     height: 32px;
     background: url("../assets/images/icon_new.png");
     background-position-y:-192px;
     margin-left: 10px;
   }
  .fff {
    position: absolute;
    left: 290px;
    line-height: 38px;
    color: red;
    font-size: 12px;
  }
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
    top:240px;
    left:10px;
    text-align: center;
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
  .c_tip span:nth-child(3){

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
