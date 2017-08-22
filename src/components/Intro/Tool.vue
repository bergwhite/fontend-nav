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
      msg: '工具',
      link: [
        {
          tagName: '常用',
          tagList: [
            {
              linkName: '兼容性查询 Can I Use',
              linkSrc: 'http://caniuse.com/',
              linkDes: ''
            },
            {
              linkName: '在线流程图 ProcessOn',
              linkSrc: 'https://www.processon.com/popular',
              linkDes: ''
            },
            {
              linkName: '在线编辑器 jsfiddle',
              linkSrc: 'https://jsfiddle.net/',
              linkDes: ''
            },
            {
              linkName: 'youmightnotneedjquery',
              linkSrc: 'http://youmightnotneedjquery.com/',
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
