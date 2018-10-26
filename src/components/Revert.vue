<template>
  <div class="container">
    <div class="top">
      <RevertTop @getCarlist="getCars" @getCars="getAllcondition" :defaltcity="mycity" :condition="conditionlist"></RevertTop>
    </div>
    <div class="main">
      <div class="left">
        <RevertLeft id="lefter" @getConditionList="getCondition"></RevertLeft>
      </div>
      <div class="right">
        <RevertRight :carlist="carlist" :condition="basecondition"></RevertRight>
        <pagination :currentPage="currentPage" :pageCount="parseInt(pageCount)" @prePage="prePage" @nextPage="nextPage" @jumpPage="jumpPage"></pagination>
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
  import axios from 'axios'
  export default {
    inject:['reload'],
    name: "Revert",
    data:function(){
      return {
        carlist:[],
        conditionlist:{
        },
        currentPage:1,
        pageCount:9,
        basecondition:{},
        mycity:'',
      }
    },
    methods:{
      handleScroll () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop>195 && scrollTop<1005){
          $("#lefter").css({'marginTop':scrollTop-210+'px'})
        }
      },
      getCars:function (e2) {
        // this.carlist=e;
        // this.conditionlist
        this.conditionlist['backcityname']=e2.backcityname
        this.conditionlist.backstore=e2.backstore
        this.conditionlist.backtime=e2.backtime
        this.conditionlist.takecityname=e2.takecityname
        this.conditionlist.takestore=e2.takestore
        this.conditionlist.taketime=e2.taketime
        this.basecondition=e2;
        console.log(this.conditionlist);
        console.log(this.basecondition)
        this.getAll()
      },
      getCondition:function (e) {
        this.conditionlist=e;
        this.currentPage=1;
        this.getAll()
      },
      getAllcondition:function(e,e2){
        this.carlist=e;
        this.basecondition=e2;
        this.currentPage=1;
        this.getAll()
      },
      getAll:function(){
        let vm=this;
        if(this.basecondition&&this.conditionlist.carJiage||this.conditionlist.carPingpai||this.conditionlist.carLeixing){
          console.log(vm.conditionlist)
          axios.post("http://127.0.0.1:8000/car/querycarbyconditions/",
            {
              "condition":{
                "takecityname":vm.basecondition.takecityname,
                "takestore":vm.basecondition.takestore,
                "taketime":vm.basecondition.taketime,
                "backcityname":vm.basecondition.backcityname,
                "backstore":vm.basecondition.backstore,
                'backtime':vm.basecondition.backtime,
                'condition':vm.conditionlist,
                'currentPage':vm.currentPage,
                'pageCount':vm.pageCount,
              },
            }, {
            })
            .then(function (res) {
              if (res.data) {
                vm.carlist = res.data
                // alert('yes')
                // vm.$emit('getCarlist',vm.carlist,vm.conditions)
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
              "takecityname":vm.basecondition.takecityname,
              "takestore":vm.basecondition.takestore,
              "taketime":vm.basecondition.taketime,
              "backcityname":vm.basecondition.backcityname,
              "backstore":vm.basecondition.backstore,
              'backtime':vm.basecondition.backtime,
              'currentPage':vm.currentPage,
              'pageCount':vm.pageCount,
            }, {
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

                // vm.$emit('getCarlist',vm.carlist,vm.conditions)
              }
            }.bind(this))
            .catch(function (err) {
              if (err.response) {
                console.log(err.response)
              }
            }.bind(this))

        }
      },
      prePage() {
        this.currentPage--;
        this.getAll()
      },
      nextPage() {
        this.currentPage++;
        // 重新渲染数据
        this.getAll()
      },
      jumpPage(pageIndex) {
        if (pageIndex > this.pageCount) {
          pageIndex = this.pageCount
        }
        if (!pageIndex || pageIndex < 1) {
          pageIndex = 1
        }
        this.currentPage = pageIndex;
        this.getAll()
      }
    },
    mounted:function () {
      window.addEventListener('scroll', this.handleScroll);
      if(this.$route.query.city){
        this.mycity=this.$route.query.city;
        this.basecondition.takecityname=this.mycity
        this.basecondition.backcityname=this.mycity
      }else{
        this.mycity='北京'
        this.basecondition.takecityname=this.mycity
        this.basecondition.backcityname=this.mycity
      }
      this.basecondition.taketime=((new Date()).getHours()+2).toString()+':00'
      this.basecondition.backtime=((new Date()).getHours()+2).toString()+':00'
      console.log(this.basecondition)
      sessionStorage.setItem("urlRevert",'Revert');
      let vm = this
      axios.post("http://127.0.0.1:8000/car/querycarbyconditions/",
        {
          "condition":{
            "takecityname":vm.basecondition.takecityname,
            "takestore":vm.basecondition.takestore,
            "taketime":vm.basecondition.taketime,
            "backcityname":vm.basecondition.backcityname,
            "backstore":vm.basecondition.backstore,
            'backtime':vm.basecondition.backtime,
            'condition':vm.conditionlist,
            'currentPage':vm.currentPage,
            'pageCount':vm.pageCount,
          },
        }, {
          headers: {
            'token': sessionStorage.getItem('token'),
          }
        })
        .then(function (res) {
          if (res.data) {
            vm.orderlist = res.data
            vm.mycity=vm.$route.query.city
            // console.log(vm.articallist);
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

<style scoped>
  body, ul, li,html {
    padding: 0;
    margin: 0;
  }
  .container {
    height: auto;
    width: 100%;
    background-color: #f2f2f2;
    padding: 0;
    /*margin: auto;*/
    /*text-align: center;*/
  }
  .main{
    display: flex;
    width: 80%;
    margin: 16px auto 32px;
  }
  .top{
    width: 100%;
    height: 145px;
    background-color: white;
    padding: 0 5%;
  }
  .left{
    width: 25%;
    height: auto;
    /*background-color: white;*/
    margin-right: 10px;
  }
  .right{
    width: 75%;
    background-color: white;
    position: relative;
    padding-bottom: 100px;

  }
  .bottom{
    width: 100%;
    height: auto;
    background-color: white;
    margin-top: 10px;
  }
  #page-divide{
    width: 100%;
    position: absolute;
    text-align: center;
    left: 0;
    bottom: 20px;
    padding-top: 30px;
  }
</style>
