<template>
<div>
  <div>
    <input class="mydatepicker" type="text" placeholder="请选择日期">
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
  .mydatepicker{
    border: none;
    width: 163px;
    padding-left: 8px;
    height: 48px;
    border-left: solid 1px gray;
  }
</style>
