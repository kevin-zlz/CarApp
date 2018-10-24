<template>
<div>
  <div class="city-style">
    <input type="text" @click="change()" class="s_city1" v-model="clock" placeholder="选择城市" >
    <div  class="select-city" v-if="iscityclick">
      <ul class="popup_title" @click="changtitle($event)">
        <li class="title0" >热门城市</li>
        <li class="title1" >旅游城市</li>
        <li class="title2" >ABCD</li>
        <li class="title3" >EFGHJ</li>
        <li class="title4" >KLMNPQ</li>
        <li class="title5" >RSTW</li>
        <li class="title6" >XYZ</li>
      </ul>
      <ul class="popup_content" @click="clicktext($event)">
        <li class="cur" style="display: inline-block">
          <a href="####" class="city-name">北京</a>
          <a href="####" class="city-name">广州</a>
          <a href="####" class="city-name">深圳</a>
          <a href="####" class="city-name">上海</a>
          <a class="city-name">重庆</a>
          <a class="city-name">长沙</a>
          <a class="city-name">成都</a>
          <a class="city-name">大连</a>
          <a class="city-name">福州</a>
          <a class="city-name">杭州</a>
          <a class="city-name">济南</a>
          <a class="city-name">昆明</a>
          <a class="city-name">南京</a>
          <a class="city-name">青岛</a>
          <a class="city-name">三亚</a>
          <a class="city-name">天津</a>
          <a class="city-name">武汉</a>
          <a class="city-name">西安</a>
          <a class="city-name">厦门</a>
          <a class="city-name">郑州</a>
        </li>
        <li class="play" v-show="">
          <a class="city-name">北海</a>
          <a class="city-name">长白山</a>
          <a class="city-name">大理</a>
          <a class="city-name">敦煌</a>
          <a class="city-name">贵阳</a>
          <a class="city-name">桂林</a>
          <a class="city-name">黄山</a>
          <a class="city-name">嘉峪关</a>
          <a class="city-name">九江</a>
          <a class="city-name">克拉玛依</a>
          <a class="city-name">兰州</a>
          <a class="city-name">洛阳</a>
          <a class="city-name">南宁</a>
          <a class="city-name">腾冲</a>
          <a class="city-name">乌鲁木齐</a>
          <a class="city-name">武夷山</a>
          <a class="city-name">西宁</a>
          <a class="city-name">西双版纳</a>
          <a class="city-name">银川</a>
        </li >
        <li class="city-ABCD" v-show="">
          <div class="letterbox">
            <b class="cityzmletter">A</b>
            <div class="inner">
              <span  class="">阿尔山</span>
              <span  class="">安康</span>
              <span  class="">安庆</span>
              <span  class="">鞍山</span>
              <span >安顺</span>
            </div>

          </div>
          <div class="letterbox">
            <b class="cityzmletter">B</b>
            <div class="inner">
              <span  class="">北京</span>
              <span >保定</span>
              <span  class="">宝鸡</span>
              <span class="">包头</span>
              <span class="">巴彦淖尔</span>
              <span  class="">北海</span>
              <span >蚌埠</span>
              <span class="">本溪</span>
              <span  class="">博鳌</span>
            </div>
          </div>
          <div class="letterbox">
            <b class="cityzmletter">C</b>
            <div class="inner">
              <span >重庆</span>
              <span >长春</span>
              <span  class="">长沙</span>
              <span >成都</span>
              <span  class="">苍南</span>
              <span >沧州</span>
              <span >长白山</span>
              <span class="">常德</span>
              <span >常熟</span>
              <span class="">长治</span>
              <span >常州</span>
              <span >巢湖</span>
              <span class="">潮州</span>
              <span >承德</span>
              <span >郴州</span>
              <span>赤峰</span>
              <span>池州</span>
              <span class="">滁州</span>
            </div>

          </div>
          <div class="letterbox">
            <b class="cityzmletter">D</b>
            <div class="inner">
              <span >大理</span>
              <span >大连</span>
              <span>丹东</span>
              <span >当涂</span>
              <span >儋州</span>
              <span >稻城</span>
              <span >大庆</span>
              <span class="">大同</span>
              <span >邓州</span>
              <span >德阳</span>
              <span >德州</span>
              <span >定安</span>
              <span >东港</span>
              <span >东莞</span>
              <span >东营</span>
              <span >都江堰</span>
              <span >敦煌</span>
              <span >多伦</span>
              <span >都匀</span>
            </div>
          </div>
        </li>
        <li class="city-EFGHJ" v-show="">
          <div class="letterbox">
            <b class="cityzmletter">E</b>
            <div class="inner">
              <span  class="">鄂尔多斯</span>
              <span  class="">恩施</span>
              <span  class="">鄂州</span>
            </div>

          </div>
          <div class="letterbox">
            <b class="cityzmletter">F</b>
            <div class="inner">
              <span  class="">福州</span>
              <span >奉化</span>
              <span  class="">佛山</span>
              <span class="">福清</span>
              <span class="">抚顺</span>
              <span  class="">富阳</span>
              <span >蚌埠</span>
              <span class="">阜阳</span>
              <span  class="">抚州</span>
            </div>
          </div>
          <div class="letterbox">
            <b class="cityzmletter">G</b>
            <div class="inner">
              <span >广州</span>
              <span >贵阳</span>
              <span  class="">赣州</span>
              <span >公安</span>
              <span  class="">广元</span>
              <span >贵港</span>
              <span >桂林</span>
              <span class="">固原</span>
              <span >常熟</span>
              <span class="">长治</span>
              <span >常州</span>
              <span >巢湖</span>
              <span class="">潮州</span>
              <span >承德</span>
              <span >郴州</span>
              <span>赤峰</span>
              <span>池州</span>
              <span class="">滁州</span>
            </div>
          </div>
          <div class="letterbox">
            <b class="cityzmletter">H</b>
            <div class="inner">
              <span >哈尔滨</span>
              <span >海口</span>
              <span>杭州</span>
              <span >合肥</span>
              <span >呼和浩特</span>
              <span >海宁</span>
              <span >邯郸</span>
              <span class="">含山</span>
              <span >汉中</span>
              <span >河津</span>
              <span >衡阳</span>
              <span >河源</span>
              <span >贺州</span>
              <span >侯马</span>
              <span >淮安</span>
              <span >怀化</span>
              <span >淮南</span>
              <span >黄冈</span>
              <span >黄山</span>
              <span >葫芦岛</span>
              <span >呼伦贝尔</span>
              <span >霍林郭勒</span>
            </div>
          </div>
          <div class="letterbox">
            <b class="cityzmletter">J</b>
            <div class="inner">
              <span >济南</span>
              <span >佳木斯</span>
              <span>吉安</span>
              <span >江门</span>
              <span >江阴</span>
              <span >监利</span>
              <span >简阳</span>
              <span class="">嘉兴</span>
              <span >嘉峪关</span>
              <span >揭阳</span>
              <span >吉林</span>
              <span >景德镇</span>
              <span >靖江</span>
              <span >荆门</span>
              <span >京山</span>
              <span >荆州</span>
              <span >金华</span>
              <span >济宁</span>
              <span >晋中</span>
              <span >葫芦岛</span>
              <span >左权</span>
              <span >锦州</span>
              <span >九江</span>
              <span >九寨沟</span>
            </div>
          </div>
        </li>
        <li class="city-KLMNPQ" v-show="">
          <div class="letterbox">
            <b class="cityzmletter">K</b>
            <div class="inner">
              <span  class="">昆明</span>
              <span  class="">开封</span>
              <span  class="">凯里</span>
              <span  class="">克拉玛依</span>
              <span  class="">库尔勒</span>
              <span  class="">昆山</span>
            </div>
          </div>
          <div class="letterbox">
            <b class="cityzmletter">L</b>
            <div class="inner">
              <span  class="">兰州</span>
              <span >拉萨</span>
              <span  class="">廊坊</span>
              <span class="">乐山</span>
              <span class="">连云港</span>
              <span  class="">聊城</span>
              <span >辽阳</span>
              <span class="">丽江</span>
              <span  class="">临汾</span>
              <span  class="">临高</span>
              <span  class="">凌海</span>
              <span  class="">柳州</span>
              <span  class="">澧县</span>
              <span  class="">龙岩</span>
              <span  class="">娄底</span>
              <span  class="">六安</span>
              <span  class="">漯河</span>
              <span  class="">洛阳</span>
              <span  class="">泸州</span>
              <span  class="">吕梁</span>
            </div>
          </div>
          <div class="letterbox">
            <b class="cityzmletter">M</b>
            <div class="inner">
              <span >马鞍山</span>
              <span >麻城</span>
              <span  class="">满洲里</span>
              <span >茂名</span>
              <span  class="">眉山</span>
              <span >梅州</span>
              <span >牡丹江</span>
              <span class="">绵阳</span>
            </div>
          </div>
          <div class="letterbox">
            <b class="cityzmletter">N</b>
            <div class="inner">
              <span >南昌</span>
              <span >南京</span>
              <span>南宁</span>
              <span >南充</span>
              <span >南通</span>
              <span >南阳</span>
              <span >宁波</span>
            </div>
          </div>
          <div class="letterbox">
            <b class="cityzmletter">P</b>
            <div class="inner">
              <span >萍乡</span>
              <span >普宁</span>
              <span>潜江</span>
              <span >蕲春</span>
              <span >青岛</span>
              <span >清远</span>
              <span >秦皇岛</span>
              <span class="">钦州</span>
              <span >琼海</span>
              <span >齐齐哈尔</span>
              <span >泉州</span>
              <span >曲阜</span>
              <span >曲靖</span>
              <span >衢州</span>
            </div>
          </div>
        </li>
        <li class="city-RSTW" v-show="">
          <div class="letterbox">
            <b class="cityzmletter">K</b>
            <div class="inner">
              <span  class="">昆明</span>
              <span  class="">开封</span>
              <span  class="">凯里</span>
              <span  class="">克拉玛依</span>
              <span  class="">库尔勒</span>
              <span  class="">昆山</span>
            </div>
          </div>
          <div class="letterbox">
            <b class="cityzmletter">L</b>
            <div class="inner">
              <span  class="">兰州</span>
              <span >拉萨</span>
              <span  class="">廊坊</span>
              <span class="">乐山</span>
              <span class="">连云港</span>
              <span  class="">聊城</span>
              <span >辽阳</span>
              <span class="">丽江</span>
              <span  class="">临汾</span>
              <span  class="">临高</span>
              <span  class="">凌海</span>
              <span  class="">柳州</span>
              <span  class="">澧县</span>
              <span  class="">龙岩</span>
              <span  class="">娄底</span>
              <span  class="">六安</span>
              <span  class="">漯河</span>
              <span  class="">洛阳</span>
              <span  class="">泸州</span>
              <span  class="">吕梁</span>
            </div>
          </div>
          <div class="letterbox">
            <b class="cityzmletter">M</b>
            <div class="inner">
              <span >马鞍山</span>
              <span >麻城</span>
              <span  class="">满洲里</span>
              <span >茂名</span>
              <span  class="">眉山</span>
              <span >梅州</span>
              <span >牡丹江</span>
              <span class="">绵阳</span>
            </div>
          </div>
          <div class="letterbox">
            <b class="cityzmletter">N</b>
            <div class="inner">
              <span >南昌</span>
              <span >南京</span>
              <span>南宁</span>
              <span >南充</span>
              <span >南通</span>
              <span >南阳</span>
              <span >宁波</span>
            </div>
          </div>
          <div class="letterbox">
            <b class="cityzmletter">P</b>
            <div class="inner">
              <span >萍乡</span>
              <span >普宁</span>
              <span>潜江</span>
              <span >蕲春</span>
              <span >青岛</span>
              <span >清远</span>
              <span >秦皇岛</span>
              <span class="">钦州</span>
              <span >琼海</span>
              <span >齐齐哈尔</span>
              <span >泉州</span>
              <span >曲阜</span>
              <span >曲靖</span>
              <span >衢州</span>
            </div>
          </div>
        </li>
        <li class="city-XYZ" v-show="">
          <div class="letterbox">
            <b class="cityzmletter">K</b>
            <div class="inner">
              <span  class="">昆明</span>
              <span  class="">开封</span>
              <span  class="">凯里</span>
              <span  class="">克拉玛依</span>
              <span  class="">库尔勒</span>
              <span  class="">昆山</span>
            </div>
          </div>
          <div class="letterbox">
            <b class="cityzmletter">L</b>
            <div class="inner">
              <span  class="">兰州</span>
              <span >拉萨</span>
              <span  class="">廊坊</span>
              <span class="">乐山</span>
              <span class="">连云港</span>
              <span  class="">聊城</span>
              <span >辽阳</span>
              <span class="">丽江</span>
              <span  class="">临汾</span>
              <span  class="">临高</span>
              <span  class="">凌海</span>
              <span  class="">柳州</span>
              <span  class="">澧县</span>
              <span  class="">龙岩</span>
              <span  class="">娄底</span>
              <span  class="">六安</span>
              <span  class="">漯河</span>
              <span  class="">洛阳</span>
              <span  class="">泸州</span>
              <span  class="">吕梁</span>
            </div>
          </div>
          <div class="letterbox">
            <b class="cityzmletter">M</b>
            <div class="inner">
              <span >马鞍山</span>
              <span >麻城</span>
              <span  class="">满洲里</span>
              <span >茂名</span>
              <span  class="">眉山</span>
              <span >梅州</span>
              <span >牡丹江</span>
              <span class="">绵阳</span>
            </div>
          </div>
          <div class="letterbox">
            <b class="cityzmletter">N</b>
            <div class="inner">
              <span >南昌</span>
              <span >南京</span>
              <span>南宁</span>
              <span >南充</span>
              <span >南通</span>
              <span >南阳</span>
              <span >宁波</span>
            </div>
          </div>
          <div class="letterbox">
            <b class="cityzmletter">P</b>
            <div class="inner">
              <span >萍乡</span>
              <span >普宁</span>
              <span>潜江</span>
              <span >蕲春</span>
              <span >青岛</span>
              <span >清远</span>
              <span >秦皇岛</span>
              <span class="">钦州</span>
              <span >琼海</span>
              <span >齐齐哈尔</span>
              <span >泉州</span>
              <span >曲阜</span>
              <span >曲靖</span>
              <span >衢州</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

</template>

<script>
  import axios from 'axios'
  export default {
    name: 'City',
    data () {
      return {
        clock: '选择城市',
        nums: '',

        istitleclick: false,
        iscityclick:false,
      }
    },
    methods:{
      change:function () {
          this.iscityclick=!this.iscityclick;

      },
      changtitle:function (event) {
          // console.log(event.target.className)

          for(let i of event.target.parentElement.children){
            i.style.borderBottom='none'
          }
          // for(let i of event.target.parentElement.nextElementSibling.children){
          //   i.style.display='none'
          // }
          if(event.target.className=='title0'){
            event.target.style.borderBottom='#fabe00 solid 2px'
            for(let i of event.target.parentElement.nextElementSibling.children){
              i.style.display='none'
              if(i.className=='cur'){
                i.style.display='inline-block'
              }
            }
          }else if(event.target.className=='title1'){
            event.target.style.borderBottom='#fabe00 solid 2px'
            for(let i of event.target.parentElement.nextElementSibling.children){
              i.style.display='none'
              if(i.className=='play'){
                i.style.display='inline-block'
              }
            }
          }else if(event.target.className=='title2'){
            event.target.style.borderBottom='#fabe00 solid 2px'
            for(let i of event.target.parentElement.nextElementSibling.children){
              i.style.display='none'
              if(i.className=='city-ABCD'){
                i.style.display='inline-block'
              }
            }
          }else if(event.target.className=='title3'){
            event.target.style.borderBottom='#fabe00 solid 2px'
            for(let i of event.target.parentElement.nextElementSibling.children){
              i.style.display='none'
              if(i.className=='city-EFGHJ'){
                i.style.display='inline-block'
              }
            }
          }else if(event.target.className=='title4'){
            event.target.style.borderBottom='#fabe00 solid 2px'
            for(let i of event.target.parentElement.nextElementSibling.children){
              i.style.display='none'
              if(i.className=='city-KLMNPQ'){
                i.style.display='inline-block'
              }
            }
          }else if(event.target.className=='title5'){
            event.target.style.borderBottom='#fabe00 solid 2px'
            for(let i of event.target.parentElement.nextElementSibling.children){
              i.style.display='none'
              if(i.className=='city-RSTW'){
                i.style.display='inline-block'
              }
            }
          }else if(event.target.className=='title6'){
            event.target.style.borderBottom='#fabe00 solid 2px'
            for(let i of event.target.parentElement.nextElementSibling.children){
              i.style.display='none'
              if(i.className=='city-XYZ'){
                i.style.display='inline-block'
              }
            }
          }
        },
      clicktext:function (event) {
        if(event.target.tagName=='A'||event.target.tagName=='SPAN'){

          this.clock=event.target.innerText;
          this.iscityclick=false;
          this.$emit("mycity",event.target.innerHTML);
        }
      }
    },
    watch:{
      clock:function (newval,oldval) {
        // console.log(newval,oldval);
        // alert(newval);
        let vm=this;
        axios.post("http://127.0.0.1:8000/car/querycitystore/",
          {'cityname': newval
          },{
            // headers: {
            //   'Content-Type': 'application/json',
            // }
          })
          .then(function (res) {
            vm.$emit("spot",res.data,vm.clock)
            // console.log(typeof res.data)
            // console.log(res.data[0].stores);
            // console.log(res.data[0].strictname);
            // vm.$emit("spot",JSON.stringify(res));
            // console.log(res)
            // console.log(JSON.stringify(res.data));
            // console.log(JSON.stringify(res.data));
          }.bind(this))
          .catch(function (err) {
            if (err.response) {
              console.log(err.response)
              //控制台打印错误返回的内容
            }
            //bind(this)可以不用
          }.bind(this))
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .city-style{
    position: relative;
    display: inline-block;
  }
  .s_city1{
    margin-top: 0px;
    margin-left: 0;
    display: inline;
    padding-left: 8px;
    height: 38px;
    width: 163px;
    border: none;
    /*border-left: solid 1px #ababab;*/
    font-size: 16px;
    color: #777;
    /* 点击无边框*/
    outline: none;
  }
  .s_city2{
    display: inline;
    height: 30px;
    width: 250px;
  }
  .select-city{
    position: absolute;
    border: #fabe00 solid 1px;
    background-color: white;
    width: 500px;
    /*padding: 0 10px ;*/
    box-sizing: border-box;
    z-index: 3;
  }
  .select-city .popup_title{
    /*margin:0 30px;*/
    list-style: none;
    border-bottom: #f2f3f5 solid 2px;
    box-sizing: border-box;
  }
  .select-city .popup_title li{
    font-size: 15px;
    color: darkgray;
    text-align: left;
    display: inline-block;
    /*margin-left: 7px;*/
    margin-right: 7px;
    line-height: 40px;
    /*width:67px ;*/
    height:40px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .select-city .popup_title li:first-child{
    border-bottom: #fabe00 solid 2px;
  }
  .select-city .popup_title li:hover{
    cursor: pointer;
  }
  .popup_content li.cur{
    display: inline-block;
  }
  .popup_content li.cur a.city-name{
    display: inline-block;
    margin-right: 10px;
    background-color: #f4f6f9;
    width: 55px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    /*margin-bottom: 10px;*/
    box-sizing: border-box;
    text-decoration: none;
  }
  .popup_content li a.city-name:hover{
    background-color: #fabe00;
    cursor: pointer;
  }
  .popup_content li.play{
    display: none;
  }
  li.play a.city-name{
    display: inline-block;
    margin-left: 10px;
    background-color: #f4f6f9;
    width: 65px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    box-sizing: border-box;
    text-decoration: none;
  }
  .popup_content li.city-ABCD{
    display: none;
  }
  .popup_content li.city-EFGHJ{
    display: none;
  }
  .popup_content li.city-KLMNPQ{
    display: none;
  }
  .popup_content li.city-RSTW{
    display: none;
  }
  .popup_content li.city-XYZ{
    display: none;
  }
  .popup_content div.letterbox{
    display: flex;
  }
  .popup_content div.letterbox b{
    margin-top: 13px;
    width: 10px;
    color: #ffa881;
    box-sizing: border-box;
  }
  .popup_content li div.letterbox .inner{
    width: 95%;
    padding-left: 10px;
    /*border: red solid 1px;*/
    box-sizing: border-box;
  }
  .popup_content li div.letterbox span{
    display: inline-block;
    margin-left: 10px;
    background-color: #f4f6f9;
    width: 65px;
    text-align: center;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
    box-sizing: border-box;
  }
  .popup_content li div.letterbox span:hover{
    background-color: #fabe00;
    cursor: pointer;
  }

</style>
