<template>
    <div class="container">
      <div class="head-item">
        <div class="head-info">
          <div class="head-logo">我的长安</div>
          <div class="head-icon">
            <div><img :src="ImgUrl" alt=""></div>
            <div class="uname">
              <p>王**</p>
              <p id="example" data-container="body" data-toggle="popover" data-animation="true" data-placement="bottom" data-content="积分兑优惠券">个性签名：<span>我就是我，不一样的烟火</span></p>
            </div>
          </div>
          <div class="head-score">
            <p style="padding-bottom: 15px"><span>100</span></p>
            <p >我的评论</p>
          </div>
          <div class="head-coupon head-score">
            <p style="padding-bottom: 15px"><span>199</span></p>
            <p>我的发表</p>
          </div>
          <div class="head-money head-score">
            <p style="padding-bottom: 15px"><span>500</span></p>
            <p>我的点赞</p>
          </div>
        </div>
      </div>
      <div class="main-contain">
        <div class="body-left">
          <div class="nav">
            <div class="nav-title">我的订单</div>
            <div id="short-drive" class="nav-content" @click="show">短期自驾</div>
            <div id="long-drive" class="nav-content" @click="show">长期租车</div>
          </div>
          <div class="nav">
            <div class="nav-title">我的账户</div>
            <div id="info_detail" class="nav-content" @click="show">我的信息</div>
            <div id="login-psw"  class="nav-content" @click="show">修改密码</div>
            <div class="nav-content" @click="show">驾照认证</div>
            <div class="nav-content" @click="show">修改图像</div>
          </div>
          <div class="nav">
            <div class="nav-title">我的相关</div>
            <div id="score" class="nav-content" @click="show">我的文章</div>
            <div id="coupon" class="nav-content" @click="show">我的活动</div>
          </div>
        </div>
        <div class="body-right">
          <UpDataPwd v-show="'修改密码'===flag"></UpDataPwd>
          <LongHire v-show="'长期租车'===flag"></LongHire>
          <Order v-show="'短期自驾'===flag"></Order>
          <Information v-show="'我的信息'===flag"></Information>
          <Dic v-show="'驾照认证'===flag"></Dic>
          <UpHead @getIcon="getUserIcon" v-show="'修改图像'===flag"></UpHead>
          <Article v-show="'我的文章'===flag"></Article>
        </div>
      </div>
      <RevertBottom></RevertBottom>
    </div>
</template>


<script>
  import axios from 'axios';
    export default {
        name: "User",
        data(){
          return{
            index:0,
            flag:'短期自驾',
            ImgUrl:'Defaultheadimage.png',
          }

        },
        methods:{
          show:function (event) {
            if(event.target.innerHTML==='修改密码'){
              this.flag = '修改密码';
            }
            if(event.target.innerHTML==='长期租车'){
              this.flag = '长期租车';
            }
            if(event.target.innerHTML==='短期自驾'){
              // alert(event.target.innerHTML);
              this.flag = '短期自驾';
            }
            if(event.target.innerHTML==='我的信息'){
              // alert(event.target.innerHTML);
              this.flag = '我的信息';
            }
            if(event.target.innerHTML==='驾照认证'){
              // alert(event.target.innerHTML);
              this.flag = '驾照认证';
            }
            if(event.target.innerHTML==='修改图像'){
              // alert(event.target.innerHTML);
              this.flag = '修改图像';
            }
            if(event.target.innerHTML==='我的文章'){
              // alert(event.target.innerHTML);
              this.flag = '我的文章';
            }
          },
          getUserIcon:function (e) {
            console.log(e)
            this.ImgUrl=e
          },
          getherd:function () {

            let vm = this;
            console.log(sessionStorage.getItem("token"));
            // post方式必须带参数
            axios.post('http://127.0.0.1:8000/user/gethead/',
              {},
              {
                headers: {
                  'token':sessionStorage.getItem("token"),
                }
              })
              .then(response => {
                if (response.data.code === 0) {
                  vm.ImgUrl = 'http://127.0.0.1:8000/media/pic/' + response.data.url;
                  console.log(vm.ImgUrl);
                }
                console.log(response.data)
              });

          }
        },
      mounted:function () {
        this.getherd()
      }

    }
</script>

<style scoped>
  .container{
    width: 100%;
    /*background-color: rgba(0, 0, 0, 0.08);*/
    background-color: #f2f3f5;
    padding: 0;
    margin: auto;
  }
  .head-item{
    width: 100%;
    height: 100px;
    background-color: white ;
  }
  .head-info{
    margin: auto;
    width: 1244px;
    height: 100px;
    display: flex;
    /*border: red solid 1px;*/
    align-items: center;
    box-sizing: border-box;
  }
  .head-info div{
    width: 200px;
    height: 100px;
    /*border-left: red solid 1px;*/
  }
  .head-info .head-logo{
    /*margin-left: 80px;*/
    width:183px;
    height: 50px;
    text-align: center;
    font-size: 2.2em;
    font-weight: bold;
    color: #ff8845;
    line-height: 50px;
    border-right: #d6d8db solid 1px;
    box-sizing: border-box;
  }
  .head-info .head-icon{
    width: 400px;
    display: flex;
    border-right: #d6d8db solid 1px;
  }
  .head-icon div:nth-child(1){
    width: 100px;
    text-align: center;
    margin-top: 20px;
    box-sizing: border-box;
  }
  .head-icon img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    /*background-color: darkgray;*/
    border: 1px #ffbb00 solid;
  }

  .head-icon div:nth-child(2){
    width: 300px;
    color: #93939e;
  }
  .head-icon div:nth-child(2) p:nth-child(2){
    font-size: 14px;
  }
  .head-score{
    width: 200px;
    left: 564px;
    text-align: center;
    border-right: #d6d8db solid 1px;
  }
  .head-score p{
    height: 10px;
    line-height: 10px;
    font-size: 14px;
    color: #60606c;
  }
  .head-score p:first-child{
    margin-top: 30px;
    box-sizing: border-box;
  }
  .head-score p span{
    font-size: 20px;
    color: #ffbb00;
  }
  .uname{
    position: relative;
    top: 23px;
  }
  .main-contain{
    position: relative;
    width: auto;
    height: auto;
    /*height: 803px;*/
    /*background-color: rgba(0, 0, 0, 0.1);*/
    margin: 0 140px;
    display: flex;
  }

  .main-contain .body-left{
    height: 640px;
    background-color: white;
    margin-top: 20px;
    width: 24%;
    border: #d4d5d8 solid 1px;
    margin-bottom: 30px;
  }
  .body-left .nav{
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 60px;
  }
  .body-left .nav .nav-title{
    padding-left: 15px;
    line-height: 45px;
    border-bottom: #d4d5d8 solid 1px;
    border-top: #d4d5d8 solid 1px;
    box-sizing: border-box;
    height: 45px;
    color: #60606c;
  }
  .body-left .nav .nav-content{
    padding-left: 15px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #a9a9b9;
  }
  .body-left .nav .nav-content:hover{
    cursor: pointer;
    background-color: #fff8e8;
    color: #fabe00;
  }
  .body-right{
    width: 75%;
    height: auto;
    margin-top: 20px;
    left: 25%;
    margin-left: 30px;
    /*background-color: rgba(0, 0, 255, 0.4);*/
  }
</style>
