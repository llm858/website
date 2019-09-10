<template>
<div>
    <div class="item">
  <img class="my-img" src="../assets/header.png" alt="">
  <div class="main">
   <div>
      <img src="http://filesdown.zuowen.com/img/2017/07/28/144425_597add498de4c.png" alt=''>
      <p>作文网</p>
      </div>
      <div class="myimg">
      <img src="http://filesdown.zuowen.com/img/2017/12/29/155205_5a45f4250d389.png" alt=''>
      <p>家长帮</p>
      </div>
    </div>
    </div>
    <el-tabs class="mynav" v-model="activeName">
    <el-tab-pane class="tab-item" label="首页" name="first">
        <ul>
            <li>小升初作文</li>
            <li>高中作文</li>
            <li>高考作文</li>
            <li>诗词大全</li>
            <li>故事大全</li>
            <li>范文大全</li>
            <li>读后感大全</li>
            <li>演讲稿大全</li>
            <li>寓教于乐</li>
            <li>小说频道</li>
            <li>心理测试</li>
            <li>证书查询</li>
            <li>我要投稿</li>
        </ul>
    </el-tab-pane>
    <el-tab-pane label="小学作文" name="second">
        <ul>
        <li>小升初作文</li>
        <li>一年级作文</li>
        <li>二年级作文</li>
        <li>三年级作文</li>
        <li>四年级作文</li>
        <li>五年级作文</li>
        <li>六年级作文</li>
        <li>小升初写作指导</li>
        <li>小升初满分作文</li>
        <li>小升初作文真题</li>
        <li>语文题库</li>
    </ul>
    </el-tab-pane>
    <el-tab-pane label="初中作文" name="third">
        <ul>
            <li>中考作文</li>
            <li>初一作文</li>
            <li>初二作文</li>
            <li>初三作文</li>
            <li>历史中考满分作文</li>
            <li>中考作文真题</li>
            <li>中考作文预测</li>
            <li>中考满分作文</li>
            <li>中考作文解析</li>
            <li>写作素材</li>
            <li>写作指导</li>
        </ul>
    </el-tab-pane>
    <el-tab-pane label="高中作文" name="fourth">
        <ul>
            <li>高考作文</li>
            <li>高一作文</li>
            <li>高二作文</li>
            <li>高三作文</li>
            <li>历史高考作文</li>
            <li>高考作文预测</li>
            <li>高考作文真题</li>
            <li>高考满分作文</li>
            <li>写作素材</li>
            <li>写作指导</li>
        </ul>
    </el-tab-pane>
    <el-tab-pane label="话题作文" name="five">
        <ul>
            <li>圣诞节</li>
            <li>雾霾</li>
            <li>冬天</li>
            <li>运动会</li>
            <li>雪</li>
            <li>元旦</li>
            <li>春节</li>
            <li>感恩</li>
            <li>童年趣事</li>
            <li>感动</li>
            <li>青春</li>
            <li>诚信</li>
            <li>友情</li>
            <li>父爱</li>
            <li>亲情</li>
            <li>微笑</li>
            <li>艺术</li>
            <li>爱国</li>
            <li>大自然</li>
            <li>老师</li>
            <li>幸福</li>
        </ul>
    </el-tab-pane>
    <el-tab-pane label="单元作文" name="sex">
        <ul>
            <li>单元作文题目</li>
            <li>小学单元作文</li>
            <li>初一上</li>
            <li>初一下</li>
            <li>初二上</li>
            <li>初二下</li>
            <li>初三上</li>
            <li>初三下</li>
            <li>高一上</li>
            <li>高一下</li>
            <li>高二上</li>
            <li>高二下</li>
            <li>高三上</li>
            <li>高三下</li>
        </ul>
    </el-tab-pane>
    <el-tab-pane label="英语作文" name="seven">
        <ul>
            <li>考场英文</li>
            <li>小学英语作文</li>
            <li>初中英语作文</li>
            <li>高中英语作文</li>
            <li>热点英语作文</li>
            <li>英语读后感</li>
            <li>英语日记</li>
            <li>英语演讲稿</li>
            <li>英语写作素材</li>
            <li>英语写作素材</li>
        </ul>
    </el-tab-pane>
    <el-tab-pane label="作文素材" name="eight">
        <ul>
        <li>考场素材</li>
        <li>名言警句</li>
        <li>好词好句</li>
        <li>优美段落</li>
        <li>成语故事</li>
        <li>哲理故事</li>
        <li>名人故事</li>
        <li>事实论据</li>
        <li>历史典故</li>
        <li>祝福短信</li>
        <li>黑板报</li>
        <li>手抄报</li>
        <li>贺卡</li>
        </ul>
    </el-tab-pane>
    <el-tab-pane label="写作指导" name="nine">
        <ul>
            <li>写作方法</li>
            <li>经验交流</li>
            <li>文学常识</li>
            <li>国学作者</li>
            <li>国学译文</li>
            <li>国学作品鉴赏</li>
            <li>高考写作指导</li>
            <li>高考写作指导</li>
        </ul>
    </el-tab-pane>
    <el-tab-pane label="原创专区" name="ten">
        <ul>
        <li>写作方法</li>
        <li>经验交流</li>
        <li>文学常识</li>
        <li>写作基础</li>
        <li>国学作者</li>
        <li>国学译文</li>
        <li>国学作品鉴赏</li>
        <li>中考写作指导</li>
        <li>高考写作指导</li>
    </ul></el-tab-pane>
  </el-tabs>
      </div>
</template>

<script>
export default {
data(){
    return {
        activeName:'first'
    }
}
}
</script>
<style scoped>
p,div,h1,h2,h3,h4,h5,ul,li{
    margin:0;padding:0;
}
a{
    color:#fff;
    text-decoration: none;
}
/* 图片大小 */
.my-img{
    width:250px;
    height:60px;
    }
/* 两个图标的位置 */
.main{
    display:flex;
}
.myimg{
    margin-left:15px;
}
/* 第一行的位置 */
.item{
    display:flex;
    justify-content: space-around;
}
/* 导航栏的样式 */
.mynav{
    /* display:flex; */
    background-color:rgb(135, 135, 175);
    height:45px;width:100%;
    line-height: 45px;
    font-size:16px;
    justify-content: space-around;
    text-decoration: none;
    color:#fff;
}
.tab-item{
    color:#fff;
}
ul{
list-style: none;
}
ul{
    display:flex;
    justify-content: space-around;
}

</style>