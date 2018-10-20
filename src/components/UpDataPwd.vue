<template>
  <div class="info">
    <ul>
      <li class="items">修改密码</li>
      <li class="items">
        <div class="label-info">原密码</div>
        <div class="inputs"><input type="password" placeholder="请输入原来密码"  v-model="userInfo.password1" v-on:blur="a"></div>
        <div class="tip">核对身份后，才可修改密码</div>
        <span class="tiShi" v-text="tiShi.tishi1"></span>
      </li>
      <!--<li><span class="tiShi">{{ msg }}</span><br></li>-->
      <li class="items passW">
        <div class="label-info" style="background-color: white">新密码</div>
        <div class="inputs"><input type="password" id="new_pwd" placeholder="字母开头+数字" v-model="userInfo.password2" v-on:blur="b"></div>
        <span class="tiShi" v-text="tiShi.tishi2"></span>
        <div class="password">
          <span class="psw" v-show="flag!==1" :id="flag">弱</span>
          <span class="psw ccc" v-show="flag==1">弱</span>
          <span class="psw" v-show="flag!==2">中</span>
          <span class="psw ccc2" v-show="flag==2">中</span>
          <span class="psw" v-show="flag!==3">强</span>
          <span class="psw ccc3" v-show="flag==3">强</span>
        </div>
        <div id="new_tip" class="tip">请牢记新密码</div>
      </li>
      <li class="items">
        <div class="label-info">确认密码</div>
        <div class="inputs"><input id="comfirm-psw" v-on:change='' type="password"  placeholder="再次输入密码" v-model="userInfo.password3" v-on:blur="c"></div>
        <div id="comfirm-tip" class="tip">再次输入新密码</div>
        <span class="tiShi" v-text="tiShi.tishi3"></span>
      </li>
      <li class="items item-save">
        <div class="label-info"></div>
        <div class="inputs"><div class="save">保存</div></div>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      btn:false,
      flag:0,
      tiShi:{
        tishi1:'',
        tishi2:'',
        tishi3:'',
      },
      userInfo:{
        password1:'',
        password2:'',
        password3:'',
      },
    }
  },

  methods:{
    //密码
    a(){
      this.tiShi.tishi1= '';
      var p=/[a-zA-Z]\w[z0-9]/;
      if (!this.userInfo.password1) {
        this.tiShi.tishi1='密码不能为空';
      }
      else if(!p.test(this.userInfo.password1)){
        this.tiShi.tishi1="字母开头+数字组成"
      }
    },
    b(){
      this.tiShi.tishi2= '';
      var p=/[a-zA-Z]\w[z0-9]/;
      this.flag=0;
      // console.log(this.userInfo.password1)
      // console.log(this.userInfo.password2)
      if (this.userInfo.password1 == this.userInfo.password2){
        this.tiShi.tishi2='与原密码一致';
      }
      else if(!this.userInfo.password2) {
        this.tiShi.tishi2='密码不能为空';
      }
      else if(!p.test(this.userInfo.password2)){
        this.tiShi.tishi2="字母开头+数字组成"
      }
      if (this.userInfo.password2.length>0&&this.userInfo.password2.length<6){
        this.flag=1;
      }
      else if (this.userInfo.password2.length>=6&&this.userInfo.password2.length<10){
        this.flag=2;
      }
      //注意比较大小写法
      else if (this.userInfo.password2.length>=10&&this.userInfo.password2.length<15){
        this.flag=3;
      }
    },
    c(){
      this.tiShi.tishi3= '';
      var p=/[a-zA-Z]\w[z0-9]/;
      // console.log(this.userInfo.password1)
      // console.log(this.userInfo.password2)
      if (this.userInfo.password2 !== this.userInfo.password3){
        this.tiShi.tishi3='两次密码不一致';
      }
      else if(!this.userInfo.password3) {
        this.tiShi.tishi3='密码不能为空';
      }
      else if(!p.test(this.userInfo.password3)){
        this.tiShi.tishi3="字母开头+数字组成"
      }
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul,li,span{
    margin: 0;
    padding: 0;
  }
  input{
    outline: none;
  }
  ul{
    list-style: none;
  }
  ul li.items,li.item,li.long-item{
    border-bottom:#e9ebee solid 1px;
  }
  .info{
    width: 924px;
    height:auto;
    border: #e9ebee solid 1px;
    padding: 0px 20px ;
    background-color: white;
  }
  ul li.items:nth-child(1){
    height: 100px;
    width: 100%;
    font-size: 1.5em;
    line-height: 100px;
  }
  ul li.items{
    display: flex;
    height: 70px;
    width: 100%;
    font-size: 1em;
    line-height: 70px;
  }
  ul li.item{
    padding-top: 13px;
    display: flex;
    height: 70px;
    width: 100%;
    font-size: 1em;
    box-sizing: border-box;
  }
  ul li div.label-info{
    background-color: white !important;
    width: 210px;
    font-size: 16px;
    color: #717171;
  }
  ul li.item div.label-info{

    margin-top: 10px;
    width: 210px;
    font-size: 16px;
    color: #717171;
    box-sizing: border-box;
  }
  ul li div.inputs{
    width: 340px;
  }
  li div.inputs input{
    width: 320px;
    height: 38px;
    font-size: 15px;
    color: #a3a3a3;
  }
  ul li div.tip{
    color: #a3a3a3;
    font-size: 13px;
    text-align: right;
    width: 340px;
  }
  ul li.item div.tip{
    margin-top: 10px;
    color: red;
    font-size: 13px;
    text-align: right;
    width: 340px;
    box-sizing: border-box;
    display: none;
  }
  li.items{
    position: relative;
  }
  li.items div.tel-tip{
    position: absolute;
    font-size: 13px;
    color: red;
    left: 600px;
    display: none;
  }
  li.items div.tip a{
    text-decoration: none;
    color: rgba(0, 0, 255, 0.57);
    font-size: 13px;
  }

  ul li.city{
    border-bottom: none;
  }
  li.city .inputs{
    width: 350px;
    align-items: center;
    display: flex;
  }
  li.city .inputs select{
    color: #a3a3a3;
    height: 40px;
    width: 155px;
    margin-right: 25px;
    box-sizing: border-box;
  }
  ul li.long-item{
    display: flex;
    height: 70px;
    width: 100%;
    font-size: 1em;
    line-height: 70px;
  }
  ul li.long-item .inputs input{
    width: 380px;
  }
  ul li.item-save{
    width: 100%;
    height: 120px;
    align-items: center;
  }
  li.long-item{
    position: relative;
  }
  li.long-item div.tel-tip{
    position: absolute;
    font-size: 13px;
    color: red;
    left: 700px;
    display: none;
  }
  ul li.item-save .inputs .save{
    width: 150px;
    height: 42px;
    background-color: #f3b900;
    line-height: 42px;
    text-align: center;
    color: white;
  }
  li.item-save .inputs .save:hover{
    cursor: pointer;
  }
  ul li.passW div.password{
    display:flex;
    align-items: center;

  }
  ul li.passW div.password span{
    display: inline-block;
    text-align: center;
    line-height: 21px;
    border:#f3b900 solid 1px;
    border-left: none;
    padding: 0;
    width: 57px;
    height: 21px;
    color: #a1a1a1;
    background-color: ghostwhite;
  }
  ul li.passW div.password span:first-child{
    border-left:#f3b900 solid 1px;
  }
  ul li.passW div.tip{
    width: 150px;
  }
  div.label-info{
    background-color: white !important;
  }
  .tiShi{
    position: absolute;
    left: 421px;
    color: red;
    font-size: 12px;
  }
  .ccc{
    /*color: green!important;*/
    background: rgba(243, 185, 0, 0.51) !important;
  }
  .ccc2{
    /*color: yellow!important;*/
    background: rgba(243, 185, 0, 0.51) !important;
  }
  .ccc3{
    /*color: red!important;*/
    background: rgba(243, 185, 0, 0.51) !important;
  }
</style>
