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
      msg: 'UI库',
      link: [
        {
          tagName: 'React',
          tagList: [
            {
              linkName: 'ANTD 组件',
              linkSrc: 'https://ant.design/docs/react/introduce-cn',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'Vue',
          tagList: [
            {
              linkName: 'iView 组件',
              linkSrc: 'https://www.iviewui.com/docs/guide/install',
              linkDes: ''
            },
            {
              linkName: 'Element 组件',
              linkSrc: 'http://element.eleme.io/#/zh-CN/component/installation',
              linkDes: ''
            },
            {
              linkName: 'Vux 组件',
              linkSrc: 'https://vux.li/#/zh-CN/components',
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
