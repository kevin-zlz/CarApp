<template>
  <div class="container" >
    <div class="row">
      <div class="col-md-12">
        <div class="select_days">
          <input type="text" id="lend_days" ref="lend_days" placeholder="请选择" readonly @click="show">
          <div id="select_lend_day"   v-show="flag" @click="getday">
            <a class="setComboNameTime" code="3个月" deptid="3">3个月</a>
            <a class="setComboNameTime" code="4个月" deptid="4">4个月</a>
            <a class="setComboNameTime" code="5个月" deptid="5">5个月</a>
            <a class="setComboNameTime" code="6个月" deptid="6">6个月</a>
            <a class="setComboNameTime" code="7个月" deptid="7">7个月</a>
            <a class="setComboNameTime" code="8个月" deptid="8">8个月</a>
            <a class="setComboNameTime" code="9个月" deptid="9">9个月</a>
            <a class="setComboNameTime" code="10个月" deptid="10">10个月</a>
            <a class="setComboNameTime" code="11个月" deptid="11">11个月</a>
            <a class="setComboNameTime" code="1年" deptid="12">1年</a>
            <a class="setComboNameTime" code="2年" deptid="24">2年</a>
            <a class="setComboNameTime" code="3年" deptid="36">3年</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectDay',

  data () {
    return {
      msg: '我是谁我在哪？？？？',

      flag:false,
    }
  },
  methods:{
    show:function () {
      this.flag=!this.flag
    },
    getday:function (e) {
      if (e.target.innerHTML){
        this.$refs.lend_days.value=e.target.innerHTML;
        // this.$refs.lend_days.style.color='#61a1df';
        this.flag=false
      }

    }

    }


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .select_days{
    /*display: inline;*/

    width: 90px;
    height: 30px;
    position: absolute;
    left: 0px;
    /*top: 114px;*/
    box-sizing: border-box;
    outline: none;

  }
  #lend_days{
    margin: 0;
    height: 30px;
    width: 90px;
    position: relative;
    display: inline-block;
    border-radius: 2px;
    font-size: small;
    background-image: url(https://image.zuchecdn.com/newversion/common/input_select.png);
    background-repeat: no-repeat;
    background-position: center right;
    border: 1px solid #e2e2e2;

  }
  #select_lend_day{
    width: 88px;
    height: 215px;
    overflow: hidden scroll;
    background: white;
    display: block;
    border: 1px solid #61a1df;
    position: relative;
    font-size: small;
    padding: 0;
    z-index:2;

  }
  #select_lend_day a{
    display: block;
    padding: 8px 0;
    text-align: center;
    color: #b9b9b9;
    border: 1px solid #fff;
    border-bottom: 1px solid #e9f2fa;
    background: #fff;
    text-decoration: none;
    cursor: pointer;
    outline: 0;
  }
  #select_lend_day a:hover{
    background-color: #fff1d6;
    border-color: #ffc955;
    color:  #2a2a2a;
  }


</style>
