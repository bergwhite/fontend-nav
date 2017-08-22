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
      msg: '系列',
      props: ['renderLink'],
      link: [
        {
          tagName: '前端总结',
          tagList: [
            {
              linkName: '聊一聊系列',
              linkSrc: 'https://segmentfault.com/u/doctorhou',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'JavaScript 基础',
          tagList: [
            {
              linkName: '廖雪峰 JavaScript 教程',
              linkSrc: 'http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000',
              linkDes: ''
            },
            {
              linkName: '阮一峰 JavaScript 标准参考教程（alpha）',
              linkSrc: 'http://javascript.ruanyifeng.com/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'JavaScript 2015 (ES6)',
          tagList: [
            {
              linkName: '深入浅出 ES6',
              linkSrc: 'http://www.infoq.com/cn/es6-in-depth/',
              linkDes: ''
            },
            {
              linkName: '阮一峰 ES6入门',
              linkSrc: 'http://es6.ruanyifeng.com/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: '浏览器原理',
          tagList: [
            {
              linkName: '现代魔法学院 浏览器揭秘篇',
              linkSrc: 'http://www.nowamagic.net/academy/part/48/115/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: '设计模式',
          tagList: [
            {
              linkName: 'JavaScript 设计模式理论与实践',
              linkSrc: 'http://www.cnblogs.com/lrzw32/tag/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: '数据结构和算法',
          tagList: [
            {
              linkName: '可视化算法 VisualGo',
              linkSrc: 'http://zh.visualgo.net/',
              linkDes: ''
            },
            {
              linkName: '在线算法题  LeetCode',
              linkSrc: 'https://leetcode.com/',
              linkDes: ''
            },
            {
              linkName: 'PAT 初级练习',
              linkSrc: 'https://www.patest.cn/contests/pat-b-practise',
              linkDes: ''
            },
            {
              linkName: 'PAT 题目集',
              linkSrc: 'https://pta.patest.cn/pta/test',
              linkDes: ''
            },
            {
              linkName: 'PKU OJ',
              linkSrc: 'http://poj.org/problemlist',
              linkDes: ''
            },
            {
              linkName: 'Project Euler',
              linkSrc: 'https://projecteuler.net/archives',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'Linux',
          tagList: [
            {
              linkName: 'Linux 命令大全',
              linkSrc: 'http://man.linuxde.net/',
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
