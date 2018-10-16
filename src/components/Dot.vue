<template>
  <div style="background-color: #f9f9f9">
    <div class="hot_city">热门城市</div>
    <div class="each_city">
      <ul>
        <li v-for="(h,index) in hotCitys" :key="index" :id="index"><a href="#" v-text="h" style="color: gray;font-size: 15px"></a></li>
      </ul>
    </div>
    <div class="open_city">开通城市</div>
    <div class="c_main">
      <ul v-for="(city,index) in citys" :id="index" :key="index">
        <li v-text="citys[index].id"></li>
        <li v-for="(samll,index) in city.small" v-text="samll" :id="index" :key="index" @click="place"></li>
      </ul>
    </div>
    <div class="right_forever">

      <a class="city-each">A</a>
      <a class="city-each">B</a>
      <a class="city-each">C</a>
      <a class="city-each">D</a>
      <a class="city-each">F</a>
      <a class="city-each">G</a>
      <a class="city-each">J</a>
      <a class="city-each">K</a>
      <a class="city-each">L</a>
      <a class="city-each">M</a>
      <a class="city-each">N</a>
      <a class="city-each">P</a>
      <a class="city-each">Q</a>
      <a class="city-each">R</a>
      <a class="city-each">S</a>
      <a class="city-each">T</a>
      <a class="city-each">W</a>
      <a class="city-each">X</a>
      <a class="city-each">Y</a>
      <a class="city-each">Z</a>
    </div>


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
          <p class="f1">Copyright©2008-2018 www.zuche.com All Rights Reserved.　北京神州汽车租赁有限公司 京ICP备10005002号   京公网安备号 11010502026705</p>
          <p class="f2">如果您对神州租车网站有任何意见，欢迎发送邮件到 <a href="#">web@zuche.com</a></p>
          <a href="#" class="f3"><img src="../assets/images/left.png" ></a>
          <a href="#" class="f4"><img src="../assets/images/right.png" ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Dot",
        data:function () {
          return {
            hotCitys:["北京","广州","深圳","成都","重庆","西安","昆明","武汉","上海"],
            citys: [
              {'id':'A','small':['安庆', '阿克苏', '鞍山', '阿尔山', '安顺']},
              {'id':'B','small':['保定', '北京', '保山', '巴彦淖尔', '本溪', '蚌埠', '滨州', '毕节', '包头', '白山', '宝鸡']},
              {'id':'C','small':['成都', '重庆', '长春', '长沙', '常州', '长白山', '昌吉市', '沧州', '朝阳', '滁州', '长治', '赤峰', '池州', '承德']},
              {'id':'D','small':['大连', '大理', '东莞', '东营', '大同', '丹东', '大庆', '德州', '都匀', '都江堰', '邓州']},
              {'id':'E','small':['鄂尔多斯', '恩施']},
              {'id':'F','small':['福州', '佛山', '抚州', '阜阳', '阜新']},
              {'id':'G','small':['广州', '赣州', '贵阳', '桂林']},
              {'id':'H','small':['海口', '呼和浩特', '呼伦贝尔', '杭州', '湖州', '黄山', '红河', '侯马', '衡水', '淮安', '衡阳', '怀化', '邯郸', '淮北', '黄平', '河池', '合肥', '哈密', '黑河', '葫芦岛', '哈尔滨', '惠州', '黄冈', '海宁']},
              {'id':'J','small':['金华', '景德镇', '锦州', '吉林', '吉安', '酒泉', '济宁', '晋江市', '江门', '荆州', '佳木斯', '晋中', '嘉兴', '嘉峪关', '焦作', '济南', '荆门', '晋城', '介休']},
              {'id':'K','small': ['昆明', '库尔勒', '凯里', '开平', '克拉玛依']},
              {'id':'L','small':['廊坊', '漯河', '丽江', '六盘水', '泸沽湖', '陵水', '泸州', '聊城', '辽阳', '兰州', '龙岩', '丽水', '临沂', '澜沧', '林芝', '柳州', '洛阳', '连云港', '拉萨', '娄底', '临汾']},
              {'id':'M','small':['麻城', '牡丹江', '芒市', '绵阳', '满洲里市']},
              {'id':'N','small':['南昌', '南京', '南宁', '南充', '南通', '南阳', '宁波', '南平']},
              {'id':'P','small':['平顶山', '莆田', '萍乡', '普洱', '普者黑', '平遥']},
              {'id':'Q','small': ['青岛', '琼海', '泉州', '衢州', '齐齐哈尔', '青州', '曲靖', '曲阜', '潜江', '七台河', '秦皇岛']},
              {'id':'R','small': ['日照']},
              {'id':'S','small': ['石家庄', '深圳', '三亚', '沈阳', '商丘', '宿迁', '三门峡', '绍兴', '上饶', '汕尾', '上海', '苏州']},
              {'id':'T','small':['天津', '太原', '腾冲', '滕州', '通化', '唐山', '泰州', '天门', '天水', '泰安', '通辽', '台州']},
              {'id':'W','small': ['温州', '武汉', '潍坊', '武威', '威海', '乌鲁木齐', '乌兰浩特', '无锡']},
              {'id':'X','small': ['西安', '许昌', '厦门', '徐州', '兴义', '西双版纳', '新乡', '咸宁', '西宁', '咸阳', '忻州', '信阳', '香格里拉', '锡林浩特', '邢台', '仙桃', '湘潭', '襄阳']},
              {'id':'Y','small': ['榆林', '运城', '岳阳', '阳泉', '义乌', '延安', '余姚', '伊春', '益阳', '银川', '营口', '盐城', '宜昌', '烟台', '伊犁哈萨克自治州', '伊宁', '延吉', '玉溪', '扬州', '永州']},
              {'id':'Z','small':['张家口', '驻马店', '郑州', '镇江', '珠海', '遵义', '肇庆', '株洲', '淄博', '漳州', '中山', '舟山', '张掖', '昭通', '诸暨', '周口', '张家界', '枣庄', '湛江', '中卫']}
              ],

          }

        },
      methods:{
        place:function(){

        }
      }
    }
</script>

<style scoped>
  body,ul,li,a{
    padding: 0;
    margin: 0;
  }
  .head ul{
    flex:3;
    display: flex;
  }
  .head .headItems li{
    flex:1;
    display: inline-block;
    height: 45px;
    min-width: 80px;
    /*width: 80px;*/
    text-align: center;
    /*border: red solid 1px;*/
    margin-right: 20px;
  }
  .headItems li a{
    text-decoration: none;
    text-align: center;
    font-size:15px;
    color: white;
  }
  .headItems li:nth-child(4){
    text-align: left;
    flex: 2;
    /*width: 300px;*/
  }
  .headItems li.li5 a{
    font-size: 14px;
    color: #fabe00;
  }
  .headItems li.li1 a:hover{
    color: #fabe00;
  }
  .headItems li:nth-child(7){
    text-align: left;
    flex: 1.5;
  }
  body{
    background-color: #f9f9f9;
  }
  .hot_city{
    width: 1200px;
    height: 50px;
    font-size: 18px;
    margin: auto;
    margin-top: 38px;
    line-height: 50px;
    color: #2F2F39;

  }
  .each_city{
    width: 1200px;
    margin: 0 auto;
    /*padding: 10px;*/
    box-sizing: border-box;
    background-color: white;
    vertical-align: baseline
  }
  .each_city ul{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    border: 0;
    outline: 0;
    vertical-align: baseline;

  }
  .each_city ul li{
    display: inline-block;
    padding-right: 15px;
    padding-left: 15px;
    line-height: 30px;
    text-align: center;
  }
  .each_city ul li a{
    display: inline-block;
    text-decoration: none;
    color: #6E6E6E;

  }
  .each_city ul li a:hover{
    color: #F34742;
    text-decoration: underline;
  }
  .open_city{
    width: 1200px;
    height: 50px;
    line-height: 50px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 5px;
    color: #2F2F39;
    font-size: 18px;

  }
  .c_main{
    width: 1200px;
    margin: auto;
    background-color: white;
  }
  .c_main ul{
    width: 100%;
    margin: auto;
    list-style: none;
    padding-left: 30px;
    padding-right: 10px;
    box-sizing: border-box;
    display: flex;
    /*background-color: red;*/
    margin-top: 10px;
    height: 30px;
    color: gray;
  }
  .c_main ul li{
    width: auto;
    line-height: 40px;
    display: block;
    /*background-color: black;*/
    margin-right: 15px;
    cursor: pointer;
  }

  .right_forever{
    padding: 15px 0;
    width: 24px;
    display: block;
    background-color: #F5F5F5;
    position: fixed;
    top: 65%;
    right: 100px;
    transform: translate(0,-50%);
  }
  .right_forever a{
    display: block;
    text-align: center;
    color: #F23732;
    cursor: pointer;
    text-decoration: none;
  }
  .right_forever a:hover{
    background-color: #F23732;
    color: white;
  }
  .foot{
    width: 100%;
    height: 186px;
    background-color: #1b2b3b;
    color: #6d8aab;
    padding-bottom: 40px;
    padding-right: 150px;
    padding-left: 150px;
    box-sizing: border-box;
    position: relative;
    top: 60px;
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
    float: left;
  }
  .foot .foot_total .foot_down .f4 img{
    padding-top: 10px;
    width: 90px;
    height: 36px;
    object-fit: cover;
    margin-left: 10px;
    float: left;
  }
</style>
