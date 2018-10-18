<template>
  <div class="header">
    <div class="header_content">
      <ul>
        <li><a href="https://www.zuche.com/"><img src="../assets/images/1111111.png" alt=""></a></li>
        <li>
          <router-link to="/" class="aaa">首页</router-link>
        </li>
        <li>
          <router-link to="/dot" class="aaa">门店</router-link>
        </li>
        <li>
          <router-link to="/revert" class="aaa">短期自驾</router-link>
        </li>
        <li>
          <router-link to="/drive" class="aaa">自驾游</router-link>
        </li>
        <li>
          <router-link to="/long" class="aaa">长租</router-link>
        </li>
        <li class="aaa1">
          <router-link to="/answer" class="aaa">论坛</router-link>
        </li>
        <li>
          <router-link to="/login" class="aaa">登陆</router-link>
          <span>/</span>
          <router-link to="/regist" class="aaa">注册</router-link>
        </li>
        <li><router-link to="/user" class="aaa">我的永安</router-link></li>
        <li><img class="bbb" src="../assets/images/电话.svg" alt=""><span class="bbb2">48888888</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavMain',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  body, ul, li, p, h1, h2 {
    margin: 0; /*外边距*/
    padding: 0; /*内边距*/
  }
  .header {
    width: 100%;
    height: 60px;
    border-top: solid 2px #eeb81a;
    background: #1b2b3b;
    display: flex;
    justify-content: center;
  }
  .header .header_content {
    width: 1200px;
    height: 58px;
    /*background: #ff3d0c;*/
    /*父类相对定位*/
    position: relative;
  }
  .header_content ul{
    list-style: none;
    display: flex;

  }
  .header_content ul li{
    flex: 1;
    font-size: 14px;
    color: wheat;
    line-height: 60px;
  }
  .header_content ul .aaa1{
    flex: 2;
  }
  .bbb{
    position: absolute;
    top: 15px;
  }
.bbb2{
  position: relative;
  left: 30px;
  color: gray;
  font-size: 16px;
}
  .aaa{
    font-size: 14px;
    color: wheat;
    /*去掉下滑线*/
    text-decoration:none;

  }
</style>
