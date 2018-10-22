<template>
  <div class="container">
    <div class="top"></div>
    <div class="main">
      <div class="title" v-text="title">目的地</div>
      <div class="left-main left1" v-if="btnclick==0" >
        <div class="city">
          <div class="province"><img @click="before()" alt="" src="../assets/images/city_left.png" style="position: absolute;left: 20px;"></img><span class="provincename" v-text="provinces[num]"></span><img @click="after()" alr="" src="../assets/images/city_right.png" style="position: absolute;right: 20px;"></img></div>
          <div class="citys">
            <img src="" >
            <div v-for="i in citys[num]" v-text="i" @click="clickcity($event.target,i)">武汉</div>
          </div>
          <div class="left-main-bottom">
            <!--<a href="" style="text-decoration: none;color: white;">下一步</a>-->
            <div class="btn-next" style="" @click="clickbtn()">下一步</div>
          </div>
        </div>

      </div>
      <div class="left-main left2" v-if="btnclick==1">
        <div class="mydate">
          <span>出行时间:</span>
          <Calenlar @getdate="getstartday" style="border: solid 1px gray;display: inline-block;width: 200px;"></Calenlar>
          <!--<Time></Time>-->
          <!--<select @change="getYear($event.target)" class="year">-->
            <!--<option selected>2018</option>-->
            <!--<option>2019</option>-->
          <!--</select> &nbsp;&nbsp;年-->
          <!--<select @change="getMonth($event.target)" class="month">-->
            <!--<option>9</option>-->
            <!--<option>10</option>-->
            <!--<option>11</option>-->
            <!--<option>12</option>-->
          <!--</select> &nbsp;&nbsp;月-->
        </div>
        <div @change="getDays($event.target)" class="myday">
          <span>结束时间:</span>
          <Calenlar @getdate="getendday" style="border: solid 1px gray;display: inline-block;width: 200px;"></Calenlar>
          <!--<select id="play_time">-->
            <!--<option>1~3天</option>-->
            <!--<option>4~7天</option>-->
            <!--<option>8~15天</option>-->
            <!--<option>16~20天</option>-->
            <!--<option selected>20天以上</option>-->
          <!--</select>-->
        </div>
        <div class="left-main-bottom">
          <div class="btn-next" @click="clickbtn()">下一步</div>
        </div>
      </div>
      <div class="left-main left3" v-if="btnclick==2">
        <form>
          <!--<img src="../../static/images/index3.png">-->
          <div>出行人数:
            <select v-model="people">
              <option value="1">1人</option>
              <option value="2">2人</option>
              <option value="3">3人</option>
              <option value="4">4人</option>
              <option value="5">5人</option>
              <option value="6">6人</option>
              <option value="7">7人</option>
              <option value="8">8人</option>
              <option value="9">9人</option>
            </select>
          </div>
          <div>联 系 人 :
            <input type="text" required v-model="linkname">
          </div>
          <div>手&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;机 :
            <input type="text" required v-model="linktel">
          </div>
          <div>
            <span style="position: relative;top: -185px;">其他需求:</span>
            <textarea v-model="describe" style="width: 350px;height: 200px;resize:none "></textarea>

          </div>
          <div class="submitbtn">
            <div class="btn-next" @click="btnsubmit()"  style="top: 50px;position: absolute;height: 40px;left: 250px;">提交</div>
          </div>
        </form>
      </div>
      <div class="right-main">
        <div style="margin-top: 50px">
          <p>--------您的出行信息-------</p>
          <div>

            <ul >
                <li class="place" >
                  <span >目的地:</span>
                  <span class="city" v-for="i in place" v-text="i">武汉</span>

                </li>
                <li v-if="btnclick==1||btnclick==2"><span >出行时间:</span><span >{{myyear}}</span></li>
                <li v-if="btnclick==1||btnclick==2"><span >结束时间:</span><span >{{mydays}}</span></li>
            </ul>
          </div>
          <p>-----------咨询电话----------</p>
          <p>13955415175</p>
          <p>-----------服务时段----------</p>
          <p>工作日：9:00-18:00
                    </p>
          <p>
                    非工作日：10:00-17:00</p>
        </div>
      </div>
    </div>
    <div id="modal" class="modal">
      <div class="modal-content">
        <header class="modal-header">
          <h4>错误提示</h4>
          <span class="close">×</span>
        </header>
        <div class="modal-body">
          <p>您没有选择地点,请点击"确定"继续选择地点</p>
        </div>
        <footer class="modal-footer">
          <button id="cancel">确定</button>
        </footer>
      </div>

    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
      name: "drive",
      data () {
        return {
          describe:"",
          people:0,
          myyear:'2018',
          title:'目的地',
          mymonth:'10',
          mydays:'0',
          inputtext:'',
          place:[],
          num:0,
          flag:false,
          linkname:'',
          linktel:'',
          btnclick:0,
          provinces:['北京市','上海市','天津市','重庆市','河北省','山西省','内蒙古省','辽宁省','吉林省','黑龙江省','江苏省','浙江省','安徽省','福建省','江西省','山东省','河南省','湖北省','湖南省','广东省','广西省','海南省','四川省','贵州省','云南省','西藏省','陕西省','甘肃省','宁夏省','青海省','新疆省','香港','澳门','台湾'],
          citys: [
            ["东城区", "西城区", "崇文区", "宣武区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区", "密云县", "延庆县"],
            ["黄浦区", "卢湾区", "徐汇区", "长宁区", "静安区", "普陀区", "虹口区", "杨浦区", "闵行区", "宝山区", "嘉定区", "浦东新区", "金山区", "松江区", "青浦区", "南汇区", "奉贤区", "崇明县"],
            ["和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "塘沽区", "汉沽区", "大港区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区", "宁河县", "静海县", "蓟县"],
            ["万州区", "涪陵区", "渝中区", "大渡口区", "江北区", "沙坪坝区", "九龙坡区", "南岸区", "北碚区", "万盛区", "双桥区", "渝北区", "巴南区", "黔江区", "长寿区", "綦江县", "潼南县", "铜梁县", "大足县", "荣昌县", "璧山县", "梁平县", "城口县", "丰都县", "垫江县", "武隆县", "忠县", "开县"],
            ["石家庄市","张家口市","承德市","秦皇岛市","唐山市","廊坊市","保定市","衡水市","沧州市","邢台市","邯郸市"],
            ["太原市","朔州市","大同市","阳泉市","长治市","晋城市","忻州市","晋中市","临汾市","吕梁市","运城市"],
            ["呼和浩特市","包头市","乌海市","赤峰市","通辽市","呼伦贝尔市","鄂尔多斯市","乌兰察布市","巴彦淖尔市","兴安盟","锡林郭勒盟","阿拉善盟"],
            ["沈阳市","朝阳市","阜新市","铁岭市","抚顺市","本溪市","辽阳市","鞍山市","丹东市","大连市","营口市","盘锦市","锦州市","葫芦岛市"],
            ["长春市","白城市","松原市","吉林市","四平市","辽源市","通化市","白山市","延边州"],
            ["哈尔滨市","齐齐哈尔市","七台河市","黑河市","大庆市","鹤岗市","伊春市","佳木斯市","双鸭山市","鸡西市","牡丹江市","绥化市","大兴安岭"],
            ["南京市","徐州市","连云港市","宿迁市","淮安市","盐城市","扬州市","泰州市","南通市","镇江市","常州市","无锡市","苏州市"],
            ["杭州市","湖州市","嘉兴市","舟山市","宁波市","绍兴市","衢州市","金华市","台州市","温州市","丽水市"],
            ["合肥市","宿州市","淮北市","亳州市","阜阳市","蚌埠市","淮南市","滁州市","马鞍山市","芜湖市","铜陵市","安庆市","黄山市","六安市","巢湖市","池州市","宣城市"],
            ["福州市","南平市","莆田市","三明市","泉州市","厦门市","漳州市","龙岩市","宁德市"],
            ["南昌市","九江市","景德镇市","鹰潭市","新余市","萍乡市","赣州市","上饶市","抚州市","宜春市","吉安市"],
            ["济南市","青岛市","聊城市","德州市","东营市","淄博市","潍坊市","烟台市","威海市","日照市","临沂市","枣庄市","济宁市","泰安市","莱芜市","滨州市","菏泽市"],
            ["郑州市","开封市","三门峡市","洛阳市","焦作市","新乡市","鹤壁市","安阳市","濮阳市","商丘市","许昌市","漯河市","平顶山市","南阳市","信阳市","周口市","驻马店市","济源市"],
            ["武汉市","十堰市","襄樊市","荆门市","孝感市","黄冈市","鄂州市","黄石市","咸宁市","荆州市","宜昌市","随州市","恩施州"],
            ["长沙市","张家界市","常德市","益阳市","岳阳市","株洲市","湘潭市","衡阳市","郴州市","永州市","邵阳市","怀化市","娄底市","湘西州"],
            ["广州市","深圳市","清远市","韶关市","河源市","梅州市","潮州市","汕头市","揭阳市","汕尾市","惠州市","东莞市","珠海市","中山市","江门市","佛山市","肇庆市","云浮市","阳江市","茂名市","湛江市"],
            ["南宁市","桂林市","柳州市","梧州市","贵港市","玉林市","钦州市","北海市","防城港市","崇左市","百色市","河池市","来宾市","贺州市"],
            ["海口市","三亚市"],
            ["成都市","广元市","绵阳市","德阳市","南充市","广安市","遂宁市","内江市","乐山市","自贡市","泸州市","宜宾市","攀枝花市","巴中市","达州市","资阳市","眉山市","雅安市","阿坝州","甘孜州","凉山州"],
            ["贵阳市","六盘水市","遵义市","安顺市","毕节地区","铜仁地区","黔东南州","黔南州","黔西南州"],
            ["昆明市","曲靖市","玉溪市","保山市","昭通市","丽江市","思茅市","临沧市","德宏州","怒江州","迪庆州","大理州","楚雄州","红河州","文山州","西双版纳州"],
            ["拉萨市","那曲地区","昌都地区","林芝地区","山南地区","日喀则地区","阿里地区"],
            ["西安市","延安市","铜川市","渭南市","咸阳市","宝鸡市","汉中市","榆林市","安康市","商洛市"],
            ["兰州市","嘉峪关市","白银市","天水市","武威市","酒泉市","张掖市","庆阳市","平凉市","定西市","陇南市","临夏州","甘南州"],
            ["西宁市","海东地区","海北州","海南州","黄南州","果洛州","玉树州","海西州"],
            ["银川市","石嘴山市","吴忠市","固原市","中卫市"],
            ["乌鲁木齐市","克拉玛依市","自治区直辖县级行政单位","喀什地区","阿克苏地区","和田地区","吐鲁番地区","哈密地区","克孜勒苏柯州","博尔塔拉州","昌吉州","巴音郭楞州","伊犁州","塔城地区","阿勒泰地区"],
            ["香港"],
            ["澳门"],
            ["台北市","高雄市","台中市","花莲市","基隆市","嘉义市","金门市","连江市","苗栗市","南投市","澎湖市","屏东市","台东市","台南市","桃园市","新竹市","宜兰市","云林市","彰化市"]]
      }
      },
      methods:{
        getstartday:function(e){
          console.log(e);
          this.myyear=e
        },
        getendday:function(e){
          this.mydays=e
          console.log(e);
        },
        before:function(){
          if(this.num>1){
            this.num=this.num-1;
          }else{
            this.num=this.provinces.length-1;
          }
        },
        after:function(){
          if(this.num<this.provinces.length-1){
            this.num=this.num+1;
          }else{
            this.num=0;
          }
        },
        clickcity:function (tar,e) {
          tar.style.backgroundColor='white';
          tar.style.color='rgba(0, 0, 0, 0.42)';
          if(this.place.indexOf(e)>-1){
            tar.style.backgroundColor='white';
            tar.style.color='rgba(0, 0, 0, 0.42)';
            this.place.splice(this.place.indexOf(e), 1);
          }else{
            tar.style.backgroundColor='red';
            tar.style.color='white';
            this.place.push(e)
          }

        },
        clickbtn:function () {
          if(this.btnclick==0){
            this.title='出行日期'
          }else if(this.btnclick==1){
            this.title='出行信息'
          }
          this.btnclick=this.btnclick+1;
        },
        getYear:function (e) {
          this.myyear=e.value;
        },
        getMonth:function (e) {
          this.mymonth=e.value;
        },
        getDays:function (e) {
          this.mydays=e.value;
        },
        btnsubmit:function(){
          var vm=this;
          axios.post("http://127.0.0.1:8000/traval/addTraval/",
            {
              'travelstartplace':vm.place ,
              'travelstrattime':vm.myyear,
              'travelendtime':vm.mydays,
              'menbers':vm.people,
              'linkname':vm.linkname,
              'linknumber':vm.linktel,
              'destribe':vm.describe,
            },{
              headers: {
                'token': sessionStorage.getItem('token'),
              }
            })
            .then(function (res) {
              if(res.data){
                // vm.$router.push({path: '/answer'});
              }

            }.bind(this))
            .catch(function (err) {
              if (err.response) {
                console.log(err.response)
                //控制台打印错误返回的内容
              }
              //bind(this)可以不用
            }.bind(this))
        }


      }
    }
</script>

<style scoped>
  .hide{
    display: none;
  }
  body,ul,li{
    padding: 0;
    margin: 0;
  }
  ul,li{
    list-style: none;
  }
  .container{
    width: 100%;
    height: auto;
    background-color: #f2f2f2;
  }
  .top{
    width: 100%;
    height: 500px;
    background-image: url("../../static/images/drive_self.png");
    background-position: center center;
  }
  /*--------------------主体--------------------------------------*/
  .main{
    width: 80%;
    height: 600px;
    background-color: white;
    margin: auto;
    position: relative;
    top: -40px;
    display: flex;
  }
  .main .title{
    position: absolute;
    left: 365px;
    top: 30px;
    font-size: 20px;
  }
  .main .left-main{
    width: 75%;
    height: 100%;
    /*background-color: yellow;*/
  }
  .left-main .city{
    width: 100%;
    height: 500px;
    background-color: white;
    /*background-color: red;*/
    font-size: 20px;
    position: relative;
    top: 38px;
    text-align: center;

  }
  .province{
    box-sizing: border-box;
    margin-top: 50px;
  }
  .province .provincename{
    width: 120px;
    height: 40px;
    background-color: #ff6700;
    text-align: center;
    line-height: 40px;
    display: inline-block;
    color: white;
  }
  .citys{
    box-sizing: border-box;
    /*background-color: yellow;*/
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 50px;
    width: 700px;
  }
  .citys div{
    font-size: 17px;
    box-sizing: border-box;
    width: 90px;
    height: 50px;
    line-height: 50px;
    border: solid rgba(0, 0, 0, 0.17) 1px;
    text-align: center;
    color: rgba(0, 0, 0, 0.42);
    margin-right: 10px;
    margin-bottom: 20px;
  }
  .citys div:hover{
    cursor: pointer;

  }
  .btn-next{
    color: white;
    background-color: red;
    display: inline-block;
    width:80px;
    height: 40px;
    text-align: center;
    line-height: 40px;
  }
  .btn-next:hover{
    cursor: pointer;
  }
  .left2 .mydate{
    margin-top: 150px;
    margin-left: 100px;
    margin-bottom: 50px;
  }
  .left2 .mydate,.left2 .myday{
    font-size: 20px;
  }
  .left2 .mydate select{
    width: 150px;
    height: 60px;
  }
  .left2 .myday{
    margin-left: 100px;
    margin-bottom: 50px;
  }
  .left2 .myday select{
    width: 150px;
    height: 60px;
  }
  .left2 .left-main-bottom{
    margin-left: 350px;
  }
  .left3 div:first-child{
    margin-top: 100px;
  }
  .left3 div{
    height: 60px;
    font-size: 18px;
    margin-bottom: 10px;
    margin-left: 100px;
  }
  .left3 div select{
    width: 150px;
    height: 40px;
  }
  .left3 .submitbtn{
    position: relative;
    margin-top: 10px;
  }

  /*------------------右边-----------------------------*/

  .main .right-main{
    width: 25%;
    height: 100%;
    /*background-color: #ffa627;*/
    /*text-align: center;*/
    font-weight: 500;
    font-size: 20px;
    color: #666666;
  }
  .right-main ul li{
      margin-bottom: 20px;
  }
  .right-main ul li.place{
    display: flex;
    flex-wrap: wrap;
  }
  .right-main ul span.city{
    display: inline-block;
    height: 30px;
    width: 50px;
    text-align: center;
    font-size: 16px;
    line-height: 30px;
    color: white;
    margin-right: 5px;
    margin-bottom: 5px;
    background-color: #ff8d00;
  }





</style>
