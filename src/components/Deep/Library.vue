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
      msg: 'JS库',
      link: [
        {
          tagName: 'Lodash',
          tagList: [
            {
              linkName: 'Lodash 官方文档',
              linkSrc: 'https://lodash.com/',
              linkDes: ''
            },
            {
              linkName: 'Lodash API',
              linkSrc: 'https://lodash.com/docs/4.17.4',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'jQuery',
          tagList: [
            {
              linkName: 'jQuery 1.23 官方文档',
              linkSrc: 'http://api.jquery.com/category/version/1.2.3/',
              linkDes: ''
            },
            {
              linkName: 'jQuery 1.2 API',
              linkSrc: 'http://www.zhangxinxu.com/jq/api12/',
              linkDes: '精确分类的API'
            },
            {
              linkName: 'jQuery 1.2 中文文档',
              linkSrc: 'http://www.php100.com/manual/jquery/',
              linkDes: ''
            },
            {
              linkName: 'jQuery 插件库',
              linkSrc: 'http://www.jq22.com/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'Bootstrap',
          tagList: [
            {
              linkName: 'Bootstrap 中文文档',
              linkSrc: 'http://v3.bootcss.com/css/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'ZeptoJS',
          tagList: [
            {
              linkName: 'Zepto 官方文档',
              linkSrc: 'http://zeptojs.com/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'ChartJS',
          tagList: [
            {
              linkName: 'ChartJS 官方文档',
              linkSrc: 'http://www.chartjs.org/docs/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'EChartsJS',
          tagList: [
            {
              linkName: 'EChartsJS 官方文档',
              linkSrc: 'http://echarts.baidu.com/tutorial.html',
              linkDes: ''
            },
            {
              linkName: 'EChartsJS API',
              linkSrc: 'http://echarts.baidu.com/api.html',
              linkDes: ''
            },
            {
              linkName: 'EChartsJS DEMO',
              linkSrc: 'http://echarts.baidu.com/examples.html',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'RequireJS',
          tagList: [
            {
              linkName: 'RequireJS 官方文档',
              linkSrc: 'http://requirejs.org/',
              linkDes: ''
            },
            {
              linkName: 'RequireJS 中文文档',
              linkSrc: 'http://www.requirejs.cn/',
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
