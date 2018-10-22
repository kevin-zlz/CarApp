<template>
  <div class="container">
    <div class="main">
      <div class="main_content">
        <div class="main_content3">
          <div class="main_content1">
            <h3>选择标签:</h3>
             <div class="aa1" v-if="msg2.length>0" v-text="msg2"></div>
          </div>
          <div class="label-car">
            <ul style="display: flex" class="bbb">
              <li v-for="type in types" v-on:click="a" v-text="type.typename">新能源</li>

            </ul>
          </div>
          <div class="main_content2">
            <h3>发表说说</h3>
            <!--绑定watch 监听-->
            <textarea name="" id="" cols="30" rows="10" class="aaa" contenteditable="true" v-model="msg"  style="resize:none;outline: none" ></textarea>
          </div>
          <p class="qqq2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{aa}}/500字</p>
          <button class="button" @click="sendAritcal()">发布</button>
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
  </div>
</template>

<script>
  import axios from 'axios'
export default {
  name: 'Questions',
  data () {
    return {
      msg:'',
      aa:0,
      msg2:'',
      msg3:'',
      types:[]
    }
  },
  watch:{
    msg:function(newval,oldval){
      this.aa=newval.length
      },
  },
  methods:{
    a(e){
      if(this.msg2.length>0){
        if(this.msg2==e.target.innerText)
          this.msg2='';
        else{
          this.msg2=e.target.innerText;
        }

      }else{
        this.msg2=e.target.innerText;
      }
      // console.log(this.msg2)
    },
    sendAritcal:function () {
      let vm=this
      axios.post("http://127.0.0.1:8000/boke/addAritical/",
        {
          "content":vm.msg,
          "ariticaltype":vm.msg2,
        },{
          headers: {
            'token': sessionStorage.getItem('token'),
          }
        })
        .then(function (res) {
          if(res.data){

            vm.$router.push({path: '/answer'});
          }
        }.bind(this))
        .catch(function (err) {
          if (err.response) {
            console.log(err.response)
          }
        }.bind(this))
    }
    },
  mounted:function () {
    let vm=this
    axios.post("http://127.0.0.1:8000/boke/queryArticlaType/",
      {
      },{
      })
      .then(function (res) {
        if(res.data){
          vm.types=res.data
          console.log(vm.types)
        }
      }.bind(this))
      .catch(function (err) {
        if (err.response) {
          console.log(err.response)
        }
      }.bind(this))
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
  .button{
    outline: none;
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

  /* 下拉按钮样式 */

  /* 容器 <div> - 需要定位下拉内容 */

  /* 下拉内容 (默认隐藏) */

  /* 下拉菜单的链接 */
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;

  }

  /* 鼠标移上去后修改下拉菜单链接颜色 */
  /*.dropdown-content a:hover {background-color: #f1f1f1}*/

  /*在鼠标移上去后显示下拉菜单*/
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .main{
    width: 100%;
    /*height: 800px;*/
    /*background: #a6a6a6;*/
    /*内边距*/
    padding-top: 30px;
  }
  .main_content{
    width: 1200px;
    height: 580px;
    /*background: #00de00;*/
    margin: auto;
    /*padding-top: 20px;*/
  }

  .main_content1{
    width: 850px;
    height: 65px;
    /*display: block;*/
    /*background: #0000CC;*/
    display: flex;
    margin: auto;
    margin-top: 30px;
  }
  .main_content2{
    width: 850px;
    height: 150px;
    /*display: block;*/
    /*background: #0000CC;*/
    display: flex;
    margin: auto;
    margin-top: 30px;
  }
  .aaa{
    margin-top: 8px;
    width: 700px;
    height: 130px;
    background: white;
    margin-left: 29px;
    border: solid 1px #bfbfbf;
  }
  .qqq2{
    margin-left: 280px;
  }
  .input3{
    margin-left: 29px;
    padding-left: 12px;
    height: 40px;
    margin-top: 12px;
    width: 700px;
    border: solid 1px #bfbfbf;
    box-sizing: border-box;
  }


  .chance{
    width: 100%;
    height: 60px;

  }
  .chance ul{
    margin-left: 150px;
    position: relative;
    left: 20px;
    width: 850px;
    /*height: 100px;*/
    top: 10px;
    list-style-type: none;
    display: flex!important;
    /*background-color: red;*/
    /*justify-content: space-around;*/
    /*flex-wrap: wrap;*/
  }
  .chance ul li{
    width: 100px;
    height: 44px;
    background-color: white;
    /*margin-top: 10px;*/
    margin-right: 20px;
    border: solid 1px #cccccc;
    box-sizing: border-box;
    color: #666666;
    float: left;
    text-align: center;
    line-height: 44px;
    font-size: 15px;
    cursor: pointer;
    /*flex: 1;*/
  }
  .label-car{
    width: 100%;
    height: 200px;

  }
  .label-car ul{
    margin-left: 280px;
    position: relative;
    left: 20px;
    width: 850px;
    height: 100px;
    top: 10px;
    list-style-type: none;
    display: flex!important;
    /*background-color: red;*/
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .label-car ul li{
    width: 100px;
    height: 44px;
    /*background-color: white;*/
    /*margin-top: 10px;*/
    background: rgba(238, 184, 25, 0.2);
    margin-right: 5px;
    border: solid 1px #cccccc;
    box-sizing: border-box;
    color: #eeb819;
    float: left;
    text-align: center;
    line-height: 44px;
    font-size: 15px;
    cursor: pointer;
    margin-top: 5px;
    /*flex: 1;*/
  }


  /*-------------------------------------------------------*/
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
  .aa1{
    position: relative;
    top: 20px;
    left: 23px;
    width: 80px;
    height: 30px;
    border: solid 1px #eeb819;
    text-align: center;
    line-height: 30px;
    color: red;
    background: rgba(255, 0, 0, 0.15);
  }
  .bbb:after{
    content: '';
    flex: auto;
  }
  .button{
    margin-left: 300px;
    margin-top: 10px;
    box-sizing: border-box;
    width: 80px;
    height: 45px;
    background: #eeb819;
    color: wheat;
    font-size: 18px;
    /*font-weight:400;*/
  }
</style>
