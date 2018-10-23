
<template>
  <div class="all">
    <div  class="contain">
      <div class="container-top">
        <div class="t-left">
          <div class="t-head">
            <div class="t-head-1">新能源市场</div>
            <div class="t-head-2">传统车企的新能源车做得怎么样？</div>
          </div>
          <div class="t-body">
            <p>传统车企的新能传统车企的新能源车做得怎么样？传统车企的新能源车做得怎么样？传统车企的新能源车做得怎么样？传统车企的新能源车做得怎么样？传统车企的新能源车做得怎么样？传统车企的新能源车做得怎么样？传统车企的新能源车做得怎么样？传统车企的新能源车做得怎么样？传统车企的新能源车做得怎么样？</p>
            <a  class="s_a" href="#comment_area">
              <i class="iconfont icon-xinxi"></i>
              <span>0</span>
              <span >评论</span>
            </a>
            <a  class="f_a" href="#" @click="like">
              <i class="iconfont icon-icon_good"></i>
              <span v-text="likes_count"></span>
              <span>赞</span>
            </a>
          </div>
        </div>
        <div class="t-right">
                <span class="card-right">
                    <p class="card-title">回答数</p>
                    <p class="card-count">15</p>
                </span>
        </div>
      </div>
      <div class="container-middle">
        <div class="m-left">
          <div class="answer_head">
            <div class="answer_head_left">
              <a href="" class="icon_small"><img src="//x.autoimg.cn/space/images/head_120X120.gif" alt=""></a>
              <a href="#">天天汽车APP</a>
            </div>
          </div>
          <div class="answer_content">
            <div class="ac_text">
              就目前来看，传统车企的新能源汽车做得是相当不错。比如说吉利汽车，吉利汽车这几年进步十分巨大，不但是在传统燃油车领域的表现令人惊叹，在新能源汽车领域的表现同样也是表现抢眼，包括纯电动的帝豪EV450以及帝豪PHEV等车型的市场口碑和销量都很不错。另外，比亚迪汽车也是很优秀，旗下产品多样，而且产品线齐全，包括唐DM、元EV、秦EV以及宋DM等车型产品，都是产品力非常出彩的
            </div>
          </div>
          <div class="answer_foot">
            <div class="foot_right">
              <span>2018-10-09 15:48:42</span>
            </div>
          </div>
        </div>
        <div class="m-left">
          <div class="answer_head">
            <div class="answer_head_left">
              <a href="" class="icon_small"><img src="//x.autoimg.cn/space/images/head_120X120.gif" alt=""></a>
              <a href="#">天天汽车APP</a>
            </div>
          </div>
          <div class="answer_content">
            <div class="ac_text">
              就目前来看，传统车企的新能源汽车做得是相当不错。比如说吉利汽车，就目前来看，传统车企的新能源汽车做得是相当不错。比如说吉利汽车，就目前来看，传统车企的新能源汽车做得是相当不错。比如说吉利汽车，就目前来看，传统车企的新能源汽车做得是相当不错。比如说吉利汽车，就目前来看，传统车企的新能源汽车做得是相当不错。比如说吉利汽车，吉利汽车这几年进步十分巨大，不但是在传统燃油车领域的表现令人惊叹，在新能源汽车领域的表现同样也是表现抢眼，包括纯电动的帝豪EV450以及帝豪PHEV等车型的市场口碑和销量都很不错。另外，比亚迪汽车也是很优秀，旗下产品多样，而且产品线齐全，包括唐DM、元EV、秦EV以及宋DM等车型产品，都是产品力非常出彩的
            </div>
          </div>
          <div class="answer_foot">
            <div class="foot_right">
              <span>2018-10-09 15:48:42</span>
            </div>
          </div>
        </div>
        <div class="m-right">
          <div class="up">
            <h1>最佳答主</h1>
            <div class="lord_head">
              <a href=""><img src="//x.autoimg.cn/space/images/head_120X120.gif" ></a>
              <a href="">天天汽车APP</a>
            </div>
            <div class="lord_body">
              <ul>
                <li>

                  <span>回答</span>
                  <i>648</i>

                </li>
                <li>
                  <span>赞</span>
                  <i>24</i>
                </li>

              </ul>
            </div>

          </div>

        </div>
      </div>
      <div class="container-bottom">
        <h1 class="comment">本文精彩评论</h1>
        <div class="text_area">
          <div class="area_top">
            <textarea  id="comment_area" placeholder="请写下你的评论......" maxlength="150" v-model="comment" ref="foc"></textarea>
            <button  class="submit"  ref="submit" @click="dian" :disabled="disabled">提交评论</button>
          </div>
          <div class="area_bottom">
            <div class="text_count">
              <span v-text="text_count"></span>
              /150字
            </div>
          </div>
        </div>
      </div>

    </div>

    <RevertBottom></RevertBottom>
  </div>
</template>

<script>
import axios from 'axios'
export default {
        name: "AnswerDetail",
        data () {
          return {
            msg: '我是谁我在哪？？？？',
            flag:false,
            comment:"",
            text_count:"0",
            likes_count:77,
            liked:false,
            disabled:true
                }
          },
        methods:{
          dian:function () {
            alert('可以点击')
          },
          like:function (e) {
            if(this.liked){
              this.likes_count-=1;
              e.currentTarget.style.color='#999999';
              this.liked=!this.liked

            }
            else {
              this.likes_count+=1;
              e.currentTarget.style.color='#2c37d3';
              this.liked=!this.liked

            }

          }




        } ,
        watch:{
          comment:function (con) {
            // console.log(con);
            if(con){
              this.$refs.submit.style.backgroundColor='#386ed3';
              this.text_count=con.length;
              this.disabled=false;
            }
            else {
              this.$refs.submit.style.backgroundColor='#d0d0d0';
              this.disabled=true;
              this.text_count=0
            }

          }

        }


    }
</script>

<style scoped>

  @font-face {font-family: "iconfont";
    src: url('../../static/bootstrap/font_871393_ry9qw445kkb/iconfont.eot?t=1539397347847'); /* IE9*/
    src: url('../../static/bootstrap/font_871393_ry9qw445kkb/iconfont.eot?t=1539397347847#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
    url('../../static/bootstrap/font_871393_ry9qw445kkb/iconfont.ttf?t=1539397347847') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('../../static/bootstrap/font_871393_ry9qw445kkb/iconfont.svg?t=1539397347847#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-xinxi:before { content: "\e674"; }

  .icon-iconset0207:before { content: "\e66a"; }

  .icon-icon_good:before { content: "\e616"; }

  .icon-pen:before { content: "\e61c"; }

  .icon-qizi:before { content: "\e662"; }

  .icon-wenhao:before { content: "\e6e8"; }

  .icon-iconjia:before { content: "\e600"; }



  .all{
    width: 100%;
    height: 100%;
    background-color: #F5F5F5;

  }
  .contain{
    width: 1500px;
    height: auto;
    margin: auto;
    margin-bottom: 100px;
    /*background-color: #F5F5F5;*/
    padding: 0 ;
  }

  .container-top{
    width: 78%;
    height: 286px;
    background-color: white;
    position: relative;
    top:60px;
    margin: auto;

  }
  .t-left{

    /*background-color: #4c5cff;*/
    width: 860px;
    height: 286px;
    position: absolute;
    margin-right: 40px;
    margin-bottom: 0;
  }
  .t-head{
    width: 860px;
    height: 122px;
    /*background-color: #dbff54;*/
  }
  .t-head-1{
    box-sizing: border-box;
    display: inline-block;
    height: 30px;
    line-height: 28px;
    padding: 0 10px;
    position: absolute;
    left: 32px;
    top:24px;
    color: #386ed3;
    border: 1px solid #a4bceb;
    background-color: #fafbfc;
  }
  .t-head-2{
    display: inline-block;
    line-height: 32px;
    /*margin-bottom: 22px;*/
    font-size: 24px;
    color: #333333;
    font-weight: bold;
    position: absolute;
    left: 32px;
    top: 75px;
    /*background-color: #ff6000;*/
  }

  .t-body p{
    /*background-color: #4c5cff;*/
    margin: 0;
    margin-left: 32px;
    text-indent: 2em;
    font-size: 16px;
    line-height: 28px;
    word-break: break-all;
    word-wrap: break-word;
    color: #333;
  }
  .s_a{
    vertical-align: middle;
    /*padding: 0 25px;*/
    text-decoration: none ;
    font-size: 0.9em;
    color: #999999;
    position: absolute;
    bottom: 5px;
    right: 70px;
  }
  .f_a{
    vertical-align: middle;
    text-decoration: none ;
    font-size: 0.9em;
    color: #999999;
    position: absolute;
    bottom: 5px;
    right: 10px;

  }


  .t-body a:hover{
    color: #386ed3!important;
  }

  .t-right{
    position: absolute;
    padding: 17px 20px;
    width: 300px;
    top: 80px;
    right: 0;
    /*background-color: #dbff54;*/
    box-sizing: border-box;
  }


  .card-title{
    font-size: 16px;
    color: #999;
  }
  .card-count{
    font-size: 20px;
    color: #000;
    font-weight: bold;
  }
  .card-right{

    width: 50%;
    text-align: center;
  }


  .container-middle {
    width: 78%;
    height: auto;
    top: 90px;
    position: relative;
    padding: 0;
    margin: auto;
    display: block;
    /*border: solid 1px black;*/
  }




  .m-left{
    width: 71%;
    height: auto;
    background-color: white;
    /*border: solid 1px black;*/
    position: relative;
    display: inline-block;
    left: 0;
    margin-bottom: 20px;
  }
  .answer_head{
    width: 100%;
    height: 42px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  .answer_head_left{
    float: left;
  }
  .answer_head_left a{
    color: #666;
    font-size: 16px;
    float: left;
    margin-left: 15px;
    line-height: 42px;
    text-decoration: none;
  }
  .icon_small{
    width: 42px;
    height: 42px;
    border-radius: 50%;
    overflow: hidden;
  }
  .icon_small img{
    display: block;
    width: 42px;
    height: 42px;
  }

  .answer_content{
    margin: 0 32px;
    font-size: 16px;
    line-height: 24px;
    text-indent: 32px;
    color: #333333;
  }
  .answer_foot{
    height: 30px;
    margin: 15px 32px 10px;
    /*background-color: #ffe5c1;*/
  }

  .foot_right{
    width: 250px;
    height: 30px;
    line-height: 30px;
    /*background-color: #dfc1ff;*/
    float: right;
    color: #999999;

  }
  .foot_right span{
    float: right;
    padding: 0 5px;
    font-size: 0.9em;

  }
  .m-right{
    width: 23%;
    height: 420px;
    /*background-color: #e2ff96;*/
    box-sizing: border-box;
    display: inline-block;
    position: absolute;
    top:-10px;
    right: 0;
    margin: auto;

  }
  .up{
    background-color: white;

  }
  .m-right h1{
    box-sizing: border-box;
    width: 100%;
    height: 24px;
    line-height: 24px;
    padding-left: 8px;
    margin-top: 10px;
    margin-bottom: 8px;
    font-size: 18px;
    border-left: 6px solid #386ed3;
    color: #666666;
  }
  .lord_head{
    width: 100%;
    position: relative;
    margin: 20px 0;
    /*background-color: #999999;*/
    text-align: center;
  }
  .lord_head a{
    text-decoration: none;
    max-width: 160px;
    height: 24px;
    line-height: 24px;
    white-space: nowrap;
    font-size: 24px;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #666666;
  }
  .lord_head a img{
    width: 70px;
    height: 70px;
    /*display: inline-block;*/
    vertical-align: middle;
  }
  .lord_head a:hover{
    color: #f43636;
  }
  .lord_body{
    width: 80%;
    margin: auto;
    margin-top: 10px;
    height: 120px;
    border-top: 1px solid #e6e6e6;
    padding-top: 30px;
    /*padding-right: 30px;*/
  }
  .lord_body ul{
    list-style: none;
    padding: 0;

  }
  .lord_body ul li{
    width: 50%;
    text-align: center;
    float: left;
  }


  .lord_body ul li span{

    display: block;
    color: #999;
    font-size: 16px;
    padding-bottom: 5px;
  }
  .lord_body ul li i{
    display: block;
    font-size: 24px;
    font-weight: bold;
    color: #333333;
    font-style:normal;
  }
  .lord_body ul li:last-child i:hover{
    color: #f43636;
    cursor: pointer;
  }

  .container-bottom{
    width: 55.4%;
    height: 210px;
    position: relative;
    top:120px;
    /*border: solid 1px #ffda7a;*/
    padding-top: 36px;
    box-sizing: border-box;
    background-color: white;
    margin-left: 164px;

  }
  .comment{
    box-sizing: border-box;
    height: 24px;
    line-height: 24px;
    padding-left: 8px;
    margin-bottom: 8px;
    margin-left: 28px;
    margin-top: 0;
    font-size: 18px;
    border-left: 6px solid #386ed3;
    color: #333333;

  }
  .text_area{
    padding: 0 28px 14px;
    width: 844px;
    height: 142px;
    box-sizing: border-box;
    /*background-color: #f4ffb9;*/
    display: block;
  }
  #comment_area{
    float: left;
    box-sizing: border-box;
    width: 667px;
    height: 100px;
    padding: 9px 17px;
    line-height: 24px;
    border: 1px solid #eee;
    color: black;
    font-size: 1.2em;
    resize: none;

  }
  #comment_area:focus{
    outline: none;
  }
  .submit{
    float: right;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border-radius: 6px;
    color: #fff;
    font-size: 16px;
    background-color: #d0d0d0;
    border: 0;
    outline: 0;
  }


  .area_bottom{
    width: 667px;
    height: 20px;
    position: relative;
    top: 110px;
  }
  .text_count{
    position: absolute;
    left: 0;
    height: 20px;
    line-height: 20px;
    color: #999999;
    font-size: 0.9em;
  }
</style>
