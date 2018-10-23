<template>
  <div class="container" >
    <div class="car_info">
      <div class="ifl">
        <img src="https://fimg.zuchecdn.com/upload/web/modepic/848.jpg">
        <div class="lin">
          <p class="lp1">雪佛兰新科鲁兹</p>
          <p class="lp2">三厢/1.5自动 | 乘坐5人</p>
          <div class="base_btn">
            <a href="#" class="look-config" @click="showDetail">查看配置信息</a>
            <a href="#" class="look-change">修改订单</a>
          </div>
        </div>
      </div>
      <ul class="ifr">
        <li class="bdr">
          <p class="line1">
            <i class="ifr-qc"></i>
            <span>取车</span>
          </p>
          <p class="line2">
            <i class="ifr-time"></i>
            <span>2018-10-23 10:00</span>
          </p>
          <p class="line3">
            <i class="ifr-local"></i>
            <span>苏州 莫邪路店</span>
          </p>
        </li>
        <li>
          <p class="line1">
            <i class="ifr-hc"></i>
            <span>还车</span>
          </p>
          <p class="line2">
            <i class="ifr-time"></i>
            <span>2018-10-25 10:00</span>
          </p>
          <p class="line3">
            <i class="ifr-local"></i>
            <span>苏州&nbsp;莫邪路店</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="main_body">
      <div class="info_msg">
        <p >下单成功后，提醒信息会发送至手机
          <i id="mmid">131***1774</i>
          <a href="#" id="bt" >[修改]</a>
        </p>
      </div>
      <div class="member_info">
        <h3>租车人信息<span class="ifred">请认真填写一下信息，取车时需要现场核对！</span></h3>
        <ul class="infor">
          <li>
            <label><i>*</i>姓&emsp;&emsp;名</label>
            <input name="xname" id="xname" type="text" placeholder="请输入您的姓名"  value="" maxlength="50" @blur.prevent="verifyName" @click="closeName">
            <div class="verify" v-show="flagName">
              <span>◆</span>
              <span class="ts-warning"></span>
              <span>请输入真实姓名！</span>
              <span class="ts-close" @click="closeName"></span>
            </div>
          </li>
          <li>
            <label><i>*</i>证件类型</label>
            <input name="xcardtype" id="xcardtype" type="text"   value="身份证" maxlength="50" style="color: #2F2F39" readonly>

          </li>
          <li>
            <label><i>*</i>证件号码</label>
            <input name="xcardnumber" id="xcardnumber" type="text" placeholder="请输入证件号码"  value="" maxlength="50" @blur.prevent="verifyNumber" @click="closeNumber">
            <div class="verify" v-show="flagNumber">
              <span>◆</span>
              <span class="ts-warning"></span>
              <span>您输入的证件号码有误，请认真核实！</span>
              <span class="ts-close" @click="closeNumber"></span>
            </div>

          </li>
          <li>
            <label><i>*</i>邮&emsp;&emsp;箱</label>
            <input name="xemail" id="xemail" type="text"  placeholder="请输入邮箱"   maxlength="50" @blur.prevent="verifyEmail" @click="closeEmail">
            <div class="verify" v-show="flagEmail">
              <span>◆</span>
              <span class="ts-warning"></span>
              <span> 您输入的邮箱地址有误，请认真核实！</span>
              <span class="ts-close" @click="closeEmail"></span>
            </div>

          </li>
        </ul>
      </div>
      <div class="paper_tip">
        <p>取车时,出示以下证件的原件：本人二代身份证、本人国内有效驾驶证正副本、本人一张信用及可用额度均不低于3000元的国内有效信用卡，所有证件有效期须至少超过当次租期的两个月以上。</p>
      </div>
      <div class="submit_order">
        <div class="paydetail">
          <span class="ddzj">订单总价</span>
          <span class="ddall"><i>¥</i><i class="total_price">278</i></span>
        </div>
        <a href="#" class="order_btn">提交订单</a>
      </div>
    </div>
    <div class="bg" v-show="flagBg" ></div>
    <div class="car_detail" v-show="flagBg">
      <div class="de_title">
		<span>
		    大众斯柯达明锐配置信息
        </span>
        <i class="de_close" @click="showDetail"></i>
      </div>
      <div class="de_list">
        <ul>
          <li>
            <b class="zws">&nbsp;</b>座 位 数：
            <span>
						5
				</span>
          </li>
          <li>
            <b class="cms">&nbsp;</b>车 门 数：
            <span>
						4
				</span>
          </li>
          <li>
            <b class="rllx">&nbsp;</b>燃料类型：
            <span>
						汽油
				</span>
          </li>
          <li>
            <b class="bsxlx">&nbsp;</b>变速箱类型：
            <span>
						AT
				</span>
          </li>
          <li>
            <b class="pl">&nbsp;</b>排　　量：
            <span>1598</span>
          </li>
          <li>
            <b class="rybh">&nbsp;</b>燃油标号：
            <span>
						92-93汽油
				</span>
          </li>
          <li>
            <b class="qdfs">&nbsp;</b>驱动方式：
            <span>
						前驱
				</span>
          </li>
          <li>
            <b class="fdjjqxs">&nbsp;</b>发动机进气形式：
            <span>
						自然吸气
				</span>
          </li>
          <li>
            <b class="tc">&nbsp;</b>天　　窗：
            <span>
						无
				</span>
          </li>
          <li>
            <b class="yxrl">&nbsp;</b>油箱容量：
            <span>
						55
				</span>
          </li>
          <li>
            <b class="yx">&nbsp;</b>音　　箱：
            <span>
						5
				</span>
          </li>
          <li>
            <b class="zy">&nbsp;</b>座　　椅：
            <span>
						织物座椅
				</span>
          </li>
          <li>
            <b class="dcld">&nbsp;</b>倒车雷达：
            <span>
						无
				</span>
          </li>
          <li>
            <b class="qin">&nbsp;</b>气　　囊：
            <span>
						2
				</span>
          </li>
          <li class="nonebd">
            <b class="dvd">&nbsp;</b>DVD / CD：
            <span>
						CD
				</span>
          </li>
          <li class="nonebd">
            <b class="gps">&nbsp;</b>GPS导航：
            <span>
						无
				</span>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>



<script>
  import '../../static/jquery/jquery-1.8.3.min'
export default {
  name: 'ConfirmOrder',

  data () {
    return {
      flagName: false,
      flagNumber: false,
      flagEmail: false,
      flagBg:false,

    }
  },

  methods:{
    showDetail:function(){
      this.flagBg=!this.flagBg;

    },
    closeName:function (e) {
      // this.$refs.xname.style.display='none'
      // e.currentTarget.parentElement.style.display='none'
      this.flagName=false
    },
    closeNumber:function (e) {
      this.flagNumber=false
    },
    closeEmail:function (e) {
      this.flagEmail=false
    },
    verifyName:function (e) {
      // console.log(e.target.value);
      e.target.style.color='#2F2F39';
      var reg1 = /^[\u4e00-\u9fa5]+$/;
      if (reg1.test(e.target.value)){
        this.flagName=false;
      }
      else {
        // e.currentTarget.nextElementSibling.style.display='block'
        this.flagName=true
      }
    },
    verifyNumber:function (e) {
      e.target.style.color='#2F2F39';
      var reg2 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
      if (reg2.test(e.target.value)){
        this.flagNumber=false;
      }
      else {
        this.flagNumber=true
      }

    },
    verifyEmail:function (e) {
      e.target.style.color='#2F2F39';
      var reg3 = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
      if(reg3.test(e.target.value)){
        this.flagEmail=false;
      }
      else {
        this.flagEmail=true;
      }
    }
    },




}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body,ul,li,a{
    padding: 0;
    margin: 0;
  }

  .container{
    background-color:  #F5F5F5;
  }

  .car_info{
    width: 1000px;
    height: 150px;
    margin: auto;
    margin-top: 100px ;
    background-color: #fff;
    overflow: hidden;
    display: block;
    color: #333;
  }
  .ifl{
    width: 479px;
    height: 150px;
    float: left;
    border-right: 1px solid #e4e6e9;
    overflow: hidden;
    position: absolute;
    /*background-color: #f43636;*/
  }

  .ifr{

    width: 520px;
    height: 108px;
    padding: 21px 0 21px 0;
    float: right;
    list-style: none;
    /*background-color: #bdbcf4;*/

  }
  .ifl img{
    width: 180px;
    height: 105px;
    position: absolute;
    top: 21px;
    left: 30px;
    vertical-align: middle;
  }
  .lin{
    margin-left: 240px;
  }
  .lp1{
    font-size: 18px;
    color: #60606c;
    font-weight: 700;
    line-height: 30px;
    margin-top: 24px;
  }
  .lp2{
    font-size: 12px;
    color: #93939e;
    line-height: 24px;
    margin-bottom: 18px;
  }
  .look-config{
    display: inline-block;
    width: 120px;
    height: 28px;
    text-align: center;
    line-height: 28px;
    font-size: 14px;
    color: #fff;
    background-color: #2b99ff;
    border-radius: 3px;
    float: left;
    text-decoration: none;
  }
  .look-config:hover{
    background-color: #298eeb;
  }
  .look-change{
    margin-left: 10px;
    display: inline-block;
    width: 78px;
    height: 26px;
    text-align: center;
    line-height: 26px;
    font-size: 14px;
    color: #93939e;
    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #dadadf;
    text-decoration: none;

  }
  .look-change:hover{
    background-color: #f2f3f5;

  }
  .bdr{
    border-right: 1px dashed #e4e6e9;
    height: 108px;
    float: left;
    width: 229px;
    padding-left: 20px;
    margin: 0;


  }

  .ifr li:last-child{
    height: 108px;
    float: left;
    width: 229px;
    padding-left: 20px;
    margin: 0;

  }
  .line1{
    margin: 5px 0 10px 0;
    line-height: 28px;
    font-size: 18px;
    color: #60606c;
    position: relative;
    padding: 0;
    display: block;
  }
  .ifr-qc{
    width: 16px;
    height: 16px;
    background-color: white;
    display: inline-block;
    background: url(https://image.zuchecdn.com/newversion/news/ordernew/order_sprite.png) no-repeat;
    background-position: -326px 0;

  }
  .ifr-time{
    position: absolute;
    top: 5px;
    left: 0;
    width: 14px;
    height: 14px;
    background: url(https://image.zuchecdn.com/newversion/news/ordernew/order_sprite.png) no-repeat;
    background-position: -380px 0;
    display: inline-block;
  }
  .ifr-hc{
    width: 16px;
    height: 16px;
    background-color: white;
    display: inline-block;
    background: url(https://image.zuchecdn.com/newversion/news/ordernew/order_sprite.png) no-repeat;
    background-position: -355px 0;
  }
  .ifr-local{
    position: absolute;
    top: 5px;
    left: 0;
    width: 14px;
    height: 14px;
    background: url(https://image.zuchecdn.com/newversion/news/ordernew/order_sprite.png) no-repeat;
    background-position: -380px -22px;
    display: inline-block;
  }

  .line2{
    line-height: 24px;
    font-size: 16px;
    color: #93939e;
    position: relative;
    display: block;
    margin: 0;

  }
  .ifr li p:first-child span{
    margin-left: 5px;
  }
  .ifr li p:nth-child(n+2) span{
    margin-left: 25px;
  }
  .line3{
    line-height: 24px;
    font-size: 16px;
    color: #93939e;
    position: relative;
    margin: 0;

  }
  .main_body{
    margin: auto;
    margin-top: 20px;

    position: relative;
    background-color: white;
    padding: 0 20px 60px;
    width: 960px;
  }
  .info_msg{
    padding-top: 20px;
  }
  .info_msg p{
    height: 36px;
    line-height: 36px;
    background-color: #f3fbfe;
    padding-left: 30px;
    color: #60606c;
    font-size: 14px;
    display: block;
  }
  #mmid{
    line-height: 36px;
    font-style: normal;
    color: #fabe00;
  }
  #bt{
    cursor: pointer;
    color: #6ab0ff;
    text-decoration: none;
  }
  #bt:hover{
    text-decoration:underline ;
  }
  .member_info h3{
    font-weight: 400;
    font-size: 18px;
    color: #2b99ff;
    line-height: 40px;
    margin: 0;
    padding-top: 20px;
    border-bottom: 2px solid #c8c8ce;
  }
  .ifred{
    font-size: 14px;
    color: #ff8650;
    display: inline-block;
    margin-left: 10px;
  }
  .infor{
    padding-left: 30px;
  }
  ul li{
    height: 30px;
    line-height: 30px;
    color: #60606c;
    font-size: 14px;
    margin-top: 15px;
    position: relative;
    list-style: none;
  }
  ul li label{
    display: inline-block;
    float: left;
    margin-right: 20px;
    line-height: 30px;
    color: #60606c;
    /*font-size: 14px;*/
  }
  ul li label i{
    color: #ff8650;
    display: inline-block;
    margin-right: 7px;
    font-style: normal;
  }
  ul li input{
    border: 1px solid rgb(228, 230, 233);
    color: rgb(200, 200, 206);
    font-size: 14px;
    border-radius: 0;
    float: left;
    display: inline-block;
    height: 28px;
    line-height: 28px;
    width: 228px;
    padding: 0 0 0 10px;
  }
  ul li input:focus{
    border: 1px solid rgb(250, 190, 0);
    color: rgb(47, 47, 57);
    outline: none;
  }
  .verify{
    display: block;
    position: absolute;
    width: 300px;
    height: 38px;
    line-height: 38px;
    border: 1px solid #dadadf;
    border-radius: 5px;
    padding-left: 10px;
    background-color: #fff;
    z-index: 999;
    top: -45px;
    left: 58px;
    box-shadow: 0 0 15px #B7B7B7;
  }
  .verify span:first-child{
    width: 18px;
    position: absolute;
    left: 50%;
    margin-top: 19px;
    /*height: 25px;*/
    color: white;
    /*line-height: 38px;*/
    font-size: 20px;
    margin-left: -9px;

  }
  .ts-warning{
    display: inline-block;
    background: url(https://image.zuchecdn.com/newversion/news/common/icon.png) no-repeat;
    width: 17px;
    height: 17px;
    background-position: -440px 0;
    vertical-align: middle;
    line-height: 38px;

  }
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
  .paper_tip{
    margin: 20px 0;
    padding: 12px 26px 12px 0;
    font-size: 14px;
    background: url(https://image.zuchecdn.com/newversion/news/ordernew/zc_papers_tip.gif) no-repeat 30px center #fdfce7;
    background-size: 50px auto;
  }
  .paper_tip p{
    display: inline-block;
    margin: 0;
    margin-left: 90px;
    padding: 0;
  }
  .submit_order{
    width: auto;
    margin-top: 50px;
    height: 60px;
    background-color: #f3fbff;
    padding-left: 30px;
    position: relative;
  }
  .paydetail{
    height: 60px;
    float: left;
    margin-right: 50px;
  }
  .ddzj{
    display: inline-block;
    font-size: 14px;
    color: #60606c;
    float: left;
    margin-right: 10px;
    margin-top: 25px;
  }
  .ddall{
    display: inline-block;
    font-size: 30px;
    color: #fabe00;
    float: left;
    margin-top: 10px;
  }
  .ddall i:first-child{
    font-size: 18px;
    font-style: normal;
  }
  .total_price{
    font-style: normal;
    font-size: 30px;
  }
  .order_btn{
    display: inline-block;
    width: 200px;
    border-right: 1px solid #fff;
    height: 60px;
    float: right;
    text-align: center;
    line-height: 60px;
    background-color: #2b99ff;
    color: #fff;
    font-size: 20px;
    text-decoration: none;
  }
  .order_btn:hover{
    background-color: #298eeb;
  }
  .car_detail{
    width: 600px;
    height: 380px;
    position: absolute;
    z-index: 1000;
    top: 50%;
    left: 50%;
    margin-top: -190px;
    margin-left: -300px;
    background-color: #fff;
  }
  .de_title{
    position: relative;
    height: 47px;
    line-height: 47px;
    background-color: #f3f4f6;
    font-size: 16px;
    color: #60606c;
    border-bottom: 1px solid #e9ebee;
  }
  .de_title span{
    padding-left: 15px;
  }
  .de_title i{
    cursor: pointer;
    display: inline-block;
    position: absolute;
    z-index: 1000;
    top: 7px;
    right: 7px;
    width: 34px;
    height: 34px;
    background: url(https://image.zuchecdn.com/newversion/common/close.png) no-repeat;
  }
  .de_list{
    height: 332px;
    overflow-y: auto;
  }
  .de_list  ul{
    width: 560px;
    margin: 0 auto;
    overflow: hidden;
    list-style: none;
  }
  .de_list  ul li{
    float: left;
    width: 280px;
    border-bottom: 1px dashed #e4e6e9;
    font-size: 14px;
    height: 39px;
    line-height: 39px;
    color: #93939e;
    margin: 0;
  }
  .de_list  ul li b{
    display: inline-block;
    width: 25px;
  }
  .de_list ul li span{
    font: 14px/1.5 Arial,"Microsoft yahei",Helvetica,Verdana,SimHei,sans-serif;
    color: #2f2f39;
  }
  .de_list ul li:nth-child(n+15){
    border-bottom: none;
  }
  .bg{
    background: #000;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 800;
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }
</style>
