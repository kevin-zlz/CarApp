<template>
  <div class="container">
    <div class="main">
      <div style="display: flex">

        <img src="../../static/images/ans.png" alt="">
        <div class="reply">
          我要提问
        </div>
      </div>

      <div class="big-answer">
        <div class="comment" v-for="(i,index) in [1,2,3,4,5,6]">
          <div class="comment-i">
            <div class="title">买新能源车要注意哪些事项呢？</div>
            <div class="sign" style="display: flex;position: relative">
              <img src="../../static/images/touxiang.jpg" alt="">
              <span class="span1">二师兄官网号</span>
              <span class="span2">2018-10-06 18:41:58</span>
            </div>
            <div class="content" style="display: flex;position: relative">
              <img src="../../static/images/car1.jpg" alt="">
              <div>
                <div>现如今，由于限牌还有油价上涨等因素的制约，越来越多的人选择使用新能源的交通工具，其中最被人们看好的，就是电动汽车。再者，随着电动汽车技术的突飞猛进，汽车的电动化也是一个未来大趋势。很多人出于无奈对燃油车可望而不可即，或者对电动车的追捧从而纷纷选择电动汽车，但是在购买电动车，尤其是纯电动车之前，这五件事必须要考虑清楚。
                </div>
                <router-link to="/det">查看原文</router-link>
              </div>
              <div style="display: flex;color: #999999;">
                <!--<img data-id="index" alt="" class="zan">-->
                <!--<span class="zan-count"></span>-->
                <!--<img data-id="" alt="" class="diszan">-->
                <span class="diszan-count"></span>
                <img src="" alt="">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Answer"
    }

</script>

<style scoped>
  body,html{
    margin: 0;
  }
  .container{
    width: 80%;
    height: auto;
    background-color: #f5f5f5;
  }

  .main{
    width: 80%;
    height: auto;
    margin: auto;
    /*background-color: rgba(255, 0, 0, 0.23);*/
  }

  .main div:first-child img{
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .main div:first-child .reply{
    width: 200px;
    height: 40px;
    background-color: #ff8300;
    position: relative;
    left: 370px;
    top: 20px;
    line-height: 40px;
    color: white;
    text-align: center;
    cursor: pointer;
  }

  .comment{
    width: 100%;
    height: auto;
    /*background-color: #22A7F0;*/
  }

  .comment .comment-i{
    color: #333333;
    padding-left: 20px;
    width: 100%;
    height: 300px;
    background-color: white;
    margin-bottom: 20px;
  }

  .comment .comment-i .title{
    width: 100%;
    height: 40px;
    line-height: 40px;
    /*background-color: #61a1df;*/
  }

  .comment .comment-i .sign img{
    width: 43px;
    height: 43px;
  }
  .comment .comment-i .sign .span1{
    color: #666666;
    position: absolute;
    top: 28px;
    left: 50px;
  }


  .comment .comment-i .sign .span2{
    position: absolute;
    right: 30px;
    top: 28px;
  }


  .comment .comment-i .content img{
    width: 200px;
    height: 128px;
  }

  .comment .comment-i .content div div:first-child{
    width: 69.5%;
    height: 110px;
    /*background-color: black;*/
    position: absolute;
    left: 27%;
    top: 18px;
  }

  .comment .comment-i .content div a{
    position: absolute;
    top: 130px;
    left: 230px;
    text-decoration: none;
  }

  .comment .comment-i .content div:last-child{
    width: 160px;
    height: 30px;
    /*background-color: #CC5522;*/
    position: relative;
    top: 130px;
    left: 400px;
  }

  .comment .comment-i .content div:last-child img{
    width: 18px;
    height: 18px;
    padding-right:5px;
    position: relative;
    top: -15px;
  }
  .comment .comment-i .content div:last-child span{
    height: 30px;
    position: relative;
    /*top: 3px;*/
    padding-right: 25px
  }
</style>
