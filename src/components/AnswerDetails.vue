<template>
  <div>
    <div class="container">
      <div class="top">
        <!--<div class="title"> <b style="font-size: 20px">买新能源车要注意哪些事项呢？</b></div>-->
        <!--<div class="person">提问者: <span style="color: black">Jack</span></div>-->
        <div class="content" v-text="aritical.content">
          现如今，由于限牌还有油价上涨等因素的制约，越来越多的人选择使用新能源的交通工具，其中最被人们看好的，就是电动汽车。再者，随着电动汽车技术的突飞猛进，汽车的电动化也是一个未来大趋势。很多人出于无奈对燃油车可望而不可即，或者对电动车的追捧从而纷纷选择电动汽车，但是在购买电动车，尤其是纯电动车之前，这五件事必须要考虑清楚。
        </div>
        <div class="zan" >
          <img src="../../static/images/zan.png" alt="" style="cursor: pointer;" @click="loving(aritical.id)">
          <span v-text="aritical.starnum"> 1 <span>赞</span></span>
          <img src="" alt="" class="touxiang">
          <div>
            <span v-for="star in starlist" v-text="star.liker__uname">Rose</span>
          </div>
        </div>
      </div>
      <div class="main" style="display: flex">
        <div class="pinglun">
          <div class="pinglun-i" v-for="commener in commenlist">
            <div class="who">
              <img src="../../static/images/touxiang.jpg" alt="">
              <span class="name" v-text="commener.commener__uname">Rose</span>
              <span class="time" v-text="commener.pubtime">2018-10-09 15:48:42</span>
            </div>
            <div class="neirong" v-text="commener.content">就目前来看，传统车企的新能源汽车做得是相当不错。</div>
            <div class="deletecontainer" v-if="commener.commener__telephone==telephone"><span @click="deleteCommen(commener.id)">删除</span></div>
          </div>
          <!--<div class="pinglun-i">-->
            <!--<div class="who">-->
              <!--<img src="../../static/images/touxiang.jpg" alt="">-->
              <!--<span class="name">Rose</span>-->
              <!--<span class="time">2018-10-09 15:48:42</span>-->
            <!--</div>-->
            <!--<div class="neirong">不但是在传统燃油车领域的表现令人惊叹，在新能源汽车领域的表现同样也是表现抢眼，包括纯电动的帝豪EV450以及帝豪PHEV等车型的市场口碑和销量都很不错。另外，比亚迪汽车也是很优秀，旗下产品多样，而且产品线齐全，包括唐DM、元EV、秦EV以及宋DM等车型产品，都是产品力非常出彩的</div>-->
          <!--</div>-->
          <!--<div class="pinglun-i">-->
            <!--<div class="who">-->
              <!--<img src="../../static/images/touxiang.jpg" alt="">-->
              <!--<span class="name">Rose</span>-->
              <!--<span class="time">2018-10-09 15:48:42</span>-->
            <!--</div>-->
            <!--<div class="neirong">就目前来看，传统车企的新能源汽车做得是相当不错。比如说吉利汽车，吉利汽车这几年进步十分巨大，不但是在传统燃油车领域的表现令人惊叹，在新能源汽车领域的表现同样也是表现抢眼，包括纯电动的帝豪EV450以及帝豪PHEV等车型的市场口碑和销量都很不错。另外，比亚迪汽车也是很优秀，旗下产品多样，而且产品线齐全，包括唐DM、元EV、秦EV以及宋DM等车型产品，都是产品力非常出彩的</div>-->
          <!--</div>-->
        </div>
        <div class="tiwen">
          <!--<div class="tiwen-jianjie">提问者简介</div>-->
          <!--<div class="tiwen-name">Jack</div>-->
          <div class="tiwen-ul">
            <ul style="width: 100%;height: 40px;display: flex">
              <li>回答数</li>
              <li>赞</li>
            </ul>
            <ul style="width: 100%;height: 80px;display: flex;">
              <li>446</li>
              <li>1766</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="bottom-header">
          <div class="bottom-header-left"></div>
          <span style="color: black;font-weight: 600;line-height: 40px;text-indent: 10px">本文精彩评论</span>
        </div>
        <div class="bottom-middle">
          <textarea name="pinglun" id="" cols="104" rows="6.5" style="resize: none;" v-model="comment" placeholder="字数在150字以内..." maxlength="150"></textarea>
          <button class="btn" @click="commitcommmen(aritical.id)">提交</button>
        </div>
      </div>
    </div>
    <RevertBottom></RevertBottom>
  </div>
</template>

<script>
import axios from 'axios'
export default {
        name: "AnswerDetails",

        methods:{
          getdata:function () {
            let vm=this
            axios.post("http://127.0.0.1:8000/boke/queryAriticalByaid/",
              {
                'aid':vm.$route.query.selected
              },{
                // headers: {
                //   'Content-Type': 'application/json',
                // }
              })
              .then(function (res) {
                if(res.data){
                  console.log(res.data)
                  vm.aritical=res.data[0]
                  console.log(vm.aritical);
                  // vm.articallist=res.data

                }
              }.bind(this))
              .catch(function (err) {
                if (err.response) {
                  console.log(err.response)
                }
              }.bind(this))

            axios.post("http://127.0.0.1:8000/boke/queryCommentbyaid/",
              {
                'aid':vm.$route.query.selected
              },{
                // headers: {
                //   'Content-Type': 'application/json',
                // }
              })
              .then(function (res) {
                if(res.data){
                  console.log(res.data)
                  vm.commenlist=res.data
                  console.log(vm.commenlist);
                  // vm.articallist=res.data

                }
              }.bind(this))
              .catch(function (err) {
                if (err.response) {
                  console.log(err.response)
                }
              }.bind(this))

            axios.post("http://127.0.0.1:8000/boke/queryLikebyaid/",
              {
                'aid':vm.$route.query.selected
              },{
                // headers: {
                //   'Content-Type': 'application/json',
                // }
              })
              .then(function (res) {
                if(res.data){
                  console.log(res.data)
                  vm.starlist=res.data
                  console.log(vm.starlist);
                  // vm.articallist=res.data

                }
              }.bind(this))
              .catch(function (err) {
                if (err.response) {
                  console.log(err.response)
                }
              }.bind(this))

          },
          commitcommmen:function (e) {
            let vm=this
            if(sessionStorage.getItem('token')){
              sessionStorage.setItem('frompagepath','/det')
              vm.telephone=sessionStorage.getItem('telephone')
              console.log('tel'+vm.telephone)
              axios.post("http://127.0.0.1:8000/boke/addComment/",
                {
                  'aid':vm.aritical.id,
                  'content':vm.comment,
                },{
                  headers: {
                    'token': sessionStorage.getItem('token'),
                  }
                })
                .then(function (res) {
                  if(res.data){
                    console.log(res.data)
                    window.location.reload()
                  }
                }.bind(this))
                .catch(function (err) {
                  if (err.response) {
                    console.log(err.response)
                  }
                }.bind(this))

            }else{
              this.$router.push({path: '/login', query: {selected: e}});
            }
          },
          deleteCommen:function (e) {
            console.log(e)
            axios.post("http://127.0.0.1:8000/boke/deteleCommentByCid/",
              {
                'cid':e,
              },{
                headers: {
                  'token': sessionStorage.getItem('token'),
                }
              })
              .then(function (res) {
                if(res.data.code=='208'){
                  window.location.reload()
                }
              }.bind(this))
              .catch(function (err) {
                if (err.response) {
                  console.log(err.response)
                }
              }.bind(this))
          },
          loving:function (e) {
            let vm=this
            alert(vm.isloved)
            if(vm.isloved){
              console.log(e)
              axios.post("http://127.0.0.1:8000/boke/deletelike/",
                {
                  'aid':e,
                },{
                  headers: {
                    'token': sessionStorage.getItem('token'),
                  }
                })
                .then(function (res) {
                  if(res.data){
                    console.log(res.data);
                    window.location.reload()
                    vm.isloved=false;
                  }
                }.bind(this))
                .catch(function (err) {
                  if (err.response) {
                    console.log(err.response)
                  }
                }.bind(this))


            }else{
              console.log(e)
              axios.post("http://127.0.0.1:8000/boke/addLike/",
                {
                  'aid':e,
                },{
                  headers: {
                    'token': sessionStorage.getItem('token'),
                  }
                })
                .then(function (res) {
                  if(res.data){
                    window.location.reload()
                    vm.isloved=true;
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
        data () {
        return {
          aritical:{},
          commenlist:[],
          starlist:[],
          comment:'',
          telephone:'',
          isloved:false
        }
      },
        mounted:function () {
        let vm=this
        axios.post("http://127.0.0.1:8000/boke/queryAriticalByaid/",
          {
            'aid':vm.$route.query.selected
          },{
            // headers: {
            //   'Content-Type': 'application/json',
            // }
          })
          .then(function (res) {
            if(res.data){
              console.log(res.data)
              vm.aritical=res.data[0]
              console.log(vm.aritical);
              // vm.articallist=res.data
              if(sessionStorage.getItem('token')) {
                vm.telephone = sessionStorage.getItem('telephone')
              }
            }
          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              console.log(err.response)
            }
          }.bind(this))

          axios.post("http://127.0.0.1:8000/boke/queryCommentbyaid/",
            {
              'aid':vm.$route.query.selected
            },{
              // headers: {
              //   'Content-Type': 'application/json',
              // }
            })
            .then(function (res) {
              if(res.data){
                console.log(res.data)
                vm.commenlist=res.data
                console.log(vm.commenlist);
                // vm.articallist=res.data

              }
            }.bind(this))
            .catch(function (err) {
              if (err.response) {
                console.log(err.response)
              }
            }.bind(this))

          axios.post("http://127.0.0.1:8000/boke/queryLikebyaid/",
            {
              'aid':vm.$route.query.selected
            },{
              // headers: {
              //   'Content-Type': 'application/json',
              // }
            })
            .then(function (res) {
              if(res.data){
                vm.starlist=res.data

                if(sessionStorage.getItem('telephone')){
                  console.log(sessionStorage.getItem('telephone'))
                  console.log(res.data)
                  for(let i=0;i<vm.starlist.length;i++){
                    console.log(vm.starlist[i])
                    if(vm.starlist[i].liker__telephone==sessionStorage.getItem('telephone')){
                      vm.isloved=true;
                    }
                  }
                }

              }
            }.bind(this))
            .catch(function (err) {
              if (err.response) {
                console.log(err.response)
              }
            }.bind(this))

      },

    }
</script>

<style scoped>
  ul,li{
    list-style-type: none;
  }
  .container{
    width: 80%;
    height: auto;
    background-color: rgba(0, 0, 0, 0.05);
  }
  .top{
    margin-top: 10px;
    width: 95%;
    height: auto;
    background-color: white;
    padding-left: 5px;
    margin: auto;
  }
  .person{
    font-size: 15px;
    margin-top: 5px;
    color: gray;
  }
  .deletecontainer{
    height: 30px;
    position: relative;
  }
  .deletecontainer span{
    position: absolute;
    left: 510px;
  }
  .deletecontainer span:hover{
    cursor: pointer;
  }
  .content{
    height: 110px;
    width: 90%;
    /*background-color: #22A7F0;*/
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    font-size: 15px;
    padding-top: 20px;
  }

  .zan{
    padding-left: 15px;
  }

  .touxiang{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-left: 10px;
  }

  .main{
    width: 100%;
    height: auto;
    /*background-color: aqua;*/
    margin-bottom: 20px;
  }
  .pinglun{
    width: 70%;
    height: auto;
    /*background-color: black;*/
  }
  .pinglun-i{
    width: 85%;
    height: auto;
    background-color: white;
    margin-top: 20px;
    margin-left: 24px;
    position: relative;
    margin-bottom: 10px;
  }
  .who{
    margin-top: 10px;
    width: 100%;
    height: 50px;
    /*background-color: rgba(0, 0, 0, 0.09);*/
  }
  .who img{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 10px;
    margin-right: 10px;
  }
  .time{
    position: absolute;
    right: 20px;
    top: 5px;
    font-size: 18px;
    /*color: rgba(0, 0, 0, 0.67);*/
  }
  .neirong{
    width: 90%;
    height: auto;
    /*background-color: gray;*/
    margin-left: 10px;
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
    padding-bottom: 15px;
  }
  .tiwen{
    width: 30%;
    height: 150px;
    background-color: white;
    margin-top: 20px;
  }
  .tiwen-jianjie{
    width: 100%;
    height: 50px;
    /*background-color: red;*/
    text-indent: 10px;
    font-size: 25px;
    color: rgba(0, 0, 0, 0.56);
    line-height: 50px;
  }
  .tiwen-name{
    width: 100%;
    height: 80px;
    line-height: 80px;
    font-size: 30px;
    color: rgba(0, 0, 0, 0.56);
    text-indent: 40%;
    /*background-color: rgba(255, 0, 0, 0.34);*/
  }
  .tiwen-ul{
    width: 100%;
    height: 110px;
    /*background-color: rgba(0, 0, 0, 0.16);*/
  }

  .tiwen-ul li{
    width: 90px;
    margin-right: 20px;
    font-size: 20px;
    height: 40px;
    /*background-color: black;*/
    padding-left: 20px;
    padding-top: 10px;
  }
  .bottom{
    width: 90%;
    height: 200px;
    background-color: white;
    margin-bottom: 20px;
  }
  .bottom-header{
    width: 100%;
    display: flex;
    height: 40px;
    /*background-color: rgba(34, 167, 240, 0.09);*/
  }
  .bottom-header-left{
    width: 20px;
    height: 100%;
    background-color: #22A7F0;
  }
  .bottom-middle{
    margin-top: 20px;
    width: auto;
    height: 127px;
    display: flex;
    /*background-color: red;*/
  }
  .btn{
    margin-left: 20px;
    width: 150px;
    height: 100px;
    border-radius: 5px;
    background-color: rgba(128, 128, 128, 0.52);
    border: none;
    color: white;
    font-size: 17px;
    font-weight: 600;
  }
</style>
