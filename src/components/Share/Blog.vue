<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="item in link">
      <p>{{ item.tagName }}</p>
      <ul v-for="tag in item.tagList">
        <li><a :href="tag.linkSrc" :title="tag.linkDes" target="_blank">{{ tag.linkName }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '博客',
      link: [
        {
          tagName: '平台',
          tagList: [
            {
              linkName: '前端网',
              linkSrc: 'http://www.qdfuns.com/',
              linkDes: ''
            },
            {
              linkName: 'Web前端开发',
              linkSrc: 'http://www.css88.com/',
              linkDes: ''
            },
            {
              linkName: '前端开发博客',
              linkSrc: 'http://caibaojian.com/',
              linkDes: ''
            },
            {
              linkName: '前端里',
              linkSrc: 'http://www.yyyweb.com/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: '团队',
          tagList: [
            {
              linkName: 'AlloyTeam',
              linkSrc: 'http://www.alloyteam.com/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: '个人',
          tagList: [
            {
              linkName: 'Haorooms',
              linkSrc: 'http://haorooms.com/',
              linkDes: ''
            },
            {
              linkName: '张鑫旭',
              linkSrc: 'http://www.zhangxinxu.com/wordpress/',
              linkDes: ''
            },
            {
              linkName: 'ChokCoco',
              linkSrc: 'http://www.cnblogs.com/coco1s/',
              linkDes: ''
            },
            {
              linkName: '阮一峰',
              linkSrc: 'http://www.ruanyifeng.com/blog/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: '平台（设计）',
          tagList: [
            {
              linkName: '优设',
              linkSrc: 'http://www.uisdc.com/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: '团队（设计）',
          tagList: [
            {
              linkName: '腾讯 CDC',
              linkSrc: 'http://cdc.tencent.com/',
              linkDes: ''
            },
            {
              linkName: '腾讯 ISUX',
              linkSrc: 'https://isux.tencent.com/',
              linkDes: ''
            },
            {
              linkName: '腾讯 TGIdeals',
              linkSrc: 'http://tgideas.qq.com/',
              linkDes: ''
            }
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
