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
      msg: '文档',
      link: [
        {
          tagName: 'Git',
          tagList: [
            {
              linkName: 'Git 官方文档',
              linkSrc: 'https://git-scm.com/doc',
              linkDes: ''
            },
            {
              linkName: '廖雪峰 Git 教程',
              linkSrc: 'http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'NodeJS',
          tagList: [
            {
              linkName: 'NodeJS 官方文档',
              linkSrc: 'https://nodejs.org/en/',
              linkDes: ''
            },
            {
              linkName: 'NodeJS 中文文档',
              linkSrc: 'http://nodejs.cn/',
              linkDes: ''
            },
            {
              linkName: 'json-web-token（JWT） 官方文档',
              linkSrc: 'http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html',
              linkDes: ''
            },
            {
              linkName: 'NodeJS JWT库',
              linkSrc: 'https://github.com/auth0/node-jsonwebtoken',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'NPM',
          tagList: [
            {
              linkName: 'NPM 官方文档',
              linkSrc: 'https://docs.npmjs.com/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'GulpJS',
          tagList: [
            {
              linkName: 'GulpJS 官网',
              linkSrc: 'http://gulpjs.com/',
              linkDes: ''
            },
            {
              linkName: 'GulpJS 中文网',
              linkSrc: 'http://www.gulpjs.com.cn/',
              linkDes: ''
            },
            {
              linkName: 'GulpJS 快速入门',
              linkSrc: 'http://www.cnblogs.com/2050/p/4198792.html',
              linkDes: ''
            },
            {
              linkName: 'GulpJS 常用模块',
              linkSrc: 'http://www.techug.com/post/gulp.html',
              linkDes: ''
            },
            {
              linkName: 'GulpJS 使用实例',
              linkSrc: 'http://www.tuicool.com/articles/uIF7FvQ',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'Webpack',
          tagList: [
            {
              linkName: 'Webpack 官方文档',
              linkSrc: 'https://webpack.js.org/',
              linkDes: ''
            },
            {
              linkName: 'Webpack 中文文档',
              linkSrc: 'https://doc.webpack-china.org/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'MongoDB',
          tagList: [
            {
              linkName: 'MongoDB 官方文档',
              linkSrc: 'https://www.mongodb.org/',
              linkDes: ''
            },
            {
              linkName: 'MongoDB 中文文档',
              linkSrc: 'http://www.mongodb.org.cn/',
              linkDes: ''
            },
            {
              linkName: 'Mongoose 中文文档',
              linkSrc: 'http://mongoosejs.com/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'SocketIO',
          tagList: [
            {
              linkName: 'SocketIO 官方文档',
              linkSrc: 'https://socket.io/docs/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'EJS',
          tagList: [
            {
              linkName: 'EJS 官方文档',
              linkSrc: 'http://www.embeddedjs.com/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'Pug',
          tagList: [
            {
              linkName: 'Pug 官方文档',
              linkSrc: 'https://pugjs.org/api/getting-started.html',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'Less',
          tagList: [
            {
              linkName: 'Less 官方文档',
              linkSrc: 'http://lesscss.org/',
              linkDes: ''
            },
            {
              linkName: 'Less 中文文档',
              linkSrc: 'http://lesscss.cn/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'Babel',
          tagList: [
            {
              linkName: 'Babel 官方文档',
              linkSrc: 'http://babeljs.io/',
              linkDes: ''
            },
            {
              linkName: 'Babel 中文文档',
              linkSrc: 'http://babeljs.cn/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'Eslint',
          tagList: [
            {
              linkName: 'ChartJS 官方文档',
              linkSrc: 'http://eslint.org/',
              linkDes: ''
            },
            {
              linkName: 'ChartJS 中文文档',
              linkSrc: 'http://eslint.cn/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'MochaJS',
          tagList: [
            {
              linkName: 'MochaJS 官方文档',
              linkSrc: 'http://mochajs.org/',
              linkDes: ''
            },
            {
              linkName: 'MochaJS 实例教程',
              linkSrc: 'http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html',
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
