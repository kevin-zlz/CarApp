<template>
  <div>
    <div class="head">
      <div class="head-content">
        <City class="aaa" @mycity = 'mycity'></City>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Calenlar class="aaa" @getdate="getstarttime1"></Calenlar>&nbsp;&nbsp;&nbsp;
        <div class="arrow">➤</div>&nbsp;&nbsp;&nbsp;
        <Calenlar class="aaa" @getdate="getstarttime2"></Calenlar>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button @click="sousuo">搜素</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button>重置</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <!--<div class="aa1" style="cursor: pointer"  @click.stop = 'guanzhu'><img src="../assets/images/fav_icon_weibo.png" alt="" ><span>+关注</span></div>&nbsp;&nbsp;&nbsp;&nbsp;-->
        <!--<div class="aa1" style="cursor: pointer" @click.stop = 'saoyisao'><img src="../assets/images/fav_icon_weixin.png" alt=""><span>扫一扫</span></div>&nbsp;&nbsp;&nbsp;&nbsp;-->
        <!--<div class="aa1" style="cursor: pointer" @click.stop = 'youxiang'><img src="../assets/images/fav_icon_email.png" alt=""><span>邮件订阅</span></div>-->
      </div>
    </div>
    <div class="main">
      <div class="main-content">
        <ul>
          <li class="bb1" v-for="(aci,index) in allactivity">
            <div class="bb">
              <ul>
                <li><h3 style="color: #eeb81a" v-text="aci.travelstartplace"></h3></li>
                <li>
                  <span v-text="aci.destribe"></span>
                </li>
                <li>
                  <p>目标人数：<span v-text="aci.menbers"></span>人</p>
                  <p>已参人数：5人</p>
                  <p>日期：<span v-text="aci.pubtime.split('T')[0]"></span></p>
                  <p>联系人：<span v-text="aci.linkname"></span></p>
                  <p style="color: red">联系电话：<span v-text="aci.linknumber"></span></p>
                </li>
                <li>
                  <input class="input" type="button" value="立即加入" @click="yanzheng">
                  <span>全国</span>
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
    <!--<div style="display: none;position: relative"><img src="" alt=""></div>-->
    <RevertBottom></RevertBottom>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Activity",
    methods: {
      getstarttime1:function (e) {
        this.date1 = e;
        console.log("wq1",this.date1)
      },
      getstarttime2:function (e) {
        this.date2 = e;
        console.log("wq2",this.date2)
      },
      mycity:function (e) {
        this.city = e;
        // alert(e);
        // alert("city"+this.city)
      },
      yanzheng:function(e){
        if(sessionStorage.getItem('token')){
          alert("已经有token")
        }else{
          this.$router.push('/Login')
        }
      },
      sousuo:function () {
        let vm=this;
        axios.post("",
          {"city":this.city,"starttime":this.date1,"endtime":this.date2
          },{
            // headers: {
            //   'Content-Type': 'application/json',
            // }
          })
          .then(function (res) {
            this.allactivity = res.data;
            console.log(this.allactivity)
            console.log(res.data)
          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              console.log(err.response)
              //控制台打印错误返回的内容
            }
            //bind(this)可以不用
          }.bind(this))
      }
    },
    data() {
      return {
        date1:'',
        date2:'',
        city:'',
        allactivity:[]
      }
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
    /*position: absolute;*/
  }
  .aaa{
    margin: auto 0;
  }
  .arrow{
    height: 80px;
    line-height: 80px;
  }

  .main{
    width: 100%;
    height: auto;
    background: rgba(211, 211, 211, 0.34);
    padding-bottom: 60px;

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
    width: 80%;
    height: 320px;
    background: white;
    list-style: none;
    display: flex;
    position: relative;
    top: 30px;
    margin: auto;
    margin-bottom: 20px;

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
