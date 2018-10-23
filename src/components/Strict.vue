<template>
<div>
  <div class="store-modle">
  <input type="text" class="store-input" v-model="inputtext" @click="change()" placeholder="请选择区">
  <div class="store-div" v-if="flag">
    <ul class="street" @click="strictclick($event.target)">
      <li v-for="(a,index) in area" v-text="a.strictname" v-bind:key="index" :id="index" @click="get"></li>
    </ul>
    <ul class="store-name" @click="storeclick($event.target)" >
      <!--<li><span class="store-strict">姑苏区</span></li>-->
      <!--<li><span class="store-strict">苏州工业园区</span></li>-->
      <!--<li><span class="store-strict">姑苏区</span></li>-->
      <!--<li><span class="store-strict">苏州工业园区</span></li>-->
      <!--<li><span class="store-strict">姑苏区</span></li>-->
      <!--<li><span class="store-strict">苏州工业园区</span></li>-->
      <!--<li><span class="store-strict">姑苏区</span></li>-->
      <!--<li><span class="store-strict">苏州工业园区</span></li>-->
      <!--<li><span class="store-strict">姑苏区</span></li>-->
      <!--<li><span class="store-strict">苏州工业园区</span></li>-->
      <!--<li><span class="store-strict">姑苏区</span></li>-->
      <!--<li><span class="store-strict">苏州工业园区</span></li>-->
      <!--<li><span class="store-strict">姑苏区</span></li>-->
      <!--<li><span clsss="store-strict">苏州工业园区</span></li>-->
      <li v-for="(s,index) in strict" :id="index" :key="index">
        <span clsss="store-strict" v-text="s.storename" :id="s.id" @mouseover="storemouseon(s.storetel,s.detailaddress,s.storetime)"></span>
      </li>
    </ul>

    <div class="store-base">
      <p>地址：<span v-text="storeDetail">工业园区星湖街328号</span></p>
      <p>营业时间：<span v-text="storeTime">9:00-18:00</span></p>
      <p>门店电话：<span v-text="storeTel">18112556043</span></p>
    </div>

  </div>
</div>
</div>

</template>

<script>
export default {
  props:['area'],
  name: 'Strict',
  data () {
    return {
      inputtext:'',
      flag:false,
      strict:[],
      storeDetail:'',
      storeTel:'',
      storeTime:'',
    }
  },
  watch:{
    area:function () {

      for(var a  of this.area){

        // console.log("循环",a.strictname);
      }
    },
  },
  methods:{
    get:function(event){
      for(var a  of this.area){
        if(a.strictname == event.target.innerText){
            this.strict = a.stores;

            break;
        }
      }
      // this.strict = event.target.innerText
    },
    change:function(){
      this.flag=!this.flag;

    },
    strictclick:function(event){
      if(event.tagName=='LI'){
        for(let i of event.parentElement.children){
          i.style.backgroundColor='#f5f5f9';
          i.style.color='#adadad';
        }
        event.style.backgroundColor=' rgb(255, 210, 8)';
        event.style.color='white';
      }
    },
    storeclick:function (event) {
      if(event.tagName=='LI'){
        this.inputtext=event.children[0].innerText;
        this.flag=false;
        this.$emit('getplace',this.inputtext,event.children[0].id)
      }
    },
    storemouseon:function (storetel,detailaddress,storetime) {
      this.storeTel=storetel
      this.storeDetail=detailaddress
      this.storeTime=storetime
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  input{
    outline: none;
  }
  ul{
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .store-modle{
    position: relative;
  }
  .store-modle .store-input{
    font-size: 16px;
    position: absolute;
    left: 0;
    height: 40px;
    width: 178px;
    color: #757575;
    border: none;
    /*border-left: solid 1px gray;*/
    padding-left: 8px;
  }
  .store-modle .store-div{
    z-index: 3;
    background-color: white;
    /*display: none;*/
    position: absolute;
    top: 40px;
    left: 0;
    /*height: 400px;*/
    width: 770px;
    border: #fabe00 solid 1px;
  }
  ul.street{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-items: left;
    border-bottom: #fabe00 solid 1px;
  }
  ul.street li{
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #c8c8c8;
    background-color: #ebebef;
  }
  ul.street li:hover{
    cursor: pointer;
    color:white;
    background-color: rgb(255, 210, 8);
  }
  ul.street li span{
    margin:20px 5px;
    font-size: 14px;
  }
  ul.store-name{
    padding: 10px 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-items: left;
    border-bottom: #fabe00 solid 1px;
    background-color: #fffbf3;
  }
  ul.store-name li{
    box-sizing: border-box;
    /*margin-top: 10px;*/
    /*height: 18px;*/
    width: 25%;
    margin-bottom: 10px;
    font-size: 14px;
    color: #9d9d9d;
    /*background-color: #ebebef;*/
  }

  ul.store-name li:hover{
    cursor: pointer;
    color:white;
    background-color: rgb(255, 210, 8);
  }
  ul.store-name li span{
    box-sizing: border-box;
    margin:20px 5px;
    font-size: 14px;
  }
  .store-base p{
    padding: 0;
    margin: 10px 20px;
    font-size: 14px;
    color: #9d9d9d;
  }

  .minute{
    position: relative;
  }
  .minute .minute-input{
    position: absolute;
    left: 0;
    top: 0;
    height: 30px;
    width: 80px;
  }
  .minute .minute-div{
    background-color: white;
    z-index: 3;
    padding: 10px 0;
    position: absolute;
    left: 0;
    top: 35px;
    width: 360px;
    /*height: 200px;*/
    border: rgb(255, 210, 8) solid 1px;
    display: none;
    flex-wrap: wrap;
    align-items: center;
    justify-content: left;
  }
  .minute .minute-div .minute-select{
    text-align: center;
    width: 16.6%;
    /*background-color: yellow;*/
  }
  .minute .minute-div .minute-select:hover {
    cursor: pointer;
  }
</style>
