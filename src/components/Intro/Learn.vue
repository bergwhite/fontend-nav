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
      msg: '入门教程',
      link: [
        {
          tagName: 'HTML',
          tagList: [
            {
              linkName: '菜鸟教程 HTML',
              linkSrc: 'http://www.runoob.com/html/html-tutorial.html',
              linkDes: ''
            },
            {
              linkName: '菜鸟教程 HTML5',
              linkSrc: 'http://www.runoob.com/html/html5-intro.html',
              linkDes: ''
            },
            {
              linkName: 'head内容大全',
              linkSrc: 'http://gethead.info/',
              linkDes: ''
            },
            {
              linkName: 'DMN HTML',
              linkSrc: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML',
              linkDes: '权威的Web开发手册'
            }
          ]
        },
        {
          tagName: 'CSS',
          tagList: [
            {
              linkName: '菜鸟教程 CSS',
              linkSrc: 'http://www.runoob.com/css/css-tutorial.html',
              linkDes: ''
            },
            {
              linkName: '菜鸟教程 CSS3',
              linkSrc: 'http://www.runoob.com/css3/css3-tutorial.html',
              linkDes: ''
            },
            {
              linkName: '学习CSS布局',
              linkSrc: 'http://zh.learnlayout.com/',
              linkDes: ''
            },
            {
              linkName: 'CSS参考手册',
              linkSrc: 'http://css.doyoe.com/',
              linkDes: ''
            },
            {
              linkName: 'MDN CSS',
              linkSrc: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS',
              linkDes: '权威的Web开发手册'
            }
          ]
        },
        {
          tagName: 'JS',
          tagList: [
            {
              linkName: '菜鸟教程 JavaScript',
              linkSrc: 'http://www.runoob.com/js/js-tutorial.html',
              linkDes: ''
            },
            {
              linkName: 'JavaScript 中文网',
              linkSrc: 'http://www.itxueyuan.org/',
              linkDes: ''
            },
            {
              linkName: '跟着9张思维导图学习Javascript（多图预警）',
              linkSrc: 'http://www.cnblogs.com/coco1s/p/3953653.html#!comments',
              linkDes: ''
            },
            {
              linkName: 'JavaScript 秘密花园',
              linkSrc: 'http://bonsaiden.github.io/JavaScript-Garden/zh/',
              linkDes: ''
            },
            {
              linkName: 'MDN JS',
              linkSrc: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript',
              linkDes: '权威的Web开发手册'
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
