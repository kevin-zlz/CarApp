<template>
  <div class="top" style="display: flex;">
    <div class="top-left">
      <div class="top-left1">
        <div class="top-left-span">取车</div>
        <!--<div>-->
          <!--<input type="text" placeholder="选择城市" style="background-color: red">-->
        <!--</div>-->
        <City style="height: 60px" v-on:spot="spot"></City>
        <!--<div><input type="text" placeholder="莫邪路店"></div>-->
        <Strict :area = 'res' @getplace="gettakestrict"></Strict>
      </div>
      <div class="top-left2">
        <div class="top-left-span">取车时间</div>
        <!--<div>-->
          <!--<input type="text" placeholder="2018-09-15">-->
        <!--</div>-->
        <Calenlar @getdate="getstarttime"></Calenlar>
        <div>

          <Time @getTime="gettaketime"></Time>
        </div>
      </div>
      <div class="top-left3">
        <div class="top-left-span">还车</div>
        <div>
          <!--<input type="text" placeholder="选择城市">-->
          <City style="height: 60px" @spot="getendplace"></City>
        </div>
        <!--<div><input type="text" placeholder="莫邪路店"></div>-->
        <Strict :area = 'returnres' @getplace="getbackplace"></Strict>
      </div>
      <div class="top-left4">
        <div class="top-left-span">还车时间</div>
        <div>
          <!--<input type="text" placeholder="2018-09-15">-->
          <Calenlar @getdate="getendtime"></Calenlar>
        </div>
        <div>
          <!--<input type="text" placeholder="8:00~10:00">-->
          <Time @getTime="getbacktime"></Time>
        </div>
      </div>
    </div>
    <div class="top-right">
      <div class="top-right1">租期: <span style="color: #ff8d65;">2天</span>,不限里程</div>
      <div class="top-right2"><button @click="queryCar">立即选车</button></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        props:['condition'],
        name: "RevertTop",
        data () {
          return {
            res:[],
            returnres:[],
            takecity:'',
            takestrict:'',
            takeday:'',
            taketime:'',
            backcity:'',
            backstrict:'',
            backday:'',
            backtime:'',
            carlist:[],
            conditions:[],
          }
        },
        methods:{
          gettaketime:function(e){
            this.taketime=e;

          },
          getbacktime:function(e){
            this.backtime=e;
          },
          getstarttime:function(e){
            this.takeday=e;

          },
          getendtime:function(e){
            this.backday=e;

          },
          getendplace:function(e,city){
            this.returnres = e;
            this.backcity=city;
          },
          getbackplace:function(e){
            this.backstrict=e;
          }
          ,
          gettakestrict:function(e){
            this.takestrict=e;

          },
          spot:function(res,city){
            this.res = res;
            this.takecity=city;
            // alert(this.takecity=city)
          },
          queryCar:function () {
            let vm = this;
            console.log(this.condition)
            if(this.condition.carJiage||this.condition.carPingpai||this.condition.carLeixing){
              console.log(vm.condition)
              axios.post("http://127.0.0.1:8000/car/querycarbyconditions/",
                {
                  "condition":{
                    "takecityname":vm.takecity,
                    "takestore":vm.takestrict,
                    "taketime":vm.takeday+' '+vm.taketime+':00',
                    "backcityname":vm.backcity,
                    "backstore":vm.backstrict,
                    'backtime':vm.backday+' '+vm.backtime+':00',
                    'condition':vm.condition,
                  },
                }, {
                  // headers: {
                  //   'token': sessionStorage.getItem('token'),
                  // }
                })
                .then(function (res) {
                  if (res.data) {
                    vm.carlist = res.data
                    vm.$emit('getCarlist',vm.carlist,vm.conditions)
                  }
                }.bind(this))
                .catch(function (err) {
                  if (err.response) {
                    console.log(err.response)
                  }
                }.bind(this))

            }else{
              axios.post("http://127.0.0.1:8000/car/querycarbystore/",
                {
                  "takecityname":vm.takecity,
                  "takestore":vm.takestrict,
                  "taketime":vm.takeday+' '+vm.taketime+':00',
                  "backcityname":vm.backcity,
                  "backstore":vm.backstrict,
                  'backtime':vm.backday+' '+vm.backtime+':00',
                }, {
                  // headers: {
                  //   'token': sessionStorage.getItem('token'),
                  // }
                })
                .then(function (res) {

                  if (res.data) {
                    // vm.orderlist = res.data

                    vm.carlist=res.data
                    vm.conditions={
                      "takecityname":vm.takecity,
                      "takestore":vm.takestrict,
                      "taketime":vm.takeday+' '+vm.taketime+':00',
                      "backcityname":vm.backcity,
                      "backstore":vm.backstrict,
                      'backtime':vm.backday+' '+vm.backtime+':00',
                    }

                    vm.$emit('getCarlist',vm.carlist,vm.conditions)
                  }
                }.bind(this))
                .catch(function (err) {
                  if (err.response) {
                    console.log(err.response)
                  }
                }.bind(this))

            }

          }
        },
      mounted:function () {

      }
    }
</script>

<style scoped>
  .top-left{
    width: 75%;
    height: 100%;
    /*background-color: rgba(228, 0, 0, 0.2);*/
    display: flex;
    flex-wrap: wrap;
    padding-left: 5px;
  }
  .top-left1,.top-left2,.top-left3,.top-left4{
    width: 48%;
    height: 50px;
    /*background-color: red;*/
    margin-top: 10px;
    margin-right: 2%;
    display: flex;
    border: solid 1px gray;
    box-sizing: border-box;
  }
  .top-left-span{
    /*display: block;*/
    width: 80px;
    height: 100%;
    /*background-color: black;*/
    line-height: 50px;
    vertical-align:middle;
    text-align: center;
  }

  .top-left1 input,.top-left2 input,.top-left3 input,.top-left4 input{
    width: 160px;
    height: 100%;
    margin-left: 2px;
    margin-right: 2px;
    outline: none;
    border: none;
    border-left:solid 1px gray;
    text-indent: 5px;
  }
  .top-right{
    height: 100%;
    width: 24%;
    margin-left: 5px;
    /*background-color: red;*/
  }
  .top-right1{
    width: 50%;
    height: auto;
    /*background-color: black;*/
    position: relative;
    top: 20px;
    left: 60px;
  }
  .top-right2{
    width: 70%;
    height: 50px;
    /*background-color: black;*/
    position: relative;
    top: 40px;
    left: 40px;
  }
  button{
    width: 100%;
    height: 100%;
    background-color: #fabe00;
    border: none;
    color: white;
    cursor: pointer;
  }

  button:hover{
    background-color:#ff8732;
  }
</style>
