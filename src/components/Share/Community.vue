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
      msg: '社区',
      link: [
        {
          tagName: '综合（国内）',
          tagList: [
            {
              linkName: 'V2EX',
              linkSrc: 'https://www.v2ex.com/go/js',
              linkDes: ''
            },
            {
              linkName: 'segmentfault',
              linkSrc: 'https://segmentfault.com/t/javascript',
              linkDes: ''
            }
          ]
        },
        {
          tagName: '综合（国外）',
          tagList: [
            {
              linkName: 'stackoverflow',
              linkSrc: 'http://stackoverflow.com/questions/tagged/javascript?sort=frequent&pageSize=15',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'Node',
          tagList: [
            {
              linkName: 'CNodeJS',
              linkSrc: 'https://cnodejs.org/',
              linkDes: ''
            }
          ]
        },
        {
          tagName: 'React',
          tagList: [
            {
              linkName: 'React China',
              linkSrc: 'http://react-china.org/',
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
