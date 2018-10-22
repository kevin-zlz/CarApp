<template>
<div>
  <div>
    <input class="mydatepicker"  v-model="date" type="text" placeholder="请选择日期" @change="" @click="test($event)">
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
  // props:'date',
  name: 'Time',
  data () {
    return {
      inputtext:'',
      flag:false,
      date:''
    }
  },
  watch:{
    date:function (newval) {
      $emit('changeDate',)
    }
  },
  mounted:function(){
    $('.mydatepicker').dcalendarpicker({
     format:'yyyy-mm-dd'
   });
  },


      // $emit('changeDate',date)


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
    outline: none;
    border: none;
    width: 163px;
    padding-left: 8px;
    height: 48px;
    border-left: solid 1px gray;
  }
</style>
