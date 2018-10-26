<template>
  <div class="container" >
    <div class="order-head">
      <div>我的活动</div>
      <!--<div class="date">-->
        <!--&lt;!&ndash;<input class='mydate' type='text'/>&ndash;&gt;-->
        <!--<Calenlar></Calenlar>-->
      <!--</div>-->
      <!--<div class="lines"></div>-->
      <!--<div class="date">-->
        <!--&lt;!&ndash;<input class='mydate' type='text'/>&ndash;&gt;-->
        <!--<Time></Time>-->
      <!--</div>-->
      <!--<div class="btns" id="query">查询</div>-->
      <!--<div class="btns">清除</div>-->
    </div>
    <div class="order-state">
      <div class="order-btn  short-btn">
        <div class="state" v-text="this.msg" v-show="">

        </div>
        <!--<div class="state" @click="show">全部活动</div>-->
        <div class="state" @click="show">我发起的活动</div>
        <div class="state" @click="show">我参与的活动</div>

        <!--<div class="state" @click="show">已结束的活动</div>-->
      </div>
      <div class="order-container">
        <div class="table-head">
          <div class="order-info">全部文章</div>
          <!--<div class="order-car">取还车信息</div>-->
          <!--<div class="order-all">总计</div>-->
          <!--<div class="order-states">订单状态</div>-->
        </div>
        <div v-show="'全部活动'===flag">
          <div class="main-content">
            <ul>
              <li class="cc">
                <div class="aa"><img src="../assets/images/寒山寺.jpg" alt=""></div>
                <div class="aa2">
                  <ul>
                    <li><h4>寒山寺一日游</h4></li>
                    <li>
                      <p>目标人数：10人</p>
                      <p>已参人数：5人</p>
                      <p>日期：2018-11-11</p>
                      <p>联系人：王文成</p>
                      <p style="color: red">联系电话：15776540858</p>
                    </li>
                    <div class="qq" v-show="'我参与的活动'===flag"><button>取消</button></div>
                    <!--<li class="bb1"><button>查看详情</button></li>-->
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="main1" v-show="'我发起的活动'===flag">
          <div class="main-content">
            <ul>
              <li class="cc" v-for="activity in activitylist">
                <div class="aa"><img :src="'http://127.0.0.1:8000/media/pic/'+activity.cityicon" alt=""></div>
                <div class="aa2">
                  <ul>
                    <li><h4>{{activity.province}}一日游</h4></li>
                    <li>
                      <p>旅游城市：{{activity.province}}人</p>
                      <p>目标人数：{{activity.menbers}}人</p>
                      <p>参加名单：<span v-for="i in activity.joiners">{{i}}、</span></p>
                      <p>日期：{{activity.travelstrattime.split('T')[0]}}</p>
                      <p>路线：<span v-for="i in activity.routelist">{{i}}、</span></p>
                    </li>
                    <div class="qq" v-show="'我参与的活动'===flag"><button>取消</button></div>
                    <div class="qq" v-show="'我发起的活动'===flag"><button>取消</button></div>
                    <!--<li class="bb1"><button>查看详情</button></li>-->
                  </ul>
                </div>
              </li>
              <li class="cc">11</li>
            </ul>
          </div>

        </div>
        <div v-show="'我参与的活动'===flag">
          <div class="main-content">
            <ul>
              <li class="cc" v-for="activity in myjoinlist">
                <div class="aa"><img :src="'http://127.0.0.1:8000/media/pic/'+activity.cityicon" alt=""></div>
                <div class="aa2">
                  <ul>
                    <li><h4>{{activity.province}}一日游</h4></li>
                    <li>
                      <p>旅游城市：{{activity.province}}人</p>
                      <p>目标人数：{{activity.menbers}}人</p>
                      <p>已参加人数：{{activity.joinnum}}</p>
                      <p>日期：{{activity.travelstrattime.split('T')[0]}}</p>
                      <p>路线：<span v-for="i in activity.routelist">{{i}}、</span></p>
                      <p style="color: red">联系人：{{activity.linkname }}</p>
                      <p style="color: red">联系电话：{{activity.linknumber }}</p>
                    </li>
                    <div class="qq" v-show="'我参与的活动'===flag"><button @click="clickmyjoin(activity.travelid)">取消</button></div>
                    <!--<li class="bb1"><button>查看详情</button></li>-->
                  </ul>
                </div>
              </li>
              <li class="cc">11</li>
            </ul>
          </div>
        </div>
        <div v-show="'已结束的活动'===flag">
          <div class="main-content">
            <ul>
              <li class="cc">
                <div class="aa"><img src="../assets/images/寒山寺.jpg" alt=""></div>
                <div class="aa2">
                  <ul>
                    <li><h4>寒山寺一日游</h4></li>
                    <li>
                      <p>目标人数：10人</p>
                      <p>已参人数：5人</p>
                      <p>日期：2018-11-11</p>
                      <p>联系人：王文成</p>
                      <p style="color: red">联系电话：15776540858</p>
                    </li>
                    <div class="qq" v-show="'我参与的活动'===flag"><button>取消</button></div>
                    <!--<li class="bb1"><button>查看详情</button></li>-->
                  </ul>
                </div>
              </li>

            </ul>
          </div>
        </div>


      </div>
      <div class="page">
        <nav aria-label="Page navigation" >
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
  export default {
    name: 'MyActivity',
    inject:['reload'],
    data () {
      return {
        msg: '我发起的活动',
        activitylist:[],
        myjoinlist:[],
        flag:"我发起的活动",
      }
    },
    mounted:function () {
      let vm=this
      axios.post("http://127.0.0.1:8000/traval/queryInitatorTravel/",
        {
        },{
          headers: {
            'token':sessionStorage.getItem('token'),
          }
        })
        .then(function (res) {
          if(res.data){
            this.activitylist=res.data
            console.log(this.activitylist)
          }
        }.bind(this))
        .catch(function (err) {
          if (err.response) {
            console.log(err.response)
          }
        }.bind(this))


      this.getmyjoin()
    },
    methods:{
      show:function (e) {
        // alert(e.target.innerText)
        this.flag = e.target.innerText;
        if(e.target.innerText=='我发起的活动'){
          $(".state").css({"color":"#333333","background-color":"white"});
          e.currentTarget.style=" background-color:#fabe00 ;color: white";
        }
        else if(e.target.innerText=='我参与的活动'){
          $(".state").css({"color":"#333333","background-color":"white"});
          e.currentTarget.style=" background-color:#fabe00 ;color: white";
        }
      },
      getday:function (e) {

      },
      getmyjoin:function () {
        let vm=this
        axios.post("http://127.0.0.1:8000/traval/queryTravelByuid/",
          {
          },{
            headers: {
              'token':sessionStorage.getItem('token'),
            }
          })
          .then(function (res) {
            if(res.data){
              this.myjoinlist=res.data
              console.log(this.myjoinlist)
            }
          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              console.log(err.response)
            }
          }.bind(this))
      },
      clickmyjoin:function (e) {
        let vm=this
        axios.post("http://127.0.0.1:8000/traval/cancelNotJoinTravel/",
          {
            "joinTravel__id":e,
          },{
            headers: {
              'token':sessionStorage.getItem('token'),
            }
          })
          .then(function (res) {
            if(res.data.statuscode=='201'){
             vm.reload()
            }
          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              console.log(err.response)
            }
          }.bind(this))
      }

    },

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
  .head .logo-img{
    flex:1;
    display: inline;
    height: 100%;
    background-color: #ffa337;
    max-width:300px ;
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
  .mydate{
    position: relative;
    top: 15px;
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
  /*----------------------head-info--------------------*/
  .head-info div{
    width: 200px;
    height: 100px;
    /*border-left: red solid 1px;*/
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
    padding: 20px;
    box-sizing: border-box;
    min-height: 580px;
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


  .table-data .info-car img{
    position: absolute;
    top: 30px;
    width: 170px;
    height: 100px;
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



  .info-all p{
    padding-bottom: 5px;
    margin:0px;
    font-size: 15px;
    color: #b4b4b4;

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
  .main-content ul .cc{
    width: 100%;
    height: 200px;
    /*background: green;*/
    margin-top: 20px;
    list-style: none;
    display: flex;
    background: #ebebeb;
  }
 .main-content ul li .aa{
    width: 470px;
    height: 100%;
  }
 .main-content ul li .aa img{
    height: 100%;
    width: 100%;
  }
 .main-content ul li .aa2{
    width: 412px;
    height: 100%;
   position: relative;
    /*background: yellow;*/
  }
  .aa2 ul li{
    margin-left: 25px;
    margin-top: 5px;
  }
  .aa2 ul li p:nth-last-child(2){
    position: absolute;
    top:70px;
    right: 20px;
  }
  .aa2 ul li p:nth-last-child(1){
    position: absolute;
    top:40px;
    right: 20px;
  }
  .qq button{
    width: 100px;
    height: 50px;
    background: rgb(238, 184, 25);
    border: solid 1px #eeb819;
    color: white;
    position: absolute;
    left: 300px;
    top: 140px;
  }


</style>
