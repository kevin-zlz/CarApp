<template>
  <div class="top" style="display: flex;">
    <div class="top-left">
      <div class="top-left1">
        <div class="top-left-span">取车</div>
        <!--<div>-->
          <!--<input type="text" placeholder="选择城市" style="background-color: red">-->
        <!--</div>-->
        <City class="topclass" :mycity="defaltcity" v-on:spot="spot"></City>
        <!--<div><input type="text" placeholder="莫邪路店"></div>-->
        <Strict class="topclass" :area = 'res' @getplace="gettakestrict" ></Strict>
      </div>
      <div class="top-left2">
        <div class="top-left-span">取车时间</div>
        <!--<div>-->
          <!--<input type="text" placeholder="2018-09-15">-->
        <!--</div>-->

        <Calenlar class="topclass"  @getdate="getstarttime" id="s_date"></Calenlar>
        <div class="topclass x-lb" >
          <Time class="topclass " @getTime="gettaketime"></Time>
        </div>
      </div>
      <div class="top-left3">
        <div class="top-left-span">还车</div>
        <div class="topclass">
          <!--<input type="text" placeholder="选择城市">-->
          <City :mycity="defaltcity"  @spot="getendplace"></City>
        </div>
        <!--<div><input type="text" placeholder="莫邪路店"></div>-->
        <Strict class="topclass" :area = 'returnres' @getplace="getbackplace"></Strict>
      </div>
      <div class="top-left4">
        <div class="top-left-span">还车时间</div>
        <div class="topclass">
          <!--<input type="text" placeholder="2018-09-15">-->
          <Calenlar  @getdate="getendtime" id="e_date"></Calenlar>
        </div>
        <div class="topclass x-lb" >
          <!--<input type="text" placeholder="8:00~10:00">-->
          <Time  @getTime="getbacktime"></Time>
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
    props:['condition','defaltcity'],
    name: "RevertTop",
    data () {
      return {
        res:[],
        returnres:[],
        takecity:'北京',
        takestrict:'',
        takeday:((new Date()).getFullYear()).toString()+'-'+(new Date()).getMonth().toString()+'-'+((new Date()).getDate()).toString(),
        taketime:((new Date()).getHours()+2).toString()+':00',
        takestoreid:'',
        backcity:'',
        backstrict:'北京',
        backday:((new Date()).getFullYear()).toString()+'-'+(new Date()).getMonth().toString()+'-'+((new Date()).getDate()+2).toString(),
        backtime:((new Date()).getHours()+2).toString()+':00',
        backstoreid:"",
        carlist:[],
        conditions:[],
      }
    },
    methods:{
      gettaketime:function(e){
        this.taketime=e;
        this.getallcondition()
      },
      getbacktime:function(e){
        this.backtime=e;
        this.getallcondition()
      },
      getstarttime:function(e){
        this.takeday=e;
        this.getallcondition()
      },
      getendtime:function(e){
        this.backday=e;
        this.getallcondition()
      },
      getendplace:function(e,city){
        this.returnres = e;
        this.backcity=city;
        this.getallcondition()
        console.log(city)

      },
      getbackplace:function(e,storeid){
        this.backstrict=e;
        this.backstoreid=storeid
        this.getallcondition()
        console.log(e,storeid)
      }
      ,
      gettakestrict:function(e,storeid){
        this.takestrict=e;
        this.takestoreid=storeid;
        this.getallcondition()
        console.log(e,storeid)

      },
      spot:function(res,city){
        this.res = res;
        this.takecity=city;
        this.getallcondition()
        console.log(res,city)
      },
      getallcondition:function(){
        if(this.takecity&&this.takestrict&&this.backstrict&&this.backcity&&this.backday&&this.takeday&&this.backtime&&this.taketime){
          let vm=this
          vm.conditions={
            "takecityname":vm.takecity,
            "takestore":vm.takestrict,
            "taketime":vm.takeday+' '+vm.taketime+':00',
            "backcityname":vm.backcity,
            "backstore":vm.backstrict,
            'backtime':vm.backday+' '+vm.backtime+':00',
            "takestoreid":vm.takestoreid,
            "backstoreid":vm.backstoreid,
          }

          vm.$emit('getCarlist',vm.conditions)
        }
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
                vm.$emit('getCars',vm.carlist,vm.conditions)
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
    watch:{
      defaltcity:function (newval,oldval) {

      }
    },
    mounted:function () {
    }
  }
</script>

<style scoped>
  .topclass {
    border-left: solid #dfdfe1 1px;
    box-sizing: border-box;
  }

  .x-lb{
    border-left: none;
  }
  .top-left{
    width: 82%;
    height: 100%;
    /*background-color: rgba(228, 0, 0, 0.2);*/
    display: flex;
    flex-wrap: wrap;
    padding-left: 5px;
    margin: auto 0;
  }


  .top-left1,.top-left2,.top-left3,.top-left4{
    width: 46%;
    height: 40px;
    /*background-color: red;*/

    margin-right: 2%;
    display: flex;
    border: solid 1px #dfdfe1;
    box-sizing: border-box;

  }
  .top-left1,.top-left2{
    margin-top: 20px;
  }
  .top-left3,.top-left4{
    margin-top: 10px;
  }

  .top-left1 .top-left-span,.top-left3 .top-left-span{
    width: 60px;
    height: 100%;
    /*background-color: black;*/
    line-height: 38px;
    vertical-align:middle;
    text-align: center;
  }
  .top-left2 .top-left-span,.top-left4 .top-left-span{
    width: 80px;
    height: 100%;
    /*background-color: black;*/
    line-height: 38px;
    vertical-align:middle;
    text-align: center;
  }
  /*.top-left-span:nth-child(2n){*/
    /*!*display: block;*!*/
    /*width: 80px;*/
    /*height: 100%;*/
    /*!*background-color: black;*!*/
    /*line-height: 38px;*/
    /*vertical-align:middle;*/
    /*text-align: center;*/
    /*background-color: #55a532;*/
  /*}*/

  .top-left1 input,.top-left2 input,.top-left3 input,.top-left4 input{
    width: 160px;
    height: 100%;
    margin-left: 2px;
    margin-right: 2px;
    outline: none;
    border: none;
    border-left:solid 1px #dfdfe1;

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
    left: 122px;
  }
  .top-right2{
    width: 60%;
    height: 50px;
    /*background-color: black;*/
    position: relative;
    top: 40px;
    left: 102px;
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
