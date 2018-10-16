<template>
<div>
  <div class="container">
    <input class="mydatepicker" type="text" placeholder="请选择时间">
  </div>
</div>

</template>

<script>
  // import $ from 'jquery'
  // import '../../static/jquery/jquery-1.8.3.min.js'
  import '../../static/bootstrap/js/dcalendar.picker'
  // import '../../static/js/bootstrap-datetimepicker.js'
  // import '../../static/js/locales/bootstrap-datetimepicker.fr.js'


export default {
  name: 'Time',
  data () {
    return {
      inputtext:'',
      flag:false,
    }
  },
  mounted:function(){
    $('.mydatepicker').dcalendarpicker({
      format:'yyyy-mm-dd'
    });
  },
  // methods:{
  //   change:function(){
  //     this.flag=!this.flag;
  //   },
  //   timeclick:function(event){
  //     if(event.className=='minute-select'){
  //       this.inputtext=event.innerText;
  //       this.flag=false;
  //     }
  //   }
  // }
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
    height: 30px;
    width: 70px;
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
