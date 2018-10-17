<template>
<div>
  <div class="minute">
    <input class="minute-input" @click="change()" v-model="inputtext" type="text" placeholder="请输入时间">
    <div class="minute-div" v-if="flag" @click="timeclick($event.target)">
      <div class="minute-select">00:00</div>
      <div class="minute-select">00:30</div>
      <div class="minute-select">01:00</div>
      <div class="minute-select">01:30</div>
      <div class="minute-select">02:00</div>
      <div class="minute-select">02:30</div>
      <div class="minute-select">03:00</div>
      <div class="minute-select">03:30</div>
      <div class="minute-select">04:00</div>
      <div class="minute-select">04:30</div>
      <div class="minute-select">05:00</div>
      <div class="minute-select">05:30</div>
      <div class="minute-select">06:00</div>
      <div class="minute-select">06:30</div>
      <div class="minute-select">07:00</div>
      <div class="minute-select">07:30</div>
      <div class="minute-select">08:00</div>
      <div class="minute-select">08:30</div>
      <div class="minute-select">09:00</div>
      <div class="minute-select">09:30</div>
      <div class="minute-select">10:00</div>
      <div class="minute-select">10:30</div>
      <div class="minute-select">11:00</div>
      <div class="minute-select">11:30</div>
      <div class="minute-select">12:00</div>
      <div class="minute-select">12:30</div>
      <div class="minute-select">13:00</div>
      <div class="minute-select">13:30</div>
      <div class="minute-select">14:00</div>
      <div class="minute-select">14:30</div>
      <div class="minute-select">15:00</div>
      <div class="minute-select">15:30</div>
      <div class="minute-select">16:00</div>
      <div class="minute-select">16:30</div>
      <div class="minute-select">17:00</div>
      <div class="minute-select">17:30</div>
      <div class="minute-select">18:00</div>
      <div class="minute-select">18:30</div>
      <div class="minute-select">19:00</div>
      <div class="minute-select">19:30</div>
      <div class="minute-select">20:00</div>
      <div class="minute-select">20:30</div>
      <div class="minute-select">21:00</div>
      <div class="minute-select">21:30</div>
      <div class="minute-select">22:00</div>
      <div class="minute-select">22:30</div>
      <div class="minute-select">23:00</div>
      <div class="minute-select">23:30</div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'Time',
  data () {
    return {
      inputtext:'',
      flag:false,
    }
  },
  methods:{
    change:function(){
      this.flag=!this.flag;
    },
    timeclick:function(event){
      if(event.className=='minute-select'){
        this.inputtext=event.innerText;
        this.flag=false;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .minute{
    position: relative;
  }
  .minute .minute-input{
    position: absolute;
    left: 0;
    top: 0;
    height: 34px;
    /*border: none;*/
    /*border-left: solid 1px gray ;*/
    width: 162px;
    padding-left: 8px;
  }
  .minute .minute-div{
    background-color: white;
    z-index: 3;
    padding: 10px 0;
    position: absolute;
    left: 0;
    top: 35px;
    width: 350px;
    /*height: 200px;*/
    display: flex;
    border: rgb(255, 210, 8) solid 1px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: left;
  }
  .minute .minute-div .minute-select{
    display: inline-block;
    text-align: center;
    width: 16.6%;
    /*background-color: yellow;*/
  }
  .minute .minute-div .minute-select:hover{
    background-color: rgb(255, 210, 8);
    cursor: pointer;
    color: white;
  }

</style>
