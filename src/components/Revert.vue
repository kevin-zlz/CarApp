<template>
  <div class="container">
    <div class="top">
      <RevertTop></RevertTop>
    </div>
    <div class="main">
      <div class="left">
        <RevertLeft id="lefter" ></RevertLeft>
      </div>
      <div class="right">
        <RevertRight></RevertRight>
      </div>
    </div>
    <div class="bottom">
      <RevertBottom></RevertBottom>
    </div>
  </div>
</template>

<script>
  import RevertTop from '../components/RevertTop'
  import RevertLeft from '../components/RevertLeft'
  import RevertRight from '../components/RevertRight'
  import RevertBottom from '../components/RevertBottom'
    export default {
        name: "Revert",
        data:function(){

        },
        methods:{
          handleScroll () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop>195 && scrollTop<1005){
              $("#lefter").css({'marginTop':scrollTop-210+'px'})
            }
          },
        },
      mounted:function () {
        window.addEventListener('scroll', this.handleScroll)
      }
    }
</script>

<style scoped>
  body, ul, li,html {
    padding: 0;
    margin: 0;
  }
  .container {
    height: auto;
    width: 90%;
    background-color: #f2f2f2;
  }
  .main{
    display: flex;
  }
  .top{
    width: 100%;
    height: 145px;
    background-color: white;
    margin-top: 5px;
  }
  .left{
    margin-top: 10px;
    width: 25%;
    height: auto;
    /*background-color: white;*/
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .right{
    margin-top: 10px;
    width: 75%;
    height: auto;
    background-color: white;
  }
  .bottom{
    width: 100%;
    height: auto;
    background-color: white;
    margin-top: 10px;
  }
</style>
