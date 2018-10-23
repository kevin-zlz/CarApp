<template>
  <div class="myall">

    <div class="data-body">
        <div class="nav">
          <nav>
            <ol class="breadcrumb">
              <li><router-link to="/">租车查询</router-link></li>
              <li><router-link to="/revert">租车查询</router-link></li>
              <li class="active" v-text="brand"></li>
            </ol>
          </nav>
        </div>
        <div class="car-info">
          <div class="car-head">
            <div class="car-img">
              <div class="container">
                <img class='photo' src="../../static/images/detail_image_0.png" alt=""/>
                <!--<img class='photo' src="images/detail_image_2.png" alt=""/>-->
                <!--<img class='photo' src="images/detail_image_3.png" alt=""/>-->
                <!--<img class='photo' src="images/detail_image_0.png" alt=""/>-->
              </div>
            </div>
            <div class="base-info">
              <div class="car-brand">
                <span v-text="carname">丰田花冠</span>
              </div>
              <ul>
                <li>品 牌：<span v-text="brand"></span></li>
                <li>车 系：<span v-text="chexi"></span></li>
                <li>年代款：<span v-text="niandaikuan"></span></li>
                <li>配置款：<span v-text="peizhikun"></span></li>
              </ul>
              <div class="order-now">
                <span class="price">￥{{price}}元/天</span>
                <div class="car-order" @click="yuding" style="cursor: pointer">立即预定</div>
              </div>
            </div>
          </div>
          <div class="car-body">
            <div class="car-left">
              <div class="title-head"><p>基本配置信息</p></div>
              <div class="data-param">
                <div class="data-param">
                  <p class="vibs">
                    <a class="ico" style="background: url('../../static/images/座位.svg'); background-repeat: no-repeat"></a>
                    <span class="car-des">座位数：</span>
                    <span class="car-data" v-text="sitenum"></span>
                  </p>
                  <p class="vibs">
                    <a class="ico" style="background: url('../../static/images/车门.svg'); background-repeat: no-repeat"></a>
                    <span class="car-des">车门数：</span>
                    <span class="car-data" v-text="doornum"></span>
                  </p>
                  <p class="vibs">
                    <a class="ico" style="background: url('../../static/images/汽油_gasoline.svg'); background-repeat: no-repeat"></a>
                    <span class="car-des">燃油类型：</span>
                    <span class="car-data" v-text="oiltype">汽油</span>
                  </p>
                  <p class="vibs">
                    <a class="ico" style="background: url('../../static/images/车巴巴-变速箱.svg'); background-repeat: no-repeat"></a>
                    <span class="car-des">变速箱类型：</span>
                    <span class="car-data" v-text="changespeed"></span>
                  </p>
                  <p class="vibs">
                    <a class="ico" style="background: url('../../static/images/座位.svg'); background-repeat: no-repeat"></a>
                    <span class="car-des" >排量：</span>
                    <span class="car-data" v-text="pailiang"></span>
                  </p>
                  <p class="vibs">
                    <a class="ico" style="background: url('../../static/images/燃油.svg'); background-repeat: no-repeat"></a>
                    <span class="car-des">汽油标号：</span>
                    <span class="car-data" v-text="oilnum"></span>
                  </p>
                  <p class="vibs">
                    <a class="ico" style="background: url('../../static/images/车巴巴-变速箱.svg'); background-repeat: no-repeat"></a>
                    <span class="car-des">驱动方式：</span>
                    <span class="car-data" v-text="qudong"></span>
                  </p>
                  <p class="vibs">
                    <a class="ico" style="background: url('../../static/images/燃油.svg'); background-repeat: no-repeat"></a>
                    <span class="car-des">油箱容量：</span>
                    <span class="car-data" v-text="oilcaptiy"></span>
                  </p>
                  <p class="vibs">
                    <a class="ico" style="background: url('../../static/images/座位.svg'); background-repeat: no-repeat"></a>
                    <span class="car-des">天窗：</span>
                    <span class="car-data" v-text="carwindow"></span>
                  </p>
                  <p class="vibs">
                    <a class="ico" style="background: url('../../static/images/车巴巴-座椅配置.svg'); background-repeat: no-repeat"></a>
                    <span class="car-des">座椅：</span>
                    <span class="car-data" v-text="sitetype"></span>
                  </p>
                  <p class="vibs">
                    <a class="ico" style="background: url('../../static/images/喇叭.svg'); background-repeat: no-repeat"></a>
                    <span class="car-des">音箱：</span>
                    <span class="car-data" v-text="musicnum"></span>
                  </p>
                  <p class="vibs">
                    <a class="ico" style="background: url('../../static/images/气囊.svg'); background-repeat: no-repeat"></a>
                    <span class="car-des">气囊：</span>
                    <span class="car-data" v-text="isqinang"></span>
                  </p>
                  <p class="vibs">
                    <a class="ico" style="background: url('../../static/images/雷达.svg'); background-repeat: no-repeat"></a>
                    <span class="car-des">倒车雷达：</span>
                    <span class="car-data" v-text="isdaocheleida"></span>
                  </p>
                  <p class="vibs">
                    <a class="ico" style="background: url('../../static/images/LC_icon_gps_line_2.svg'); background-repeat: no-repeat"></a>
                    <span class="car-des">GPS导航：</span>
                    <span class="car-data" v-text="isgps"></span>
                  </p>
                  <p class="vibs">
                    <a class="ico" style="background: url('../../static/images/cd-dvd-rom.svg'); background-repeat: no-repeat"></a>
                    <span class="car-des">DVD/CD：</span>
                    <span class="car-data" v-text="isdvd"></span>
                  </p>
                  <p class="vibs">
                    <a class="ico" style="background: url('../../static/images/进气.svg'); background-repeat: no-repeat"></a>
                    <span class="car-des">进气形式：</span>
                    <span class="car-data" v-text="jinqixingshi"></span>
                  </p>
                </div>
              </div>
            </div>
            <div class="car-right">
              <div class="title-head"><p>其他车型</p></div>
            </div>
          </div>
        </div>
      </div>
    <div class="mybottom">
      <div class="footer">
        <div class="leg">
          <dl class="explain">
            <dt>
              <a href="http://zuche.com">租车</a>预订说明
            </dt>
            <dd>
              <a href="#">服务时间</a>
              <a href="#">代租车况</a>
              <a href="#">服务时间</a>
              <a href="#">服务时间</a>
              <a href="#">服务时间</a>
              <a href="#">服务时间</a>
            </dd>
          </dl>
          <dl class="explain">
            <dt>
              <a href="http://zuche.com">会员</a>管理
            </dt>
            <dd>
              <a href="#">服务时间</a>
              <a href="#">代租车况</a>
            </dd>
          </dl>
          <dl class="explain">
            <dt>
              <a href="http://zuche.com">租车</a>预订说明
            </dt>
            <dd>
              <a href="#">服务时间</a>
              <a href="#">代租车况</a>
              <a href="#">服务时间</a>
            </dd>
          </dl>
          <dl class="explain">
            <dt>
              <a href="http://zuche.com">租车</a>预订说明
            </dt>
            <dd>
              <a href="#">服务时间</a>
              <a href="#">代租车况</a>
              <a href="#">服务时间</a>
              <a href="#">服务时间</a>
              <a href="#">服务时间</a>
            </dd>
          </dl>
          <dl class="explain">
            <dt>
              <a href="http://zuche.com">租车</a>预订说明
            </dt>
            <dd>
              <a href="#">服务时间</a>
              <a href="#">代租车况</a>
              <a href="#">服务时间</a>
              <a href="#">服务时间</a>
            </dd>>
          </dl>
        </div>
        <div class="footer-hotcity">
          <div class="underline"></div>
          <div class="fast">城市快捷入口</div>
          <div class="underline"></div>
        </div>
        <div class="footer-code">
          <ul>
            <li class="rmtextcur"><a href="#">热门</a></li>
            <li><a href="#">A</a></li>
            <li><a href="#">B</a></li>
            <li><a href="#">C</a></li>
            <li><a href="#">D</a></li>
            <li><a href="#">E</a></li>
            <li><a href="#">F</a></li>
            <li><a href="#">G</a></li>
            <li><a href="#">H</a></li>
            <li><a href="#">I</a></li>
            <li><a href="#">J</a></li>
            <li><a href="#">K</a></li>
            <li><a href="#">L</a></li>
            <li><a href="#">M</a></li>
            <li><a href="#">N</a></li>
            <li><a href="#">O</a></li>
            <li><a href="#">P</a></li>
            <li><a href="#">Q</a></li>
            <li><a href="#">R</a></li>
            <li><a href="#">S</a></li>
            <li><a href="#">T</a></li>
            <li><a href="#">U</a></li>
            <li><a href="#">V</a></li>
            <li><a href="#">W</a></li>
            <li><a href="#">X</a></li>
            <li><a href="#">Y</a></li>
            <li><a href="#">Z</a></li>
            <div style="clear:both"></div>
          </ul>
        </div>
        <div class="cityname">
          <div class="city">
            <a href="https://beijing.zuche.com/" target="_blank">北京租车</a>
            <a href="https://shanghai.zuche.com/" target="_blank" class="">上海租车</a>
            <a href="https://guangzhou.zuche.com/" target="_blank">广州租车</a>
            <a href="https://shenzhen.zuche.com/" target="_blank">深圳租车</a>
            <a href="https://chengdu.zuche.com/" target="_blank">成都租车</a>
            <a href="https://wuhan.zuche.com/" target="_blank">武汉租车</a>
            <a href="https://xian.zuche.com/" target="_blank">西安租车</a>
            <a href="https://hangzhou.zuche.com/" target="_blank">杭州租车</a>
            <a href="https://changsha.zuche.com/" target="_blank">长沙租车</a>
            <a href="https://kunming.zuche.com/" target="_blank">昆明租车</a>
            <a href="https://chongqing.zuche.com/" target="_blank">重庆租车</a>
            <a href="https://nanjing.zuche.com/" target="_blank">南京租车</a>
            <a href="https://shenyang.zuche.com/" target="_blank">沈阳租车</a>
            <a href="https://qingdao.zuche.com/" target="_blank" class="">青岛租车</a>
            <a href="https://sanya.zuche.com/" target="_blank">三亚租车</a>
            <a href="https://dongguan.zuche.com/" target="_blank">东莞租车</a>
            <a href="https://xiamen.zuche.com/" target="_blank">厦门租车</a>
            <a href="https://dalian.zuche.com/" target="_blank">大连租车</a>
            <a href="https://tianjin.zuche.com/" target="_blank">天津租车</a>
            <a href="https://zhengzhou.zuche.com/" target="_blank">郑州租车</a>
            <a href="https://jinan.zuche.com" target="_blank">济南租车</a>
            <a href="https://guiyang.zuche.com/" target="_blank">贵阳租车</a>
            <a href="https://xining.zuche.com/" target="_blank">西宁租车</a>
            <a href="https://haerbin.zuche.com/" target="_blank">哈尔滨租车</a>
          </div>
        </div>
        <div class="link">
          <div class="foot">
            <div class="foot_total">
              <div class="foot_top">
                <a href="#">关于我们</a>
                <a href="#">投资者关系</a>
                <a href="#">新闻中心</a>
                <a href="#">加盟合作</a>
                <a href="#">隐私保护</a>
                <a href="#">网站导航</a>
                <a href="#">联系我们</a>
                <a href="#">招贤纳士</a>
                <a href="#" class="last_a">English<i class="eng_icon"></i></a>
              </div>
              <div class="foot_down">
                <p class="f1">Copyright2008-2018 www.zuche.com All Rights Reserved.　北京神州汽车租赁有限公司 京ICP备10005002号   京公网安备号 11010502026705</p>
                <p class="f2">如果您对神州租车网站有任何意见，欢迎发送邮件到 <a href="#">web@zuche.com</a></p>
                <a href="#" class="f3"><img src="images/left.png" ></a>
                <a href="#" class="f4"><img src="images/right.png"></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "CarDetail",
        data:function(){
          return{
            carid:"",
            cid:this.$route.query.name,
            carname:'',
            brand:'',
            price:'',
            sitenum:'',
            doornum:'',
            oiltype:'',
            qudong:'',
            sitetype:'',
            carwindow:'',
            changespeed:'',
            chexi:'',
            isdaocheleida:'',
            isdvd:'',
            isgps:'',
            isqinang:'',
            jinqixingshi:'',
            musicnum:'',
            niandaikuan:'',
            oilcaptiy:'',
            pailiang:'',
            oilnum:'',
            peizhikun:'',
            condition:'',
          }
        },
        methods:{
          yuding:function(){
            if(sessionStorage.getItem('token')){
              this.condition.price=this.price;
              this.condition.brand=this.brand;
              this.condition.carname=this.carname;
              this.condition.sitenum=this.sitenum;
              this.condition.qudong=this.qudong;
              this.condition.doornum=this.doornum;
              this.condition.sitetype=this.sitetype;
              this.condition.carwindow=this.carwindow;
              this.condition.changespeed=this.changespeed;
              this.condition.oiltype=this.oiltype;
              this.condition.sitetype=this.sitetype;
              this.condition.chexi=this.chexi;
              this.condition.isdaocheleida=this.isdaocheleida;
              this.condition.isdvd=this.isdvd;
              this.condition.isgps=this.isgps;
              this.condition.isqinang=this.isqinang;
              this.condition.jinqixingshi=this.jinqixingshi;
              this.condition.musicnum=this.musicnum;
              this.condition.niandaikuan=this.niandaikuan;
              this.condition.oilcaptiy=this.oilcaptiy;
              this.condition.pailiang=this.pailiang;
              this.condition.oilnum=this.oilnum;
              this.condition.peizhikun=this.peizhikun;
              this.$router.push({path: '/order', query: {carid: this.carid,condition:this.condition}});
            }else{
              this.$router.push('/Login')
            }
          }
        },
        mounted:function () {
          var vm = this;
          this.carid=vm.$route.query.carid;
          console.log(this.carid);
          this.condition=vm.$route.query.condition;
          axios.post("http://127.0.0.1:8000/car/querycarinfobyid/",
            {"id":vm.$route.query.carid,
            },{
              // headers: {
              //   'Content-Type': 'application/json',
              // }
            })
            .then(function (res) {
              vm.carname = res.data.base.carname;
              vm.brand = res.data.base.brand;
              vm.price = res.data.base.price;
              vm.sitenum = res.data.detail.sitenum;
              vm.doornum = res.data.detail.doornum;
              vm.oiltype = res.data.detail.oiltype;
              vm.qudong = res.data.detail.qudong;
              vm.sitetype = res.data.detail.sitetype;
              vm.carwindow = res.data.detail.carwindow;
              vm.changespeed = res.data.detail.changespeed;
              vm.chexi = res.data.detail.chexi;
              vm.isdvd = res.data.detail.isdvd;
              vm.isdaocheleida = res.data.detail.isdaocheleida;
              vm.isgps = res.data.detail.isgps;
              vm.isqinang = res.data.detail.isqinang;
              vm.jinqixingshi = res.data.detail.jinqixingshi;
              vm.musicnum = res.data.detail.musicnum;
              vm.niandaikuan = res.data.detail.niandaikuan;
              vm.oilcaptiy = res.data.detail.oilcaptiy;
              vm.pailiang = res.data.detail.pailiang;
              vm.oilnum = res.data.detail.oilnum;
              vm.peizhikun = res.data.detail.peizhikun;
              console.log(res.data.base)
              console.log(res.data.detail)
            }.bind(this))
            .catch(function (err) {
              if (err.response) {
                console.log(err.response)
              }
            }.bind(this));
        }
    }
</script>

<style scoped>
  body,ul,li,a{
    padding: 0;
    margin: 0;
  }
  .myall{
    height: 1500px;
    position: relative;
  }
  ul{
    list-style: none;
  }
  input{
    outline: none;
  }
  body {
    background-color: #f2f2f5 !important;
  }
  a{
    text-decoration: none;
  }
  .data-body{
    width: 1200px;
    height: 800px;
    /*background-color: rgba(173, 173, 180, 0.44);*/
    margin: 0px auto;
  }
  .data-body .nav{

    height: 50px;
    line-height: 50px;
  }
  .data-body .car-info{
    position: relative;
  }
  .car-info .car-head{
    position: relative;
    height: 470px;
    width: 100%;
    background-color: white;
  }
  .car-info .car-head .car-img{
    position: absolute;
    width: 680px;
    height: 100%;
    /*background-color: #dbff38;*/
  }
  .car-head .car-img .container{
    width: 95%;
    height: 100%;
  }

  .car-info .car-head .base-info{
    position: absolute;
    left: 780px;
    width: 350px;
    height: 100%;
  }
  .car-head .base-info .car-brand{
    margin-top: 50px;
    height: 60px;
    line-height: 60px;
    color: #555555;
    box-sizing: border-box;
    border-bottom: #cccccc solid 1px;
  }
  .car-head .base-info .car-brand span{
    font-size: 2em;

  }
  .car-head .base-info ul li{
    height: 50px;
    width: 100%;
    line-height: 50px;
    font-size: 20px;
  }
  .order-now .car-order{
    box-sizing: border-box;
    margin-top: 60px;
    margin-left: 100px;
    width: 100px;
    height: 40px;
    font-size: 16px;
    color: white;
    text-align: center;
    line-height: 40px;
    display: inline-block;
    background-color: blue;
  }
  .order-now .price{
    color:red;
    font-size: 24px;
  }
  .car-info .car-left{
    top: 490px;
    width: 760px;
    height: 650px;
    background-color: white;
    position: absolute;
    padding: 0 40px;
    box-sizing: border-box;
  }
  .car-left .title-head{
    font-size: 24px;
    height: 100px;
    line-height: 100px;
    border-bottom: #cccccc solid 1px;
  }
  .car-left .data-param{
    padding-top: 50px;
  }
  .car-left .data-param p{
    font-size: 18px;
    line-height: 40px;
    display: inline-block;
    width: 335px;
    height: 40px;
    /*background-color: #ff4254;*/
  }
  .car-left .data-param p .ico{
    /*margin-top: 10px;*/
    display: inline-block;
    width: 50px;
    height: 25px;
    /*background-color: #dbff38;*/
    background-repeat: no-repeat;
  }
  .mybottom{
    width: 100%;
    height: 200px;
    background-color: red;
    position: absolute;
    bottom: 0;
  }
  .footer{
    width: 100%;
    height: 609px;
    border-top: #e4e6e9 solid 1px;
    background-color: white;
    margin-bottom: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .leg{
    /*width: 1200px;*/
    width: 100%;
    height: 170px;
    margin: auto;
    position: relative;
    top: 45px;
    display: flex;
    padding-bottom: 60px;
    padding-left: 80px;
    box-sizing: border-box;
  }
  .leg .explain {
    width: 158px;
    height: 108px;
    margin: auto;
    padding-right: 80px;
    flex: 1;
  }
  .leg .explain dt{
    font-size: 16px;
    color: #60606c;
    padding-bottom: 15px;
  }
  .leg .explain dt a{
    text-decoration: none;
    color: #60606c;
    outline: 0;
  }
  .leg .explain dt a:hover{
    text-decoration: underline;
  }
  .leg .explain dd{
    width: 158px;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .leg .explain dd a{
    float: left;
    width: 70px;
    font-size: 12px;
    color: #93939e;
    line-height: 14px;
    padding-bottom: 10px;
    text-decoration: none;
    outline: 0;
  }
  .leg .explain dd a:hover{
    text-decoration: underline;
  }
  /*----------------------foot-hotcity*/
  .footer-hotcity{
    width: 100%;
    height: 100px;
    line-height: 100px;
    background-color: #1b2b3b;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 80px ;
    display: flex;
    align-items: center;
  }
  .footer-hotcity .fast{
    width: 16%;
    font-size: 1.5em;
    color:white;
    text-align: center;
  }
  .footer-hotcity .underline{
    width: 42%;
    height: 0;
    border: #66686b solid 0.5px;
  }
  .footer-code{
    width: 100%;
    height: 100px;
    line-height: 100px;
    background-color: #1b2b3b;
    text-align: center;
    box-sizing: border-box;
    padding: 0 80px ;
  }
  .footer-code ul{
    list-style:none;
    display: flex;

  }
  .footer-code ul li{
    flex: 1;
    height: 100%;
    text-align: center;
  }
  .footer-code ul li a{
    text-decoration: none;
    color: white;
  }
  .footer-code ul li.rmtextcur a{
    color: #fabe00;
    border-bottom:#fabe00 solid 2px ;
  }
  .footer-code ul li a:hover{
    color: #fabe00;
    border-bottom:#fabe00 solid 2px ;
  }
  .cityname{
    width: 100%;
    height: 145px;
    background-color: #1b2b3b;
    box-sizing: border-box;
    padding: 0 80px ;
    /*border-bottom: #66686b solid 1px;*/
  }
  .cityname .city{

    width: 100%;
    height: 140px;
    border-bottom: #66686b solid 1px;
  }
  .car-info .car-right{
    padding: 0 40px;
    top: 490px;
    left: 780px;
    width: 420px;
    height: 700px;
    background-color: white;
    position: absolute;
  }
  .car-right .title-head{
    font-size: 24px;
    height: 100px;
    line-height: 100px;
    border-bottom: #cccccc solid 1px;
  }
  .service_body .city .store-modle{
    /*margin-top: 40px;*/
    display: inline-block;
  }
  .cityname .city a{
    /*display: block;*/
    font-size: 0.8em;
    text-align: left;
    display: inline-block;
    text-decoration: none;
    color: white;
    width: 90px;
    height: 30px;
  }
  /*-----------------------------link------------*/
  .foot{
    width: 100%;
    height: 186px;
    background-color: #1b2b3b;
    color: #6d8aab;
    padding-bottom: 40px;
    padding-right: 80px;
    padding-left: 80px;
    box-sizing: border-box;
    position: relative;
    /*top: 60px;*/
  }
  .foot .foot_total{
    width: 100%;
    height: 140px;
  }
  .foot .foot_total .foot_top{
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #32414f;
    box-sizing: border-box;
  }
  .foot .foot_total .foot_top a{
    font-size: 12px;
    line-height: 50px;
    color: #6d8aab;
    margin-right: 30px;
    float: left;
    outline: none;
    text-decoration: none;
  }
  .foot .foot_total .foot_top .last_a{
    width: 70px;
    height: 50px;
    float: right;
    margin-right: 0;
    text-align: right;
  }
  .foot .foot_total .foot_top .last_a .eng_icon{
    width: 4px;
    height: 5px;
    background: url("../../static/images/icon11.png") ;
    background-position: -594px -3px;
    margin-left: 5px;
    display: inline-block;

  }
  .foot .foot_total .foot_top a:hover{
    text-decoration: underline;
  }
  .foot .foot_total .foot_down{
    width: 100%;
    height: 90px;
    padding-top: 27px;
    box-sizing: border-box;

  }
  .foot .foot_total .foot_down p{
    padding: 0;
    margin: 0;
    font-size: 12px;
    color: #6d8aab;
  }
  .f1{
    float: left;
  }
  .f2{
    float: right;
  }
  .f2 a{
    color: #eeb819;
    outline: none;
    text-decoration: none;
  }
  .f2 a:hover{
    text-decoration: underline;
  }
  .foot .foot_total .foot_down .f3 img{
    padding-top: 10px;
    width: 90px;
    height: 36px;
    object-fit: cover;
  }
  .foot .foot_total .foot_down .f4 img{
    padding-top: 10px;
    width: 90px;
    height: 36px;
    object-fit: cover;
    margin-left: 10px;
  }
</style>
