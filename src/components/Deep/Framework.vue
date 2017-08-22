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
      msg: '框架',
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
            },
            {
              linkName: 'React-Router 官方示例',
              linkSrc: 'https://reacttraining.com/react-router/web/example/basic',
              linkDes: ''
            },
            {
              linkName: 'Redux 官方文档',
              linkSrc: 'http://redux.js.org/',
              linkDes: ''
            },
            {
              linkName: 'Redux-Saga 官方文档',
              linkSrc: 'https://redux-saga.js.org/',
              linkDes: ''
            },
            {
              linkName: 'ImmutableJS 官方文档',
              linkSrc: 'http://facebook.github.io/immutable-js/',
              linkDes: ''
            },
            {
              linkName: 'ImmutableJS API',
              linkSrc: 'http://facebook.github.io/immutable-js/docs/#/',
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
              linkName: 'Vue 中文文档',
              linkSrc: 'https://cn.vuejs.org/',
              linkDes: '简单易用的MVVM框架'
            },
            {
              linkName: 'Vue API',
              linkSrc: 'https://cn.vuejs.org/v2/api/',
              linkDes: '易上手的轻量级MVVM框架'
            },
            {
              linkName: 'Vue Router 中文文档',
              linkSrc: 'https://router.vuejs.org/zh-cn/',
              linkDes: 'Vue路由管理'
            },
            {
              linkName: 'Vuex 中文文档',
              linkSrc: 'https://vuex.vuejs.org/zh-cn/',
              linkDes: 'Vue状态管理器'
            },
            {
              linkName: 'Nuxt 中文文档',
              linkSrc: 'https://zh.nuxtjs.org/',
              linkDes: 'Vue服务器端渲染框架'
            },
            {
              linkName: 'Nuxt API',
              linkSrc: 'https://zh.nuxtjs.org/api',
              linkDes: 'Vue服务器端渲染框架'
            }
          ]
        },
        {
          tagName: 'Express',
          tagList: [
            {
              linkName: 'Express 官方文档',
              linkSrc: 'http://expressjs.com/',
              linkDes: ''
            },
            {
              linkName: 'Express 中文文档',
              linkSrc: 'http://www.expressjs.com.cn/',
              linkDes: ''
            },
            {
              linkName: 'Express API',
              linkSrc: 'http://expressjs.com/en/4x/api.html',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'Koa',
          tagList: [
            {
              linkName: 'Koa 官方文档',
              linkSrc: 'http://koajs.com/',
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
