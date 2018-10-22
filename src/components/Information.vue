<template>
  <div class="container">
    <div class="info">
      <ul>
        <li class="items">我的信息</li>
        <li class="items">
          <div class="label-info">姓名</div>
          <div class="inputs"><input type="text" v-model="name" value="赵四"></div>
          <div class="tip" ref="real_name">真实姓名，方便租车时核对身份</div>
        </li>
        <li class="items">
          <div class="label-info">身份证号</div>
          <div class="inputs"><input type="text" id="user_id"  placeholder="请输入身份证号码" value="421125199704157613" v-model="ID"></div>
          <div class="tip" id="id_tip" ref="realID">有效证件，方便租车时核对身份</div>
        </li>
        <li class="item">
          <div class="label-info" v-model="term">有效期</div>
          <div class="inputs" style="border: gray solid 1px;height:40px;"><Calenlar @getdate="getendday"></Calenlar></div>
          <div class="tip" id="error-tip">证件已过期！</div>
        </li>
        <li class="items">
          <div class="label-info">手机号码</div>
          <div class="inputs"><input id="tel" type="text"   v-model="phone"   :readonly="readonly_p"></div>
          <!--<div id="tel-tip" class="tel-tip">手机格式不正确</div>-->
          <div class="tip"><a id="changeTel" ref="phone_a"  @click="changeP" >修改</a></div>
        </li>
        <li class="items">
          <div class="label-info">电子邮箱</div>
          <div class="inputs"><input id="email-input" type="text" placeholder="请输入常用邮箱" value="1908456518@qq.com" v-model="email"  :readonly="readonly_e" ></div>
          <!--<div id="email-tip" class="tel-tip">邮箱格式不正确</div>-->
          <div class="tip"><a ref="email_a"  @click="changeE">修改</a></div>
        </li>
        <li class="items city">
          <div class="label-info">通信地址</div>
          <div class="inputs" >
            <!--<select name="province" id="param_province" onchange="provincechange(this.selectedIndex)"><option>请选择省份</option></select><br/>-->
            <!--<select name="city" id="param_city"><option>请选择城市</option></select>-->
            <Province @getLocation="getAddress" style="left: 108px;top: -35px;display: inline-block;position: absolute;"></Province>

          </div>
          <div class="tip"></div>
        </li>
        <li class="items">
          <div class="label-info"></div>
          <div class="inputs"><input type="text" placeholder="无须重复填写省/市" value="工业园区" v-model="detailaddress"></div>
          <div id="user-address" class="tel-tip">联系电话为必填项</div>
        </li>
        <li class="long-item">
          <div class="label-info">紧急联系人</div>
          <div class="inputs"><input type="text" placeholder="请输入紧急联系人姓名" ref="urgent_name" v-model="urgentname" value="詹姆斯"></div>
          <div id="other-name" class="tel-tip" ref="urgent_n">紧急联系人为必填项</div>
        </li>
        <li class="long-item">
          <div class="label-info">联系电话</div>
          <div class="inputs"><input id="other-tel" type="text" placeholder="请输入紧急联系人电话" value="15776554612" ref="urgent_phone" v-model="urgenttel"></div>
          <div id="other-tip" class="tel-tip" ref="urgent_p">联系电话为必填项</div>
        </li>
        <li class="items item-save">
          <div class="label-info"></div>
          <div class="inputs"><div class="save" @click="verify">保存</div></div>
        </li>

      </ul>
    </div>


  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'SearchMain',
  data () {
    return {
      msg: '我是谁我在哪？？？？',
      flag:false,
      name:"",
      ID:"",
      term:"",
      readonly_p:true,
      readonly_e:false,
      phone:"",
      email:'',
      address:'',
      detailaddress:'',
      urgenttel:'',
      urgentname:'',
    }

  },
  watch: {
    name: function (cc) {

      // console.log(a)
      if (cc) {
        var reg = /^[\u4e00-\u9fa5]+$/;
        if (!reg.test(cc) || cc.length<=1||cc.length>=5) {
          this.$refs.real_name.innerText = '姓名格式不正确';
          this.$refs.real_name.style.color = 'red';

        }
        else {
          this.$refs.real_name.innerText = '真实姓名，方便租车时核对身份';
          this.$refs.real_name.style.color = '#a3a3a3';
        }
      }
      else {
        this.$refs.real_name.innerText = '真实姓名，方便租车时核对身份';
        this.$refs.real_name.style.color = '#a3a3a3';


      }

    },
    ID: function (id) {
      var reg1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;

      if (!reg1.test(id)) {
        this.$refs.realID.innerText = '格式不正确';
        this.$refs.realID.style.color = 'red';

      }
      else {
        this.$refs.realID.innerText = '';
        this.$refs.realID.style.color = '#a3a3a3';

      }
    },
    phone: function (num) {
      var reg2 = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
      if (!reg2.test(num)) {
        this.$refs.phone_a.innerText = '手机格式不正确';
        this.$refs.phone_a.style.pointerEvents = "none";
        this.$refs.phone_a.style.color = 'red'
      }
      else {
        this.$refs.phone_a.innerText = '保存';

        this.$refs.phone_a.style.pointerEvents = "auto";
        this.$refs.phone_a.style.color = 'rgba(0, 0, 255, 0.57)'
      }
    },
    email: function (num) {
      var reg3 = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
      if (!reg3.test(num)) {
        this.$refs.email_a.innerText = '邮箱格式不正确';
        this.$refs.email_a.style.pointerEvents = "none";
        this.$refs.email_a.style.color = 'red'
      }
      else {
        this.$refs.email_a.innerText = '保存';

        this.$refs.email_a.style.pointerEvents = "auto";
        this.$refs.email_a.style.color = 'rgba(0, 0, 255, 0.57)'
      }
    }
  },

  methods:{
    getendday:function(e){
      alert(e)
      this.term=e;
    },
    getAddress:function(province,city){
      this.address=province+' '+city;
    },
    changeP:function (event) {

      this.readonly_p = !this.readonly_p;

      if (this.readonly_p){

        event.target.innerText='修改';
      }
      else {
        event.target.innerText='保存';

      }

    },
    changeE:function (event) {

      this.readonly_e = !this.readonly_e;

      if (this.readonly_e){

        event.target.innerText='修改';
      }
      else {
        event.target.innerText='保存';

      }

    },
    verify:function () {
      // alert(this.$refs.urgent_name.value);
      if(this.$refs.urgent_name.value && this.$refs.urgent_phone.value){
        this.$refs.urgent_n.style.display='none';
        this.$refs.urgent_p.style.display='none';
        setTimeout(function () {
          alert('保存成功')
        },500)

    }
      else if(this.$refs.urgent_name.value){
        this.$refs.urgent_n.style.display='none';
        this.$refs.urgent_p.style.display='block'
      }
      else if(this.$refs.urgent_phone.value){
        this.$refs.urgent_p.style.display='none'
        this.$refs.urgent_n.style.display='block'
      }
      else {
        this.$refs.urgent_p.style.display='block';
        this.$refs.urgent_n.style.display='block'
      }
      let vm = this
      axios.post("http://127.0.0.1:8000/user/adduserdetailbyid/",
        {
          "realname":vm.name,
          "idcard":vm.ID,
          "idcardtime":vm.term,
          "telephone":vm.phone,
          "address":vm.address+" "+vm.detailaddress,
          "urgentname":vm.urgentname,
          "urgenttel":vm.urgenttel,
          "email":vm.email,
        }, {
          headers: {
            'token': sessionStorage.getItem('token'),
          }
        })
        .then(function (res) {
          if (res.data) {
            console.log(res.data)
            // console.log(vm.articallist);
          }
        }.bind(this))
        .catch(function (err) {
          if (err.response) {
            console.log(err.response)
          }
        }.bind(this))

    }
  },
  mounted:function () {
    let vm = this
    axios.post("http://127.0.0.1:8000/user/queryuserdetail/",
      {
        // "realname":vm.name,
        // "idcard":vm.ID,
        // "idcardtime":vm.term,
        // "telephone":vm.phone,
        // "address":vm.address+vm.detailaddress,
        // "urgentname":vm.urgentname,
        // "urgenttel":vm.urgenttel,
        // "email":vm.email,
      }, {
        headers: {
          'token': sessionStorage.getItem('token'),
        }
      })
      .then(function (res) {
        if (res.data) {
          console.log(res.data);
          vm.name=res.data[0].realname;
          vm.ID=res.data[0].idcard;
          vm.term=res.data[0].idcardtime;
          vm.phone=res.data[0].yonghu__telephone;
          vm.detailaddress=res.data[0].address.split(' ')[2];
          vm.urgenttel=res.data[0].urgenttel;
          vm.email=res.data[0].yonghu__email;
          vm.urgentname=res.data[0].urgentname;
        }
      }.bind(this))
      .catch(function (err) {
        if (err.response) {
          console.log(err.response)
        }
      }.bind(this))

  }


}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul,li,span{
    margin: 0;
    padding: 0;
  }
  input{
    outline: none;
  }
  ul{
    list-style: none;
  }
  ul li.items,li.item,li.long-item{
    border-bottom:#e9ebee solid 1px;
  }
  .info{
    width: 924px;
    height:940px;
    border: #e9ebee solid 1px;
    padding: 0px 20px ;
    background-color: white;
  }
  ul li.items:nth-child(1){
    height: 100px;
    width: 100%;
    font-size: 1.5em;
    line-height: 100px;
  }
  ul li.items{
    display: flex;
    height: 70px;
    width: 100%;
    font-size: 1em;
    line-height: 70px;
  }
  ul li.item{
    padding-top: 13px;
    display: flex;
    height: 70px;
    width: 100%;
    font-size: 1em;
    box-sizing: border-box;
  }
  ul li div.label-info{
    background-color: white !important;
    width: 210px;
    font-size: 16px;
    color: #717171;
  }
  ul li.item div.label-info{

    margin-top: 10px;
    width: 210px;
    font-size: 16px;
    color: #717171;
    box-sizing: border-box;
  }
  ul li div.inputs{
    width: 340px;
  }
  li div.inputs input{
    width: 320px;
    height: 38px;
    font-size: 15px;
    color: #a3a3a3;
  }
  ul li div.tip{
    color: #a3a3a3;
    font-size: 13px;
    text-align: right;
    width: 340px;
  }
  ul li.item div.tip{
    margin-top: 10px;
    color: red;
    font-size: 13px;
    text-align: right;
    width: 340px;
    box-sizing: border-box;
    display: none;
  }
  li.items{
    position: relative;
  }
  li.items div.tel-tip{
    position: absolute;
    font-size: 13px;
    color: red;
    left: 600px;
    display: none;
  }
  li.items div.tip a{
    text-decoration: none;
    color: rgba(0, 0, 255, 0.57);
    font-size: 13px;
    cursor: pointer;
  }

  ul li.city{
    border-bottom: none;
  }
  li.city .inputs{
    width: 350px;
    align-items: center;
    display: flex;
  }
  li.city .inputs select{
    color: #a3a3a3;
    height: 40px;
    width: 155px;
    margin-right: 25px;
    box-sizing: border-box;
  }
  ul li.long-item{
    display: flex;
    height: 70px;
    width: 100%;
    font-size: 1em;
    line-height: 70px;
  }
  ul li.long-item .inputs input{
    width: 380px;
  }
  ul li.item-save{
    width: 100%;
    height: 120px;
    align-items: center;
  }
  li.long-item{
    position: relative;
  }
  li.long-item div.tel-tip{
    position: absolute;
    font-size: 13px;
    color: red;
    left: 700px;
    display: none;
  }
  ul li.item-save .inputs .save{
    width: 150px;
    height: 42px;
    background-color: #f3b900;
    line-height: 42px;
    text-align: center;
    color: white;
  }
  li.item-save .inputs .save:hover{
    cursor: pointer;
  }
  ul li.passW div.password{
    display:flex;
    align-items: center;

  }
  ul li.passW div.password span{
    display: inline-block;
    text-align: center;
    line-height: 21px;
    border:#f3b900 solid 1px;
    border-left: none;
    padding: 0;
    width: 57px;
    height: 21px;
    color: #a1a1a1;
    background-color: ghostwhite;
  }
  ul li.passW div.password span:first-child{
    border-left:#f3b900 solid 1px;
  }
  ul li.passW div.tip{
    width: 150px;
  }
  div.label-info{
    background-color: white !important;
  }



</style>
