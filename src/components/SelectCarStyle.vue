<template>
  <div class="container" >
    <div class="row">
      <div class="col-md-12">
        <div class="select_carStyle">
          <input type="text" id="select_style" ref="select_style" placeholder="请选择" readonly @click="show">
          <div id="car_style" v-show="flag" >
            <a class="setComboNameModel" v-for="i in data" :code="i"  v-text="i" @click="getstyle"></a>

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
      msg: '',
      flag:false,
      data:['丰田致炫/两厢/1.3自动', '起亚K2/三厢/1.4自动', '别克凯越/三厢/1.6自动', '2014雪铁龙爱丽舍/三厢/1.6自动', '大众斯柯达明锐/三厢/1.6自动', '雪佛兰科鲁兹/三厢/1.5自动', '大众朗逸/三厢/1.6手动', '雪佛兰新科鲁兹/三厢/1.5自动', '大众朗逸/三厢/1.6自动', '别克英朗/三厢/1.5自动', '大众凌渡/三厢/1.4自动', '2016别克昂科拉/SUV/1.4T自动', '起亚K5/三厢/2.0自动', '雪佛兰迈锐宝/三厢/1.5T自动', '别克威朗/三厢/1.5自动', '丰田凯美瑞/三厢/2.0自动', '雪佛兰科帕奇两驱/SUV/2.4自动', '华晨华颂7/7座/2.0T自动沪牌', '雪佛兰科帕奇四驱/SUV/2.4自动', '别克昂科威/SUV/1.5T自动', '大众帕萨特/三厢/1.8T自动', '别克君越/三厢/2.4自动', '大众途观/SUV/1.8T自动', '大众途观/SUV/1.8T自动沪牌', '别克昂科威/SUV/1.5T自动沪牌', '别克GL8/7座/2.4自动沪牌', '2017别克GL8/7座/2.4自动', '凯迪拉克XTS/三厢/2.0T自动', '奥迪A6/三厢/1.8T自动', '宝马3系/三厢/2.0自动沪牌', '沃尔沃S90/三厢/2.0T自动', '沃尔沃S90/三厢/2.0T自动沪牌'],

    }
  },
  methods:{
    show:function () {
      this.flag=!this.flag
    },
    getstyle:function (e) {
      if (e.target.innerHTML){
        this.$refs.select_style.value=e.target.innerHTML;
        // this.$refs.select_style.style.color='#61a1df';
        this.flag=false
      }

    }

    }


}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .select_carStyle{
    /*display: inline;*/

    width: 316px;
    height: 30px;
    position: absolute;
    left: 0px;
    top: 0px;
    box-sizing: border-box;
    outline: none;

  }
  #select_style{
    margin: 0;
    height: 30px;
    width: 316px;
    position: relative;
    display: inline-block;
    /*border-radius: 2px;*/
    background-image: url(https://image.zuchecdn.com/newversion/common/input_select.png);
    background-repeat: no-repeat;
    background-position: center right;
    border: 1px solid #e2e2e2;
    font-size: small;

  }
  #car_style{
    width: 314px;
    height: 215px;
    overflow: hidden scroll;
    background: white;
    /*display: none;*/
    border: 1px solid #61a1df;
    position: relative;
    font-size: small;
    padding: 0;
    z-index:2;

  }
  #car_style a{
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
  #car_style a:hover{
    background-color: #fff1d6;
    border-color: #ffc955;
    color:  #2a2a2a;
  }


</style>
