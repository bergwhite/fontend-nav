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
      msg: '深入框架',
      props: ['renderLink'],
      link: [
        {
          tagName: 'React',
          tagList: [
            {
              linkName: 'React 官方文档',
              linkSrc: 'https://facebook.github.io/react/docs/hello-world.html',
              linkDes: '目前使用最广的MVVM框架'
            },
            {
              linkName: 'React 入门实例',
              linkSrc: 'http://www.ruanyifeng.com/blog/2015/03/react.html',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'Angular',
          tagList: [
            {
              linkName: 'Angular 官方文档',
              linkSrc: 'https://angular.io/docs/ts/latest/',
              linkDes: ''
            },
            {
              linkName: 'Angular 中文网',
              linkSrc: '',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'Vue',
          tagList: [
            {
              linkName: 'Vue 官方文档',
              linkSrc: 'https://cn.vuejs.org/',
              linkDes: '简单易用的MVVM框架'
            },
            {
              linkName: 'Vue Router 官方文档',
              linkSrc: 'https://router.vuejs.org/zh-cn/',
              linkDes: ''
            },
            {
              linkName: 'Vuex 官方文档',
              linkSrc: 'https://vuex.vuejs.org/zh-cn/',
              linkDes: ''
            },
            {
              linkName: 'Vue 爬坑之路',
              linkSrc: 'http://www.cnblogs.com/wisewrong/tag/vue/',
              linkDes: 'Vue实践教程'
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
