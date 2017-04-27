<template>
  <div id="app">
    <div class="header">
      <h1 class="header-title">前端导航</h1>
    </div>
    <div class="nav">
      <div class="nav-tag" v-for="nav in navList">
        <div class="nav-name">{{ nav.tagName }}</div>
        <ul class="nav-links">
          <li class="nav-link" v-for="link in nav.link">
            <router-link :to="link.link">{{ link.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <!--
    <router-link to="/">首页</router-link>
    <router-link to="/intro">入门</router-link>
    <router-link to="/advance">进阶</router-link>
    <ul>
      <li>深入</li>
      <router-link to="/deep/library">库</router-link>
      <router-link to="/deep/framework">框架</router-link>
      <router-link to="/deep/tool">工具</router-link>
    </ul>
    <router-link to="/share">分享</router-link>
    -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      navList: [
        {
          tagName: '入门',
          link: [
            {
              name: '教程',
              link: '/intro/learn'
            },
            {
              name: '视频',
              link: '/intro/video'
            }
          ]
        },
        {
          tagName: '进阶',
          link: [
            {
              name: '图书',
              link: '/advance/book'
            },
            {
              name: '系列',
              link: '/advance/series'
            }
          ]
        },
        {
          tagName: '深入',
          link: [
            {
              name: '库',
              link: '/deep/library'
            },
            {
              name: '框架',
              link: '/deep/framework'
            },
            {
              name: '工具',
              link: '/deep/tool'
            }
          ]
        },
        {
          tagName: '分享',
          link: [
            {
              name: '社区',
              link: '/share/community'
            },
            {
              name: '博客',
              link: '/share/blog'
            }
          ]
        }
      ]
    }
  },
  methods: {
    renderLink: function () {
      return this.link[0].tagName
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style-type: none;
}
body {
  margin: 0;
  background-color: gray;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 40px 80px;
}
.header-title {
  color: white;
}
.nav {
  width: 100%;
  overflow: hidden;
}
.content {
  background-color: white;
  padding: 20px 40px;
  margin-top: 20px;
}
.nav-tag {
  float: left;
  display: block;
  width: 100%;
}
.nav-name,.nav-links {
  float: left;
  display: block;
}
.nav-name {
  display: block;
  width: 7%;
  height: 50px;
  line-height: 50px;
  float: left;
  text-align: center;
  background-color: #03a9f4;
  color: white;
}
.nav-links {
  width: 93%;
  height: 50px;
  overflow: hidden;
  background-color: white;
}
.nav-link {
  float: left;
  text-align: center;
  line-height: 50px;
  color: #2c3e50;
}
.nav-link:hover {
  background-color: #ff9800;
}
.nav-link a {
  display: block;
  width: 50px;
  height: 50px;
}
@media screen and (max-width: 960px) {
  body {
    transition: all .2s;
  }
  #app {
    margin: 5px;
  }
  .nav-tag {
    max-width: 940px;
  }
  .nav-links {
    width: 93%;
  }
}
@media screen and (max-width: 450px) {
  .nav-name {
    width: 15%;
  }
  .nav-links {
    width: 85%;
  }
}
</style>
