<template>
<div>
  <div class="mydiv" @click="test2($event)">
    <input class="mydatepicker"  type="text" placeholder="请选择日期" >
  </div>
</div>

</template>

<script>
  import $ from 'jquery'
  import '../../static/bootstrap/js/dcalendar.picker'

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
  mounted:function(){
    $('.mydatepicker').dcalendarpicker({
     format:'yyyy-mm-dd'
   });

  },
  methods:{
    test2:function (e) {
      // console.log(e.target)
    if (e.target.nodeName=="SPAN"){
      // console.log(document.querySelector('.mydatepicker').value);e.target.parentElement.querySelector('.mydiv .mydatepicker').value
      this.date=e.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.value
      console.log(e.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.value)
      this.$emit('getdate',this.date)
      // $emit('enlarge-text', 0.1)
    }
    }
  }
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
    border-left: solid 1px #ababab;
    font-size: 16px;
    /*border-left: solid 1px gray;*/
  }
</style>
