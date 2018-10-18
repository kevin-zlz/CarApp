<template>
  <div class="info">
    <ul>
      <li class="items">
        <h3 class="aa">驾照认证</h3>
        <span class="aa3">您的驾照认证未完成，在线认证驾照，可自助取、还车！</span>
      </li>
      <li class="items">
        <span class="aa1">驾照正页图片</span>
        <from>
          <input type="button" value="选择文件" class="aa2">
        </from>
        <span class="aa4">请上传小于2M的JPG格式图片</span>
      </li>
      <li class="items">
        <span class="aa1">驾照副页图片</span>
        <from>
          <input type="button" value="选择文件" class="aa2">
        </from>
        <span class="aa4">请上传小于2M的JPG格式图片</span>
      </li>
      <li class="items">

      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'Dic',
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
    height:940px;
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
 .aa{
   position: relative;
   top: 5px;
   /*color: red;*/
 }
  .items .aa3{
    position: relative;
    top: 10px;
    left: 350px;
    font-size: 16px;
    color: red;
  }
  .items .aa1{
    position: relative;
    top: 0px;
    left: 10px;
    height: 70px;
    line-height: 70px;
    /*background: #22A7F0;*/
  }
  .aa2{
    margin-left: 150px;
    /*margin: auto;*/
    box-sizing:border-box;
    /*元素纵向剧中*/
    vertical-align: middle;
    width: 80px;
    height: 40px;
    line-height: 40px;
    background: rgba(238, 184, 26, 0.2);
    border: solid 1px #eeb81a;
    color: #eeb81a;
  }
  .aa4{
    position: relative;
    height: 70px;
    line-height: 70px;
    left: 330px;
    color: #c6c6ce;
    font-size: 14px;
  }
</style>
