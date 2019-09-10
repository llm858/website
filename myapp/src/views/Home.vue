<template>
  <div class="home">
    <div class="item">
    <div>
    <el-row class="item">
    <div class="block">
    <el-carousel style="margin-top:30px;" height="250px">
      <el-carousel-item>
        <img src="../assets/teacher.png">
      </el-carousel-item>
       <el-carousel-item>
        <img src="../assets/moom.png">
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="myitem">
    <h3>2019年9月有奖征文活动开始啦！</h3>
    <el-breadcrumb separator="|">
    <el-breadcrumb-item  style="margin-bottom:15px;">2019年8月征文获奖名单</el-breadcrumb-item>
    <el-breadcrumb-item>2019年有奖征文活动投稿作文专区</el-breadcrumb-item>
  </el-breadcrumb>
  <el-breadcrumb separator="|">
    <el-breadcrumb-item>2019年8月征文获奖名单</el-breadcrumb-item>
    <el-breadcrumb-item>2019年有奖征文活动投稿作文专区</el-breadcrumb-item>
  </el-breadcrumb>
  <hr>
  <h3>2019年9月有奖征文活动开始啦！</h3>
    <el-breadcrumb separator="|">
    <el-breadcrumb-item style="margin-bottom:15px;">2019年8月征文获奖名单</el-breadcrumb-item>
    <el-breadcrumb-item>2019年有奖征文活动投稿作文专区</el-breadcrumb-item>
  </el-breadcrumb>
  <el-breadcrumb separator="|">
    <el-breadcrumb-item>2019年8月征文获奖名单</el-breadcrumb-item>
    <el-breadcrumb-item>2019年有奖征文活动投稿作文专区</el-breadcrumb-item>
  </el-breadcrumb>
  <hr>
  <h3>2019年9月有奖征文活动开始啦！</h3>
    <el-breadcrumb separator="|">
    <el-breadcrumb-item style="margin-bottom:15px;">2019年8月征文获奖名单</el-breadcrumb-item>
    <el-breadcrumb-item>2019年有奖征文活动投稿作文专区</el-breadcrumb-item>
  </el-breadcrumb>
  <el-breadcrumb separator="|">
    <el-breadcrumb-item >2019年8月征文获奖名单</el-breadcrumb-item>
    <el-breadcrumb-item>2019年有奖征文活动投稿作文专区</el-breadcrumb-item>
  </el-breadcrumb>
  <hr>
  </div>
  </el-row>
  <el-row class="item2">
    <div class="item3">
    <h5>写作素材</h5>
    <ul>
      <li>[英语写作素材] 2019季节类英语作文汇总</li>
      <li>[哲理故事] 2018年秋季关于哲理故事主题的汇</li>
      <li>[考场素材包] 2018年秋季高考作文素材汇总</li>
      <li>[英语写作素材] 2019季节类英语作文汇总</li>
    </ul>
    <hr>
    <h5>热点推荐</h5>
    <ul>
      <li>[英语写作素材] 2019季节类英语作文汇总</li>
      <li>[哲理故事] 2018年秋季关于哲理故事主题的汇</li>
      <li>[考场素材包] 2018年秋季高考作文素材汇总</li>
      <li>[英语写作素材] 2019季节类英语作文汇总</li>
    </ul>
    </div>
    <el-tabs class="file" v-model="activeName1">
    <el-tab-pane label="小学组原创 " name="first">
      <table>
      <tr>
        <td>荐</td>
        <td>[原创投稿] 追寻</td>
        <td>作者：赵梓秀</td>
      </tr>
      <tr>
        <td>荐</td>
        <td>[读后感] 读《活着》有感---别哭了！</td>
        <td>作者：赵梓秀</td>
      </tr>
      <tr>
        <td>荐</td>
        <td>[叙事作文] 那一刻，我发现生命的美好</td>
        <td>作者：赵梓秀</td>
      </tr>
      <tr>
        <td>荐</td>
        <td>[散文] 话说宜宾酒</td>
        <td>作者：赵梓秀</td>
      </tr>
      <tr>
        <td>荐</td>
        <td>[叙事作文] 彩虹总在风雨后</td>
        <td>作者：赵梓秀</td>
      </tr>
    </table>
    </el-tab-pane>
    <el-tab-pane label="中学组原创" name="second">
      <table>
      <tr>
        <td>荐</td>
        <td>[原创投稿] 追寻</td>
        <td>作者：赵梓秀</td>
      </tr>
      <tr>
        <td>荐</td>
        <td>[读后感] 读《活着》有感---别哭了！</td>
        <td>作者：赵梓秀</td>
      </tr>
      <tr>
        <td>荐</td>
        <td>[叙事作文] 那一刻，我发现生命的美好</td>
        <td>作者：赵梓秀</td>
      </tr>
      <tr>
        <td>荐</td>
        <td>[散文] 话说宜宾酒</td>
        <td>作者：赵梓秀</td>
      </tr>
      <tr>
        <td>荐</td>
        <td>[叙事作文] 彩虹总在风雨后</td>
        <td>作者：赵梓秀</td>
      </tr>
    </table>
    </el-tab-pane>
    <el-tab-pane label="我要投稿" name="third">
    </el-tab-pane>
    <img src="../assets/qdp.gif" alt="">
  </el-tabs>
  </el-row>
  </div>
  <div style="float:left;margin-top: 30px;width: 1px;height:500px; background: darkgray;margin-left:10px;margin-right:10px;"></div>
  <div style="margin-top:10px;">
    <img src="../assets/start.png">
    <span >优质资源分享</span>
    <hr>
    <div class="item" >
    <img class="img" src="../assets/01.png" alt="">
    <div>
      <h3>有奖征文</h3>
    <p style="font-size:14px">轻松投稿，为你出书</p>
    </div>
    </div>
    <h5>荐 <span style="font-size:14px">还有稿费和官方荣誉证书</span></h5>
    <hr>
     <div class="item" >
    <img class="img" src="../assets/02.png" alt="">
    <div>
      <h3>有奖征文</h3>
    <p style="font-size:14px">轻松投稿，为你出书</p>
    </div>
    </div>
    <h5>荐 <span style="font-size:14px">还有稿费和官方荣誉证书</span></h5>
    <hr>
    <img src="../assets/start.png">
    <span>精品图书推荐</span>
    <hr>
    <div class="item" >
    <img class="img" src="../assets/01.png" alt="">
    <div>
      <h3>有奖征文</h3>
    <p style="font-size:14px">轻松投稿，为你出书</p>
    </div>
    </div>
    <h5>荐 <span style="font-size:14px">还有稿费和官方荣誉证书</span></h5>
    <hr>
     <div class="item" >
    <img class="img" src="../assets/02.png" alt="">
    <div>
      <h3>有奖征文</h3>
    <p style="font-size:14px">轻松投稿，为你出书</p>
    </div>
    </div>
    <h5>荐 <span style="font-size:14px">还有稿费和官方荣誉证书</span></h5>
  </div>
  </div>
  <!-- 考试作文 -->
  <h3 class="my-h3">考试作文</h3>
  <hr>
  <div class="item">
  <div>
  <img src="../assets/ks001.png" alt="">
  <span>小升初作文</span>
  <ul class="item4">
    <li>小升初满分作文</li>
    <li>小升初写作指导</li>
  </ul>
  <ul class="item4">
    <li>小升初作文范文</li>
    <li>小升初英语作文</li>
  </ul>
  <table>
      <tr>
        <td>荐</td>
        <td>2019年小升初各体裁作文写作</td>
      </tr>
      <tr>
        <td>荐</td>
        <td>2019年小升初各体裁作文写作</td>
      </tr>
      <tr>
        <td>荐</td>
        <td>2019年小升初各体裁作文写作</td>
      </tr>
      <tr>
        <td>荐</td>
        <td>2019年小升初各体裁作文写作</td>
      </tr>
      <tr>
        <td>荐</td>
        <td>2019年小升初各体裁作文写作</td>
      </tr>
    </table>
  </div>
  <div>
  <img src="../assets/ks002.png" alt="">
  <span>小升初作文</span>
  <ul class="item4">
    <li>小升初满分作文</li>
    <li>小升初写作指导</li>
  </ul>
  <ul class="item4">
    <li>小升初作文范文</li>
    <li>小升初英语作文</li>
  </ul>
  <table>
      <tr>
        <td>荐</td>
        <td>2019年小升初各体裁作文写作</td>
      </tr>
      <tr>
        <td>荐</td>
        <td>2019年小升初各体裁作文写作</td>
      </tr>
      <tr>
        <td>荐</td>
        <td>2019年小升初各体裁作文写作</td>
      </tr>
      <tr>
        <td>荐</td>
        <td>2019年小升初各体裁作文写作</td>
      </tr>
      <tr>
        <td>荐</td>
        <td>2019年小升初各体裁作文写作</td>
      </tr>
    </table>
  </div>
  <div>
  <img src="../assets/ks003.png" alt="">
  <span>小升初作文</span>
  <ul class="item4">
    <li>小升初满分作文</li>
    <li>小升初写作指导</li>
  </ul>
  <ul class="item4">
    <li>小升初作文范文</li>
    <li>小升初英语作文</li>
  </ul>
  <table>
      <tr>
        <td>荐</td>
        <td>2019年小升初各体裁作文写作</td>
      </tr>
      <tr>
        <td>荐</td>
        <td>2019年小升初各体裁作文写作</td>
      </tr>
      <tr>
        <td>荐</td>
        <td>2019年小升初各体裁作文写作</td>
      </tr>
      <tr>
        <td>荐</td>
        <td>2019年小升初各体裁作文写作</td>
      </tr>
      <tr>
        <td>荐</td>
        <td>2019年小升初各体裁作文写作</td>
      </tr>
    </table>
    </div>
      <div style="width:255px;">
       <img class="img1" src="../assets/study.png" alt="">
        <img class="img2" src="../assets/zhengwen.png" alt="">
        <img class="img3" src="../assets/address.jpg" alt="">
        <img class="img4" src="../assets/chinese.png" alt="">
      </div>
  </div>
  <!-- 考试作文 -->
  <div class="mydiv">
  <h3 class="my-h3">考试作文</h3>
    </div>
  <hr>
  <div class="item">
    <div>
  <div class="mydiv">
  <a href="javascript:;">写人</a>
  <a href="javascript:;">叙事</a>
  <a href="javascript:;">写景</a>
  <a href="javascript:;">状物</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">议论文</a>
  <a href="javascript:;">说明文</a>
  <a href="javascript:;">读后感</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">书信</a>
  <a href="javascript:;">日记</a>
  <a href="javascript:;">想象</a>
  <a href="javascript:;">话题</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">演讲稿</a>
  <a href="javascript:;">小说</a>
  <a href="javascript:;">续写改写</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">写人</a>
  <a href="javascript:;">叙事</a>
  <a href="javascript:;">写景</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">状物</a>
  <a href="javascript:;">议论文</a>
  <a href="javascript:;">说明文</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">读后感</a>
  <a href="javascript:;">书信</a>
  <a href="javascript:;">日记</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">想象</a>
  <a href="javascript:;">话题</a>
  </div>
  </div>
  <div class="item3">
  <h5>最新小学作文</h5>
  <ul>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
  </ul>
  </div>
  <div class="item3">
  <h5>最热小学作文</h5>
  <ul>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
  </ul>
  </div>
  <div style="margin-left:15px;">
  <h5>小学作文辅导</h5>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <hr>
  <h5>小学作文辅导</h5>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  </div>
  </div>
  <div class="mydiv">
  <h3 class="my-h3">初中作文</h3>
    </div>
  <hr>
  <div class="item">
    <div>
  <div class="mydiv">
  <a href="javascript:;">写人</a>
  <a href="javascript:;">叙事</a>
  <a href="javascript:;">写景</a>
  <a href="javascript:;">状物</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">议论文</a>
  <a href="javascript:;">说明文</a>
  <a href="javascript:;">读后感</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">书信</a>
  <a href="javascript:;">日记</a>
  <a href="javascript:;">想象</a>
  <a href="javascript:;">话题</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">演讲稿</a>
  <a href="javascript:;">小说</a>
  <a href="javascript:;">续写改写</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">写人</a>
  <a href="javascript:;">叙事</a>
  <a href="javascript:;">写景</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">状物</a>
  <a href="javascript:;">议论文</a>
  <a href="javascript:;">说明文</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">读后感</a>
  <a href="javascript:;">书信</a>
  <a href="javascript:;">日记</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">想象</a>
  <a href="javascript:;">话题</a>
  </div>
  </div>
  <div class="item3">
  <h5>最新小学作文</h5>
  <ul>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
  </ul>
  </div>
  <div class="item3">
  <h5>最热小学作文</h5>
  <ul>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
  </ul>
  </div>
  <div style="margin-left:15px;">
  <h5>小学作文辅导</h5>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <hr>
  <h5>小学作文辅导</h5>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  </div>
  </div>
  <div class="mydiv">
  <h3 class="my-h3">高中作文</h3>
    </div>
  <hr>
  <div>
  <div class="item">
    <div>
  <div class="mydiv">
  <a href="javascript:;">写人</a>
  <a href="javascript:;">叙事</a>
  <a href="javascript:;">写景</a>
  <a href="javascript:;">状物</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">议论文</a>
  <a href="javascript:;">说明文</a>
  <a href="javascript:;">读后感</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">书信</a>
  <a href="javascript:;">日记</a>
  <a href="javascript:;">想象</a>
  <a href="javascript:;">话题</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">演讲稿</a>
  <a href="javascript:;">小说</a>
  <a href="javascript:;">续写改写</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">写人</a>
  <a href="javascript:;">叙事</a>
  <a href="javascript:;">写景</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">状物</a>
  <a href="javascript:;">议论文</a>
  <a href="javascript:;">说明文</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">读后感</a>
  <a href="javascript:;">书信</a>
  <a href="javascript:;">日记</a>
  </div>
  <div class="mydiv">
  <a href="javascript:;">想象</a>
  <a href="javascript:;">话题</a>
  </div>
  </div>
  <div class="item3">
  <h5>最新小学作文</h5>
  <ul>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
  </ul>
  </div>
  <div class="item3">
  <h5>最热小学作文</h5>
  <ul>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
    <li>[叙事作文] 三八妇女节</li>
  </ul>
  </div>
  <div style="margin-left:15px;">
  <h5>小学作文辅导</h5>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <hr>
  <h5>小学作文辅导</h5>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  <p>小学作文指导：小学生作文开头的常见方法</p>
  </div>
  </div>
  <img style="width:860px;margin-top:15px;" src="../assets/start1.jpg" alt="">
  </div>
  <!-- 节日作文 -->
  <h3>节日作文</h3>
  <hr>
  <div class="item">
  <div>
    <img style="margin-left:-110px;" src="../assets/fes.jpg" alt="">
  </div>
    <ul style="margin-right:50px;margin-left:50px;">
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
    </ul>
    <ul style="margin-right:50px;">
      <li>除夕</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
    </ul>
    <ul style="margin-right:50px;">
      <li>国庆</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
    </ul>
    <div>
      <h5>节日类作文推荐</h5>
      <span style="padding:5px;background:yellow;display:inline-block">1</span>
      <span>新世纪的曙光</span>
      <div style="margin-top:5px;">
        <span style="padding:5px;background:yellow;display:inline-block">2</span>
      <span>新世纪的曙光</span>
      </div>
      <div style="margin-top:5px;">
        <span style="padding:5px;background:yellow;display:inline-block">3</span>
      <span>新世纪的曙光</span>
      </div>
      <div style="margin-top:5px;">
        <span style="padding:5px;background:#333;display:inline-block;color:#fff">4</span>
      <span>新世纪的曙光</span>
      </div>
      <hr>
      <h5>节日类作文辅导</h5>
      <p>关于党的作文：爱党无垠</p>
      <p>关于党的作文：爱党无垠</p>
      <p>关于党的作文：爱党无垠</p>
    </div>
    <div style="float:left;margin-top: 5px;width: 1px;height:250px; background: darkgray;margin-left:50px;margin-right:50px;"></div>
    <div>
      <h5>节日类最新作文</h5>
      <p>七夕节的遐想</p>
      <p>七夕节的遐想</p>
      <p>七夕节的遐想</p>
      <p>七夕节的遐想</p>
      <p>七夕节的遐想</p>
      <p>七夕节的遐想</p>
      <p>七夕节的遐想</p>
    </div>
  </div>
  <img style="width:860px;margin-top:15px;" src="../assets/score.png" alt="">
  <!-- 节日作文 -->
  <h3>节日作文</h3>
  <hr>
  <div class="item">
  <div>
    <img style="margin-left:-110px;" src="../assets/fes.jpg" alt="">
  </div>
    <ul style="margin-right:50px;margin-left:50px;">
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
    </ul>
    <ul style="margin-right:50px;">
      <li>除夕</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
    </ul>
    <ul style="margin-right:50px;">
      <li>国庆</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
    </ul>
    <div>
      <h5>节日类作文推荐</h5>
      <span style="padding:5px;background:yellow;display:inline-block">1</span>
      <span>新世纪的曙光</span>
      <div style="margin-top:5px;">
        <span style="padding:5px;background:yellow;display:inline-block">2</span>
      <span>新世纪的曙光</span>
      </div>
      <div style="margin-top:5px;">
        <span style="padding:5px;background:yellow;display:inline-block">3</span>
      <span>新世纪的曙光</span>
      </div>
      <div style="margin-top:5px;">
        <span style="padding:5px;background:#333;display:inline-block;color:#fff">4</span>
      <span>新世纪的曙光</span>
      </div>
      <hr>
      <h5>节日类作文辅导</h5>
      <p>关于党的作文：爱党无垠</p>
      <p>关于党的作文：爱党无垠</p>
      <p>关于党的作文：爱党无垠</p>
    </div>
    <div style="float:left;margin-top: 5px;width: 1px;height:250px; background: darkgray;margin-left:50px;margin-right:50px;"></div>
    <div>
      <h5>节日类最新作文</h5>
      <p>七夕节的遐想</p>
      <p>七夕节的遐想</p>
      <p>七夕节的遐想</p>
      <p>七夕节的遐想</p>
      <p>七夕节的遐想</p>
      <p>七夕节的遐想</p>
      <p>七夕节的遐想</p>
    </div>
  </div>
  <img style="width:860px;margin-top:15px;" src="../assets/score.png" alt="">
  <!-- 节日作文 -->
  <h3>节日作文</h3>
  <hr>
  <div class="item">
  <div>
    <img style="margin-left:-110px;" src="../assets/fes.jpg" alt="">
  </div>
    <ul style="margin-right:50px;margin-left:50px;">
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
    </ul>
    <ul style="margin-right:50px;">
      <li>除夕</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
    </ul>
    <ul style="margin-right:50px;">
      <li>国庆</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
      <li>春节</li>
    </ul>
    <div>
      <h5>节日类作文推荐</h5>
      <span style="padding:5px;background:yellow;display:inline-block">1</span>
      <span>新世纪的曙光</span>
      <div style="margin-top:5px;">
        <span style="padding:5px;background:yellow;display:inline-block">2</span>
      <span>新世纪的曙光</span>
      </div>
      <div style="margin-top:5px;">
        <span style="padding:5px;background:yellow;display:inline-block">3</span>
      <span>新世纪的曙光</span>
      </div>
      <div style="margin-top:5px;">
        <span style="padding:5px;background:#333;display:inline-block;color:#fff">4</span>
      <span>新世纪的曙光</span>
      </div>
      <hr>
      <h5>节日类作文辅导</h5>
      <p>关于党的作文：爱党无垠</p>
      <p>关于党的作文：爱党无垠</p>
      <p>关于党的作文：爱党无垠</p>
    </div>
    <div style="float:left;margin-top: 5px;width: 1px;height:250px; background: darkgray;margin-left:50px;margin-right:50px;"></div>
    <div>
      <h5>节日类最新作文</h5>
      <p>七夕节的遐想</p>
      <p>七夕节的遐想</p>
      <p>七夕节的遐想</p>
      <p>七夕节的遐想</p>
      <p>七夕节的遐想</p>
      <p>七夕节的遐想</p>
      <p>七夕节的遐想</p>
    </div>
  </div>
  <img style="width:860px;margin-top:15px;" src="../assets/score.png" alt="">
  <hr>
  </div>
</template>

<script>
export default {
  data(){
    return{
      activeName1:"first"
    }
  }
  
}
</script>
<style scoped>
div,p,h3,h5,ul,li{
  margin:0;padding:0;
  font-family:14px '黑体'
}
ul li{
  list-style: none;
}
a{
text-decoration:none;
color:#000;
}
.item,.item2,.item3,.mydiv,.item4{
  display:flex;
  font-size:14px;
}
.item{
  justify-content: center;
}
 .block{
   width:300px;height:250px;
 }
 h3{
   color:rgb(135, 135, 175);
   font-weight: bold;
 }
 .myitem{
   padding:10px;
   line-height:50px;
   font-family: 12px '黑体';
 }
 .item2,.my-h3{
   text-align: left;
 }
 .item3{
   flex-direction:column;
   padding:10px;
   }
 .item4{
   list-style: none;
   padding:5px;
 }
 .item4 li{
   width:120px;height:35px;
   margin-right:5px;
   background:darkolivegreen;
   color:#fff;
   font-size:14px;
   text-align: center;
   line-height: 35px;
 }
 td:first-child{
   background:#f00;
   font-weight: blod;
   color:#fff;
 }
 .myh{
   width:100%;height:50px;
   background-color:#ddd;
   text-align: center;
   line-height: 50px;
   color:blue;
 }
 /* 四张图片的大小 */
 .img1,.img2,.img3,.img4{
   width:255px;
   height:70px;
 }
 /* 小学作文 */
 h3 li{
   padding:5px;
   border:1px solid #000;
   color:blue;
 }
 h3+ul{
   display:flex;
   list-style: none;
 }
 h3+ul li{
   padding:5px;
   border:1px solid #000;
   margin-right:5px;
   line-height: 30px;
 }
 div a{
   display:block;
   width:50px;height:30px;
   padding:3px;
   border:1px solid #ddd;
   margin-right:8px;
   margin-top:5px;
   font-size:10px;
   line-height:30px;
   text-align: center;
 }
 .img{
   width:72px;height:72px;
   border-radius: 50%;
   margin-right:15px;
 }
</style>