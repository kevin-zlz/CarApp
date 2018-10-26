<template>
  <div>
    <div class="mydiv" @click="test2($event)">
      <input class="mydatepicker"  type="text" placeholder=""   />
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
        date1:''
      }
    },
    mounted:function(){
      $('.mydatepicker').dcalendarpicker({
        format:'yyyy-mm-dd',
      });
      console.log((new Date()).getFullYear().toString()+'-'+(new Date()).getMonth().toString()+'-'+(new Date()).getDate().toString())
      $('.mydatepicker')[0].placeholder=(new Date()).getFullYear().toString()+'-'+(new Date()).getMonth().toString()+'-'+(new Date()).getDate().toString();
      $('.mydatepicker')[1].placeholder=((new Date()).getFullYear()).toString()+'-'+(new Date()).getMonth().toString()+'-'+((new Date()).getDate()+2).toString();
      // $(".mydatepicker").dcalendarpicker('setDate');

    },
    methods:{
      test2:function (e) {
        // console.log(e.target)
        if (e.target.nodeName=="SPAN"){
          // console.log(document.querySelector('.mydatepicker').value);e.target.parentElement.querySelector('.mydiv .mydatepicker').value
          this.date1=e.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.value
          console.log("wq",e.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.value)
          this.$emit('getdate',this.date1);
          console.log(this.date1)
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
    height: 38px;
    /*border: solid 1;*/
    font-size: 14px;
    /*margin-top:12px ;*/
    /*border-lefmt: solid 1px gray;*/
  }
</style>
