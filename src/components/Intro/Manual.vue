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
      msg: '手册',
      props: ['renderLink'],
      link: [
        {
          tagName: 'Vue手册',
          tagList: [
            {
              linkName: 'Vue 爬坑之路',
              linkSrc: 'http://www.cnblogs.com/wisewrong/tag/vue/',
              linkDes: 'Vue实践教程'
            }
          ]
        },
        {
          tagName: 'Express手册',
          tagList: [
            {
              linkName: 'Node.js：cookie和session在Express中应用',
              linkSrc: 'http://kirochen.com/2015/07/09/about-cookie-session/',
              linkDes: ''
            },
            {
              linkName: 'Nodejs进阶：express+session实现简易身份认证',
              linkSrc: 'http://www.cnblogs.com/chyingp/p/nodejs-learning-express-session.html',
              linkDes: ''
            },
            {
              linkName: 'Nodejs进阶：基于express+multer的文件上传',
              linkSrc: 'http://www.cnblogs.com/chyingp/p/express-multer-file-upload.html',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'MongoDB手册',
          tagList: [
            {
              linkName: '8天学通MongoDB',
              linkSrc: 'http://www.cnblogs.com/huangxincheng/category/355399.html',
              linkDes: ''
            },
            {
              linkName: 'Mongoose学习参考文档——基础篇',
              linkSrc: 'https://cnodejs.org/topic/504b4924e2b84515770103dd',
              linkDes: ''
            },
            {
              linkName: 'Nodejs基于mongoose模块的增删改查',
              linkSrc: 'http://blog.csdn.net/nick_php/article/details/52215987',
              linkDes: ''
            },
            {
              linkName: 'mongoose对查询结果进行排序',
              linkSrc: 'http://blog.csdn.net/zk437092645/article/details/9345885',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'SocketIO手册',
          tagList: [
            {
              linkName: 'Socket.io各个发送消息的含义',
              linkSrc: 'http://www.cnblogs.com/liuswi/p/4024319.html',
              linkDes: ''
            }
          ]
        },
        {
          tagName: '用户认证手册',
          tagList: [
            {
              linkName: '基于JWT的Socket.io用户认证',
              linkSrc: 'http://blog.csdn.net/soaring_tiger/article/details/51439605',
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
