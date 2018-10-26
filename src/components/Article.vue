<template>
  <div class="container" >
    <div class="order-head" >
      <div>我的文章</div>
      <div class="date11">
        <!--<input class='mydate' type='text'/>-->
        <Calenlar class="aa" @getdate="getday"></Calenlar>
      </div>
      <div class="lines"></div>
      <div class="date11">
        <!--<input class='mydate' type='text'/>-->
        <Calenlar class="aa" @getdate="getday"></Calenlar>
      </div>
      <div class="btns" id="query">查询</div>
      <div class="btns">清除</div>
    </div>
    <div class="order-state">
      <div class="order-btn  short-btn">
        <div class="state" v-text="this.msg" v-show="">
        </div>
        <div class="state" @click="show">我发表的文章</div>
        <div class="state" @click="show">我评论的文章</div>
        <div class="state" @click="show">我点赞的文章</div>
      </div>
      <div class="order-container">
        <div  v-show="'我发表的文章'===flag" >
            <div  class="table-content">
          <div class="articalHead">
            <div class="">内容</div>
            <div class="">主题</div>
            <div class="">发表时间</div>
            <div class="">评论数</div>
            <div class="">点赞数</div>
            <div class="">操作</div>
          </div>
          <div class="articalHead items" v-for="artical in articallist">
            <div class="">{{artical.content.substring(0,10)}}...</div>
            <div class="" v-text="artical.type__typename">主题</div>
            <div class="" v-text="artical.pubtime">发表时间</div>
            <div class="" v-text="artical.commennum">评论数</div>
            <div class="" v-text="artical.starnum">点赞数</div>
            <div class="lastitem">
              <div @click="deletArtical(artical.id)">删除</div>
              <div @click="seemore(artical.id)">查看详情</div>
            </div>
          </div>
        </div>
        </div>
        <div  v-show="'我评论的文章'===flag" >
          <div  class="table-content">
            <div class="articalHead getwidth">
              <div class="">帖主</div>
              <div class="">文章内容</div>
              <div class="">评论内容</div>
              <div class="">评论时间</div>
              <div class="">评论操作</div>
            </div>
            <div class="articalHead items getwidth" v-for="artical in commentlist">
              <div class="">{{artical.artical__yonghu__uname}}</div>
              <div class="" >{{artical.artical__content.substring(0,10)}}...</div>
              <div class="" >{{artical.content.substring(0,10)}}...</div>
              <div class="" v-text="artical.pubtime">评论数</div>

              <div @click="deletComment(artical.id)" class="deleteComment">删除</div>

            </div>
          </div>
        </div>
        <div  v-show="'我点赞的文章'===flag" >
          <div  class="table-content">
            <div class="articalHead getlikewidth">
              <div class="">帖主</div>
              <div class="">文章内容</div>
              <div class="">点赞时间</div>
              <div class="">点赞操作</div>
            </div>
            <div class="articalHead items getlikewidth" v-for="artical in likelist">
              <div class="">{{artical.artical__yonghu__uname}}</div>
              <div class="" >{{artical.artical__content.substring(0,20)}}...</div>
              <div class="" >{{artical.pubtime}}</div>
              <div @click="deletStar(artical.id)" class="deleteComment">取消</div>
            </div>
          </div>
        </div>
      </div>
      <div class="page">
        <nav aria-label="Page navigation">
          <ul class="pagination">
            <li>
              <a href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li>
              <a href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import $ from 'jquery'
export default {
  name: 'Order',

  data () {
    return {
      msg: '全部文章',
      articallist:[],
      commentlist:[],
      likelist:[],
      flag:"我发表的文章",
    }
  },
  methods:{
    show:function (e) {

      this.flag = e.target.innerText;
      if(e.target.innerText=='我发表的文章'){
        let vm = this
        axios.post("http://127.0.0.1:8000/boke/queryWritebyuid/",
          {}, {
            headers: {
              'token': sessionStorage.getItem('token'),
            }
          })
          .then(function (res) {
            if (res.data) {
              vm.articallist = res.data
              console.log(vm.articallist)
            }
          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              console.log(err.response)
            }
          }.bind(this))
        $(".state").css({"color":"#333333","background-color":"white"});
        e.currentTarget.style=" background-color:#fabe00 ;color: white";
      }
      if(e.target.innerText=='我评论的文章'){
        this.commentArt();
        $(".state").css({"color":"#333333","background-color":"white"});
        e.currentTarget.style=" background-color:#fabe00 ;color: white";
      }
      if(e.target.innerText=='我点赞的文章'){
        this.likeArt();
        $(".state").css({"color":"#333333","background-color":"white"});
        e.currentTarget.style=" background-color:#fabe00 ;color: white";
      }
    },
    getday:function (e) {

      },
    seemore:function (e) {
      this.$router.push({path: '/det', query: {selected: e}});
    },
    deletArtical:function (e) {
      let vm = this
      axios.post("http://127.0.0.1:8000/boke/deleteArticalByaid/",
        {
          "aid":e,
        }, {
          headers: {
            'token': sessionStorage.getItem('token'),
          }
        })
        .then(function (res) {
          if (res.data.code=='208') {
            window.location.reload()
          }
        }.bind(this))
        .catch(function (err) {
          if (err.response) {
            console.log(err.response)
          }
        }.bind(this))
    },
    commentArt:function () {
      let vm = this
      axios.post("http://127.0.0.1:8000/boke/queryCommentbyuid/",
        {
        }, {
          headers: {
            'token': sessionStorage.getItem('token'),
          }
        })
        .then(function (res) {
          if (res.data) {
            console.log(res.data)
            vm.commentlist=res.data
            // window.location.reload()
          }
        }.bind(this))
        .catch(function (err) {
          if (err.response) {
            console.log(err.response)
          }
        }.bind(this))
    },
    deletComment:function (e) {
      let vm = this
      axios.post("http://127.0.0.1:8000/boke/deteleCommentByCid/",
        {
          "cid":e,
        }, {
          headers: {
            'token': sessionStorage.getItem('token'),
          }
        })
        .then(function (res) {
          if (res.data.code=='208') {
            window.location.reload()
          }
        }.bind(this))
        .catch(function (err) {
          if (err.response) {
            console.log(err.response)
          }
        }.bind(this))
    },
    likeArt:function () {
      let vm = this
      axios.post("http://127.0.0.1:8000/boke/queryLikebyuid/",
        {
        }, {
          headers: {
            'token': sessionStorage.getItem('token'),
          }
        })
        .then(function (res) {
          if (res.data) {
            console.log(res.data)
            vm.likelist=res.data
            // window.location.reload()
          }
        }.bind(this))
        .catch(function (err) {
          if (err.response) {
            console.log(err.response)
          }
        }.bind(this))
    },
    deletStar:function (e) {
      let vm = this
      axios.post("http://127.0.0.1:8000/boke/deletelikebysid/",
        {
          "sid":e,
        }, {
          headers: {
            'token': sessionStorage.getItem('token'),
          }
        })
        .then(function (res) {
          if (res.data.code=='208') {
            window.location.reload()
          }
        }.bind(this))
        .catch(function (err) {
          if (err.response) {
            console.log(err.response)
          }
        }.bind(this))
    },
    },

  mounted:function () {
    let vm = this
    axios.post("http://127.0.0.1:8000/boke/queryWritebyuid/",
      {}, {
        headers: {
          'token': sessionStorage.getItem('token'),
        }
      })
      .then(function (res) {
        if (res.data) {
          vm.articallist = res.data
          console.log(vm.articallist)
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
  body,ul,li,a{
    padding: 0;
    margin: 0;
  }
  .container{
    position: relative;
    left: -15px;
  }
  ul{
    list-style: none;
  }
  input{
    outline: none;
  }
  body{
    background-color: #f2f3f5;
  }

  .date {
    margin-top: 30px;
    display: inline-block;
    /*position: absolute;*/
    height: 40px;
    width: 150px;
    border: gray solid 1px;
    font-size: 15px !important;
    top: 30px;
    z-index: 100;
  }

  .head ul{
    flex:3;
    display: flex;
  }
  .head .headItems li{
    flex:1;
    display: inline-block;
    height: 45px;
    min-width: 80px;
    text-align: center;
    /*margin-right: 20px;*/
  }

  .headItems li a{
    text-decoration: none;
    text-align: center;
    font-size:15px;
    color: white;
  }
  .headItems li:nth-child(4){
    text-align: left;
    flex: 2;
  }
  .headItems li:nth-child(7){
    text-align: left;
    flex: 1.5;
  }
  .headItems li.li5 a{
    font-size: 14px;
    color: #fabe00;
  }
  .headItems li.li1 a:hover{
    color: #fabe00;
  }
  .articalHead{
    width: 100%;
    height: 50px;
    border-bottom:  #d6d8db solid 1px;
  }
  .articalHead div{
    display: inline-block;
    width: 10%;
    text-align: center;
    line-height: 50px;
  }
  .articalHead div:first-child{
    width: 30%;
  }
  .articalHead div:nth-child(3){
    width: 15%;
  }
  .articalHead div:last-child{
    width: 22%;
  }
  .items{
    height: 42px;
    line-height: 42px;
  }
  .items .lastitem div{
    display: inline-block;
    width: 40%;
  }
  .items .lastitem div:hover{
    cursor: pointer;
    color: #fabe00;
  }
  .getwidth div:nth-child(1){
    width: 18%;
  }
  .getwidth div:nth-child(2){
    width: 25%;
  }
  .getwidth div:nth-child(3){
    width: 25%;
  }
  .getwidth div:nth-child(4){
    width: 15%;
  }
  .getwidth div:nth-child(5){
    width: 15%;
  }
  .deleteComment:hover{
    cursor: pointer;
    color: #fabe00;
  }
  .getlikewidth div:nth-child(1){
    width: 20%;
  }
  .getlikewidth div:nth-child(2){
    width: 35%;
  }
  .getlikewidth div:nth-child(3){
    width: 20%;
  }
  .getlikewidth div:nth-child(4){
    width: 20%;
  }

  /*----------------------head-info--------------------*/
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
    border-radius: 30px;
    background-color: darkgray;
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
  /*----------------------------------body-main-----------*/
  .main-contain{
    position: relative;
    width: 1222px;
    margin: 0 80px;
  }

  .main-contain .body-left{
    background-color: white;
    top: 20px;
    position: absolute;
    width: 270px;
    height: 933px;
    border: #d4d5d8 solid 1px;
    /*left: 80px;*/
  }
  .body-left .nav{
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 50px;
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
  .main-contain .body-right-top{
    top: 20px;
    position: absolute;
    width: 930px;
    height: 626px;
    /*border: #d4d5d8 solid 1px;*/
    left: 272px;
    margin-left: 10px;
    box-sizing: border-box;
    /*padding-left: 5px ;*/
  }
  .order-head{
    display: flex;
    border: #d4d5d8 solid 1px;
    width: 924px;
    height: 60px;
    padding-left: 20px;
    box-sizing: border-box;
    background-color: white;
    /*line-height: 60px;*/
  }
  .order-head div:first-child{
    width: 300px;
    height: 100%;
    font-size: 18px;
    margin-top: 13px;
    /*margin-left: 10px;*/
    color: #60606c;
    box-sizing: border-box;
  }
  .order-head .date{
    margin-top:0px ;
    width: 180px;
    font-size: 14px;
    color: #60606c;

  }
  .order-head .lines{
    width: 15px;
    height: 0px;
    margin-top: 30px;
    margin-right: 5px;
    border: #d4d5d8 solid 1px;
    box-sizing: border-box;
  }
  .order-head .date input{
    height: 30px;
    width: 173px;
    color: #60606c;
  }
  .order-head .btns{
    height: 30px;
    width: 85px;
    line-height: 30px;
    border: #d4d5d8 solid 1px;
    margin-top: 15px;
    box-sizing: border-box;
    margin-left: 15px;
    text-align: center;
    line-height: 30px;
  }
  .order-head div.btn:hover{
    cursor: pointer;
  }
  .order-head div#query:hover{
    background-color:#fabe00 ;
  }
  .order-head div#query:hover{
    cursor: pointer;
    background-color:#fabe00 ;
  }
  .order-head div.btn:nth-last-child(1){
    background-color:#609fe6;
  }
  .order-state{
    background-color: white;
    border: #d4d5d8 solid 1px;
    width: 924px;
    min-height: 580px;
    padding: 20px;
    box-sizing: border-box;
    padding-bottom: 100px;

  }
  .order-state .order-btn{
    width: 100%;
    height: 50px;
    display: flex;
    border-bottom: #e9ebee solid 1px;
  }
  .order-state .order-btn .state{
    height: 40px;
    width: 20%;
    border: #d4d4d6 solid 1px;
    border-right: none;
    margin-left: 0;
    padding-left: 0;
    line-height: 40px;
    text-align: center;
    color: #60606c;
  }
  .order-state .order-btn .state:nth-last-child(1){
    border-right: #d4d4d6 solid 1px;
  }
  .order-state .order-btn .state:hover{
    cursor: pointer;
    background-color: #fabe00 !important;
    color: white!important;
  }
  .order-statement{
    background-color: white;
    padding: 20px;
    width: 924px;
    height: 265px;
    border: #d4d5d8 solid 1px;
    box-sizing: border-box;
    margin-top: 10px;
  }
  .order-statement div:first-child{
    width: 100%;
    height: 30px;
    /*line-height: 10px;*/
    color: #888888;
    border-bottom: #d4d5d8 solid 1px;
  }
  .order-statement .state-7{
    width: 100%;
    height:230px;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    /*align-items: center;*/
    padding-top: 10px;
    padding-bottom: 0;
  }
  .order-statement .state-7 .every-state{
    width: 200px;
    height: 80px;
    background-color: #f8f8fa;
    margin-left: 10px;
    margin-right: 10px;
    box-sizing: border-box;
  }
  .order-statement .every-state p:nth-child(1){
    margin-top: 0px;
    display: inline-block;
    height: 20px;
    width: 100%;
    font-size: 15px;
    color: #a7a7a7;
  }
  .order-statement div.every-state:nth-child(1){
    border-bottom: none;
  }
  .order-statement div.every-state:nth-child(1) p:nth-child(1){
    color: #8cc152;
  }
  .order-statement div.every-state:nth-child(2) p:nth-child(1){
    color: #fd9450;
  }
  .order-statement div.every-state:nth-child(3) p:nth-child(1){
    color: #50dee3;
  }
  .order-statement div.every-state:nth-child(4) p:nth-child(1){
    color: #50dee3;
  }
  .order-statement div.every-state:nth-child(5) p:nth-child(1){
    color: #fca550;
  }
  .order-statement div.every-state:nth-child(6) p:nth-child(1){
    color: #fabe00;
  }
  .order-statement .every-state p:nth-child(2){
    display: inline-block;
    margin-top: 0px;
    margin-bottom: 0px;
    height: 15px;
    font-size: 14px;
    color: #a7a7a7;
  }
  .order-attention{
    background-color: white;
    padding: 20px;
    width: 924px;
    height: 175px;
    border: #d4d5d8 solid 1px;
    box-sizing: border-box;
    margin-top: 10px;
  }
  .order-attention div:first-child{
    width: 100%;
    height: 30px;
    color: #888888;
    /*line-height: 10px;*/
    border-bottom: #d4d5d8 solid 1px;
  }
  .order-attention div:nth-child(2) p{
    font-size: 12px;
    color: #cecece;
  }
  .order-container{
    position: relative;
  }
  .order-container .table-head{
    position: relative;
    background-color: #f8f8fa;
    height: 30px;
    line-height: 30px;
  }
  .order-container .table-head div{
    font-size: 14px;
    color: #bdbdbd;
    display: inline-block;
  }
  .order-container .table-head .order-info{
    position: absolute;
    width: 80px;
    left: 10px;
  }
  .order-container .table-head .order-car{
    position: absolute;
    width: 80px;
    left: 380px;
  }
  .order-container .table-head .order-all{
    position: absolute;
    width: 80px;
    left: 665px;
  }
  .order-container .table-head .order-states{
    position: absolute;
    width: 80px;
    left: 780px;
  }
  .order-container .table-data{
    border-bottom: #d6d6d6 solid 1px;
    border-top: #d6d6d6 solid 1px;
    height: 160px;
    width: 100%;
    position: relative;
  }

  .table-data .info-car{
    position: relative;
    width: 360px;
    height: 140px;
  }
  .table-data .info-car img{
    position: absolute;
    top: 30px;
    width: 170px;
    height: 100px;
  }
  .table-data .info-car .car-info{
    position: absolute;
    display: inline-block;
    top: 30px;
    left: 180px;
    height: 160px;
    width: 190px;
  }
  .info-car .car-info>p{
    font-size: 16px;
    font-weight: bold;
  }
  .info-car .car-info div p{
    height: 15px;
    color: #d3d3d3;
    font-size: 14px;
  }
  .table-data .split{
    height: 140px;
    width: 0px;
    position: absolute;
    left: 365px;
    border: #d8d8d8 solid 0.5px;
    top: 10px;
  }
  .table-data .info-all{
    position: absolute;
    display: inline-block;
    top: 30px;
    left: 400px;
    height: 160px;
    width: 190px;
  }
  .info-all .little{
    width: 20px;
    height: 20px;
    background-color: #ffa337;
    border-radius: 3px;
    color: white;
    font-size: 14px;
  }
  .info-all p{
    padding-bottom: 5px;
    margin:0px;
    font-size: 15px;
    color: #b4b4b4;

  }
  .info-place{
    position: absolute;
    display: inline-block;
    top: 60px;
    left: 640px;
    height: 160px;
    width: 190px;
    color: #5b5b5b;
    font-size: 20px;
  }
  .info-state{
    position: absolute;
    display: inline-block;
    top: 50px;
    left: 775px;
    height: 160px;
    width: 190px;

  }
  .info-state p:first-child{
    font-size: 15px;
    color: rgba(0, 255, 0, 0.48);
  }
  .info-state p a{
    text-decoration: none;
    font-size: 15px;
    color: #7292a0;
    text-align: center;
  }
  .page{

    width: 100%;
    position: absolute;
    text-align: center;
    left: 0;
    bottom: 20px;
    padding-top: 30px;

  }
  .footer{
    margin-top: 1150px;
  }
  .calendar {
    position: relative;
    font-family: 'Century Gothic','Segoe UI', Calibri, Arial;
    font-size: 12px;
    border-collapse: collapse;
    margin: 0; padding: 0;
    z-index: 4;
    border:1px solid rgba(0,0,0,0.08);
    width: 250px;
    color: #000;
    text-align: center;
    background-color: #FFF;
  }
  .calendar th,
  .calendar td {
    text-align: center;
    -webki-ttransition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
  .calendar th:first-child,
  .calendar td:first-child {
    margin-left: 5px;
  }
  .calendar span {
    padding: 6px 4px;
    display: block;
  }
  .calendar .month {
    padding: 15px;
  }

  .calendar .pMDate, .calendar .nMDate { color: #AAA; }
  .calendar .date, .calendar .pMDate, .calendar .nMDate, .calendar .month { cursor: pointer; }
  .calendar .date.disabled, .calendar .pMDate.disabled, .calendar .nMDate.disabled { cursor: not-allowed; }
  .calendar .date:not(.disabled):hover, .calendar .pMDate:not(.disabled):hover, .calendar .nMDate:not(.disabled):hover, .calendar .month:hover { background-color: #E2E2E2; }
  .calendar .date:not(.disabled):active, .calendar .pMDate:not(.disabled):active, .calendar .nMDate:not(.disabled):active, .calendar .month:active { background-color: #22A7F0; color: #FFF; }
  .calendar .selected {
    background-color: #22A7F0 !important;
    color: #FFF !important;
  }

  .calendar tr:first-child th {
    background-color: #FFF;
    padding: 4px;
    padding-top: 8px;
    font-size: 14px;
  }
  .calendar tr:first-child th { cursor: pointer; color:#000; }
  .calendar tr:first-child th:hover { color:#22A7F0; }
  .calendar tr:first-child th:active { color: #22A7F0; }
  .calendar thead tr:nth-child(2) th { color: #555; padding: 8px 3px; }
  .calendar #prev, .calendar #next {
    font-family: 'Times New Roman';
    font-size: 20px;
    padding: 0;
  }
  .calendar #today {
    text-align: center; cursor: pointer;
    color: #22A7F0; padding: 10px 6px;
  }
  .calendar #today:hover { color: #80A7DD; }
  .calendar #today:active { color: #000; }
  .calendar #currDay { color:#22A7F0; }
  .datepicker {
    background:transparent right no-repeat;
    background-size: contain;
  }
  .date11{
    width: 170px;
    height: 40px;
    /*background: red;*/
    border: solid 1px #c6c6c6;
    position: relative;
    top: 10px;
    padding-top: 0px;
  }
  .date11 .aa{
    position: relative;
    top: -13px;
  }
</style>
