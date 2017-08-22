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
