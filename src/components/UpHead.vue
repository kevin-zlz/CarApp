<template>
  <div class="info">
    <ul>
      <li class="items">
        <h3 class="aa">修改头像</h3>
        <span class="aa3">明明可以靠颜值，车与颜值并存，快来设置头像吧！</span>
      </li>

      <li class="items" id="aaa">
        <span class="aa11">当前头像</span>
        <form id="form1">
          <input type="file" class="aa2" name="usericon" id="upload_file1" @change="update2">
          <div class="img-add"><img src="../assets/images/538031d8c9c1794a155d07b5847dc9b6.jpg" alt=""></div>
          <!--<input type="file" name="usericon" @change="update">-->
        </form>
        <div id="preview"></div>
        <!--<input type="submit" value="提交">-->
        <span class="aa4">请上传小于2M的JPG格式图片</span>
      </li>
      <li class="items" id="aaa1">
        <span class="aa1">历史头像</span>
        <div class="ee">
          <div><img src="../assets/images/QQ图片20181019210630.jpg" alt=""></div>
          <div><img src="../assets/images/QQ图片20181019210630.jpg" alt=""></div>
          <div><img src="../assets/images/QQ图片20181019210630.jpg" alt=""></div>
        </div>
      </li>
      <div class="bb2">
        <input class="bb1" type="button" value="保存" @click="update1">
      </div>
    </ul>
  </div>
</template>

<script>
  import $ from 'jquery'
  import axios from 'axios'
  export default {

    name: 'UpHead',
    data() {
      return {
        btn: false,
        flag: 0,
        form1: '',
        form2: '',
        formData: [],
      }
    },

    methods: {
      update1() {
        console.log("this.formData");
        let config = {
          headers: {'Content-Type': 'multipart/form-data'}
        };
        // 添加请求头
        let vm = this;
        axios.post('http://127.0.0.1:8000/user/uphead/', this.formData[0], config)
          .then(response => {
            if (response.data.code === 0) {
              vm.ImgUrl = response.data.data;
              console.log(vm.ImgUrl);
            }
            console.log(response.data)
          });
      },
      update2(e) {  // 上传照片
        var self = this;
        let file = e.target.files[0];
        // console.log(file)
        this.preview1(file);
        /* eslint-disable no-undef */
        let param = new FormData();// 创建form对象
        //usericon通常就是file的name属性值
        param.append('usericon', file, file.name);// 通过append向form对象添加数据
        param.append('chunk', '0'); // 添加form表单中其他数据
        this.formData.push(param);
        console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
      },
      preview1(file) {
        var img = new Image();
        img.src = URL.createObjectURL(file);
        var url = img.src;
        var $img = $(img);
        $img.css({'width': '175px', 'height': '175px'});
        img.onload = function () {
          URL.revokeObjectURL(url);
          $('.img-add').empty().append($img);
        }
      },

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
    /*outline: none;*/
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
    /*line-height: 70px;*/
  }
  .aa{
    position: relative;
    top: 5px;
    /*color: red;*/
  }
  .items .aa3{
    position: relative;
    top: 10px;
    left: 350px;
    font-size: 16px;
    color: red;
  }
  .items .aa1{
    position: relative;
    top: 0px;
    left: 10px;
    height: 110px;
    line-height: 110px;
    /*background: #22A7F0;*/
  }
  .aa4{
    position: relative;
    height: 175px;
    line-height: 175px;
    left: 215px;
    color: #c6c6ce;
    font-size: 14px;
  }
  .items .aa2{
    position: relative;
    /*top: 72px;*/
    left: 130px;
    /*top: 250px;*/
    width: 175px;
    height: 175px;
    /*/完全透明*!*/
    opacity: 0;
    z-index: 5;
  }
  .bb1{
    position: relative;
    width: 100px;
    height: 50px;
    background: rgba(238, 184, 26, 0.2);
    color: #eeb819;
    border: solid 1px #eeb819;
    left: 125px;
    top: 10px;
  }
  .bb2{
    width: 750px;
    height: 70px;
    background: #f8f8fa;
    margin: auto;
  }
  .img-add{
    position: relative;
    width: 175px;
    height: 175px;
    background: rgba(238, 184, 25, 0.2);
    color: #eeb819;
    top: -175px;
    left: 130px;
    /*line-height: 175px;*/
    text-align: center;
    border: solid 1px #eeb819;
  }
  #preview{
    position: relative;
    left: 80px;
    width: 150px;
    height: 70px;
    /*border: 1px solid;*/
    /*background: #22A7F0;*/
  }
  #aaa{
    height: 175px;

  }
  .items .aa11{
    position: relative;
    /*top: 25px;*/
    left: 10px;
    height: 175px;
    line-height: 175px;
    /*background: #22A7F0;*/
  }
  .img-add img{
    width: 100%;
    height: 100%;
    /*图片剧中*/
    object-fit: cover;
    /*变圆*/
    /*border-radius: 50%;*/
  }
  #aaa1{
    height: 110px;
  }
  /*#aaa1 div{*/
    /*flex: 1;*/
  /*}*/
  #aaa1 .ee{
    position: relative;
    height: 110px;
    width: 420px;
    left: 130px;
    /*background: #22A7F0;*/
    display: flex;
  }
  #aaa1 .ee div{
    flex: 1;
    height: 110px;
    margin-right: 30px;
  }
  #aaa1 .ee div img{
    width: 100%;
    height: 100%;
    /*图片剧中*/
    object-fit: cover;
    /*变圆*/
    border-radius: 50%;
  }
</style>
