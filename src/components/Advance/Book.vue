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
      msg: '进阶图书',
      props: ['renderLink'],
      link: [
        {
          tagName: '前端（在线&免费）',
          tagList: [
            {
              linkName: '前端工程师手册（强烈推荐）',
              linkSrc: 'https://leohxj.gitbooks.io/front-end-database/content/',
              linkDes: ''
            },
            {
              linkName: 'Node入门（一本全面的Node.js教程）',
              linkSrc: 'http://www.nodebeginner.org/index-zh-cn.html',
              linkDes: ''
            },
            {
              linkName: 'N-blog（使用 Express + MongoDB 搭建多人博客）',
              linkSrc: 'https://www.gitbook.com/book/maninboat/n-blog/details',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'CSS',
          tagList: [
            {
              linkName: '《CSS 揭秘》',
              linkSrc: 'https://www.amazon.cn/%E5%9B%BE%E4%B9%A6/dp/B01ET3FO86/ref=sr_1_1?s=books&ie=UTF8&qid=1491976542&sr=1-1&keywords=css%E6%8F%AD%E7%A7%98',
              linkDes: '经典的CSS教程'
            },
            {
              linkName: '《CSS 权威指南》',
              linkSrc: 'https://www.amazon.cn/CSS%E6%9D%83%E5%A8%81%E6%8C%87%E5%8D%97-%E8%BF%88%E8%80%B6/dp/B0011F5SIC/ref=pd_sim_14_6?ie=UTF8&psc=1&refRID=VWVSSSA67T0R6WPHRTMP',
              linkDes: '经典的CSS教程'
            }
          ]
        },
        {
          tagName: 'JS',
          tagList: [
            {
              linkName: '《JavaScript DOM编程艺术》',
              linkSrc: 'https://www.amazon.cn/JavaScript-DOM%E7%BC%96%E7%A8%8B%E8%89%BA%E6%9C%AF-%E5%9F%BA%E6%80%9D/dp/B004VJM5KE/ref=sr_1_2?s=books&ie=UTF8&qid=1491976377&sr=1-2&keywords=javascript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1',
              linkDes: '经典的JS教程'
            },
            {
              linkName: '《JavaScript 高级程序设计》',
              linkSrc: 'https://www.amazon.cn/JavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1-%E6%B3%BD%E5%8D%A1%E6%96%AF/dp/B007OQQVMY/ref=sr_1_1?s=books&ie=UTF8&qid=1491976377&sr=1-1&keywords=javascript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1',
              linkDes: '经典的JS教程'
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
